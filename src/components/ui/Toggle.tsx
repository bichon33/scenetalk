"use client";

import { useState } from "react";

export function Toggle({
  defaultChecked = false,
  onChange,
  "aria-label": ariaLabel,
}: {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  "aria-label"?: string;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => {
        const next = !checked;
        setChecked(next);
        onChange?.(next);
      }}
      className="relative h-[22px] w-[38px] shrink-0 rounded-full transition-colors"
      style={{ background: checked ? "var(--accent-line)" : "var(--border-mid)" }}
    >
      <span
        className="absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-[#F2ECE0] transition-transform"
        style={{ transform: checked ? "translateX(16px)" : "translateX(0)" }}
      />
    </button>
  );
}
