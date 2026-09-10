import type { ReactNode } from "react";
import { ChevronRightIcon } from "@/components/icons";

type SettingsRowProps = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  danger?: boolean;
  trailing?: ReactNode;
  showChevron?: boolean;
  onClick?: () => void;
};

export function SettingsRow({
  icon,
  title,
  subtitle,
  danger = false,
  trailing,
  showChevron = false,
}: SettingsRowProps) {
  return (
    <div className="flex items-center gap-3.5 border-b border-[var(--border-soft)] px-4 py-[15px] transition-colors last:border-b-0 hover:bg-[var(--surface-2)]">
      <span
        className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[9px]"
        style={{
          background: danger ? "var(--danger-bg)" : "var(--accent-dim)",
          color: danger ? "var(--danger)" : "var(--accent)",
        }}
      >
        {icon}
      </span>
      <span className="flex-1">
        <span className="block text-[0.92rem]" style={{ color: danger ? "var(--danger)" : "var(--ink)" }}>
          {title}
        </span>
        {subtitle && <span className="mt-0.5 block text-[0.76rem] text-[var(--ink-dim)]">{subtitle}</span>}
      </span>
      {trailing}
      {showChevron && <ChevronRightIcon className="shrink-0 text-[var(--ink-dim)]" />}
    </div>
  );
}

export function SettingsGroup({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[22px] overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)]">
      {children}
    </div>
  );
}

export function SettingsSectionLabel({ children }: { children: string }) {
  return <div className="mb-2.5 text-[0.76rem] font-semibold text-[var(--ink-dim)]">{children}</div>;
}
