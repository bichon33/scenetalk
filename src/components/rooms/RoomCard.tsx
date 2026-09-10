import Link from "next/link";
import { FilmDotIcon } from "@/components/icons";
import type { Room } from "@/lib/types";

export function RoomCard({ room }: { room: Room }) {
  return (
    <Link
      href={`/rooms/${room.id}`}
      className="flex items-center gap-3.5 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-3.5 transition-colors hover:border-[var(--accent)]/30 hover:bg-[var(--surface-3)]"
    >
      <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#22222D]">
        <FilmDotIcon className="text-[var(--accent-line)]" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[0.92rem] font-medium text-[var(--ink)]">{room.title}</span>
        <span className="mt-0.5 block text-[0.74rem] text-[var(--ink-dim)]">{room.genre}</span>
      </span>
      <span className="shrink-0 text-[0.72rem] whitespace-nowrap text-[var(--muted)]">{room.lastActiveAt}</span>
    </Link>
  );
}
