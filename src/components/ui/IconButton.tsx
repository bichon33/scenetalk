import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: number;
};

export function IconButton({ children, size = 34, className = "", ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`flex shrink-0 items-center justify-center rounded-full border border-[var(--border-mid)] bg-[var(--surface-2)] text-[var(--ink-dim)] transition-colors hover:bg-[var(--surface-3)] ${className}`}
      style={{ width: size, height: size }}
      {...props}
    >
      {children}
    </button>
  );
}
