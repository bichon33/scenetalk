import { FilmDotIcon } from "@/components/icons";
import type { PersonaMovie } from "@/lib/types";

export function MovieCard({ movie }: { movie: PersonaMovie }) {
  return (
    <div className="mb-2.5 flex items-center gap-3.5 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-3.5 last:mb-0">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#22222D]">
        <FilmDotIcon width={15} height={15} className="text-[var(--accent-line)]" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.9rem] font-medium text-[var(--ink)]">{movie.title}</span>
        <span className="mt-[3px] block text-[0.76rem] text-[var(--ink-dim)]">{movie.genre}</span>
      </span>
      <span className="ml-auto shrink-0 text-[0.74rem] text-[var(--muted)]">{movie.date}</span>
    </div>
  );
}
