import type { ReactNode } from "react";

/**
 * Mobile-width shell used by every screen reached through the home
 * screen's menu (room list, report, settings) — mirrors `.frame` /
 * `.app-shell` in the mockups.
 */
export function AppFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[460px] flex-col border-x border-[var(--hairline)]">
      {children}
    </div>
  );
}
