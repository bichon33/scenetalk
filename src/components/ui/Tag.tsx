export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[var(--border-mid)] bg-[var(--surface-2)] px-3.5 py-[7px] text-[0.85rem] text-[var(--ink)]">
      {children}
    </span>
  );
}
