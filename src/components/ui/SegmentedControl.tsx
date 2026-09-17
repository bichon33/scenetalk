import type { ReactNode } from "react";

type SegmentedControlProps<T extends string> = {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: ReactNode; "aria-label": string }[];
};

export function SegmentedControl<T extends string>({
  value,
  onChange,
  options,
}: SegmentedControlProps<T>) {
  return (
    <div
      role="radiogroup"
      className="flex items-center gap-0.5 rounded-full border border-[var(--border-mid)] bg-[var(--surface-1)] p-0.5"
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option["aria-label"]}
            onClick={() => onChange(option.value)}
            className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
            style={{
              background: active ? "var(--accent-line)" : "transparent",
              color: active ? "var(--bg)" : "var(--ink-dim)",
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
