"use client";

import type { ReactNode } from "react";
import { MonitorIcon, MoonIcon, SunIcon } from "@/components/icons";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { useTheme, type ThemeMode } from "@/lib/theme";
import { SettingsRow } from "./SettingsRow";

const options: { value: ThemeMode; label: ReactNode; "aria-label": string }[] = [
  { value: "system", label: <MonitorIcon width={13} height={13} />, "aria-label": "시스템 설정 따르기" },
  { value: "light", label: <SunIcon width={13} height={13} />, "aria-label": "라이트 모드" },
  { value: "dark", label: <MoonIcon width={13} height={13} />, "aria-label": "다크 모드" },
];

export function ThemeToggleRow() {
  const { mode, theme, setMode } = useTheme();

  return (
    <SettingsRow
      icon={theme === "dark" ? <MoonIcon /> : <SunIcon />}
      title="테마"
      subtitle="시스템 설정을 따르거나 라이트/다크를 직접 선택할 수 있어요"
      trailing={<SegmentedControl value={mode} onChange={setMode} options={options} />}
    />
  );
}
