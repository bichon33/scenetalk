import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import type { PersonaType } from "@/lib/types";

const rankStyles = [
  "bg-[var(--accent-line)] text-[var(--bg)]",
  "bg-[var(--border-mid)] text-[var(--ink)]",
  "bg-[var(--border-soft)] text-[var(--ink-dim)]",
];

export function TypeCard({ type, rank }: { type: PersonaType; rank: number }) {
  return (
    <Link
      href={`/report/${encodeURIComponent(type.id)}`}
      className="mb-2.5 flex items-center gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-4 transition-colors last:mb-0 hover:border-[var(--accent)]/30 hover:bg-[var(--surface-3)]"
    >
      <span
        className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-[0.85rem] font-bold ${rankStyles[rank - 1] ?? rankStyles[2]}`}
      >
        {rank}
      </span>
      <span className="flex-1">
        <span className="block text-[0.98rem] font-semibold text-[var(--ink)]">{type.name}</span>
        <span className="mt-[3px] block text-[0.78rem] text-[var(--ink-dim)]">
          {type.totalCount}편 중 {type.movieCount}편
        </span>
      </span>
      <ChevronRightIcon className="shrink-0 text-[var(--ink-dim)]" />
    </Link>
  );
}
