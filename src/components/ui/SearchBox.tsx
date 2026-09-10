import type { InputHTMLAttributes } from "react";
import { SearchIcon } from "@/components/icons";

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: "md" | "lg";
};

export function SearchBox({ variant = "md", className = "", ...props }: SearchBoxProps) {
  const padding = variant === "lg" ? "px-6 py-[18px]" : "px-[18px] py-[11px]";
  const fontSize = variant === "lg" ? "text-[1.02rem]" : "text-[0.92rem]";

  return (
    <div
      className={`flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-[var(--surface-2)] transition-colors focus-within:border-[var(--accent)]/60 focus-within:bg-[var(--surface-3)] ${padding} ${className}`}
    >
      <SearchIcon className="shrink-0 text-[var(--ink)] opacity-55" />
      <input
        className={`w-full min-w-0 bg-transparent text-[var(--ink)] outline-none placeholder:text-[var(--muted)] ${fontSize}`}
        {...props}
      />
    </div>
  );
}
