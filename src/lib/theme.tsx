"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/** The user's actual preference: follow the OS, or pin to one theme. */
export type ThemeMode = "system" | "light" | "dark";
/** The resolved, visual theme — what `data-theme` on <html> is set to. */
export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "scenetalk-theme";

const DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)";

function isThemeMode(value: string | null): value is ThemeMode {
  return value === "system" || value === "light" || value === "dark";
}

/**
 * Pre-hydration script (see `<Script>` in the root layout): resolves the
 * stored mode (or the OS preference, if the mode is "system" or nothing
 * has been chosen yet) and stamps `data-theme` on <html> before paint —
 * so there is no light/dark flash on load.
 */
export const THEME_INIT_SCRIPT = `
  (function () {
    try {
      var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
      var mode = stored === 'light' || stored === 'dark' ? stored : 'system';
      var theme = mode === 'system'
        ? (window.matchMedia('${DARK_MEDIA_QUERY}').matches ? 'dark' : 'light')
        : mode;
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

function getSystemTheme(): Theme {
  return window.matchMedia(DARK_MEDIA_QUERY).matches ? "dark" : "light";
}

function resolveTheme(mode: ThemeMode): Theme {
  return mode === "system" ? getSystemTheme() : mode;
}

function applyTheme(mode: ThemeMode) {
  document.documentElement.setAttribute("data-theme", resolveTheme(mode));
}

/**
 * `mode` (the user's stored preference) and `theme` (the resolved
 * `data-theme` on <html>) are both external state — owned by
 * localStorage / the DOM, not by React — so both are read with
 * `useSyncExternalStore` rather than mirrored into `useState` via an
 * effect (see the "you might not need an effect" guidance). This also
 * keeps SSR and the first client render in sync: the server snapshot is
 * what the server actually rendered, and the client re-reads the real
 * value, which the pre-hydration script already applied before
 * hydration ran.
 */
const modeListeners = new Set<() => void>();

function notifyModeListeners() {
  modeListeners.forEach((listener) => listener());
}

function subscribeMode(onStoreChange: () => void) {
  modeListeners.add(onStoreChange);
  const onStorage = (e: StorageEvent) => {
    if (e.key === THEME_STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    modeListeners.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getModeSnapshot(): ThemeMode {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeMode(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

function getServerModeSnapshot(): ThemeMode {
  return "system";
}

function subscribeTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

type ThemeContextValue = {
  /** The user's stored preference — "system", "light", or "dark". */
  mode: ThemeMode;
  /** The resolved visual theme actually applied to the page. */
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const mode = useSyncExternalStore(subscribeMode, getModeSnapshot, getServerModeSnapshot);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);

  const setMode = useCallback((next: ThemeMode) => {
    try {
      if (next === "system") {
        localStorage.removeItem(THEME_STORAGE_KEY);
      } else {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      }
    } catch {
      // ignore storage errors (private mode, disabled storage, etc.)
    }
    applyTheme(next);
    notifyModeListeners();
  }, []);

  // While following the system, keep the resolved theme live if the OS
  // preference changes without a reload (e.g. switching macOS appearance).
  useEffect(() => {
    if (mode !== "system") return;
    const mql = window.matchMedia(DARK_MEDIA_QUERY);
    const onChange = () => applyTheme("system");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, theme, setMode }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
