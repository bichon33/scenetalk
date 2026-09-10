"use client";

import { MoonIcon, SunIcon } from "@/components/icons";
import { useTheme } from "@/lib/theme";
import { SettingsRow } from "./SettingsRow";
import { Toggle } from "@/components/ui/Toggle";

export function ThemeToggleRow() {
  const { theme, setTheme } = useTheme();

  return (
    <SettingsRow
      icon={theme === "dark" ? <MoonIcon /> : <SunIcon />}
      title="다크 모드"
      subtitle="어두운 테마로 화면을 표시해요"
      trailing={
        <Toggle
          key={theme}
          defaultChecked={theme === "dark"}
          onChange={(checked) => setTheme(checked ? "dark" : "light")}
          aria-label="다크 모드"
        />
      }
    />
  );
}
