import Link from "next/link";
import { FilmDotIcon } from "@/components/icons";
import type { Room } from "@/lib/types";

export function PinnedRoomChip({ room }: { room: Room }) {
  return (
    <Link
      href={`/rooms/${room.id}`}
      className="flex items-center gap-2 rounded-full border border-[var(--border-mid)] bg-[var(--surface-2)] py-[9px] pr-4 pl-[10px] transition-colors hover:border-[var(--accent)]/35 hover:bg-[var(--surface-3)]"
    >
      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#1B1F2B]">
        <FilmDotIcon width={12} height={12} className="text-[var(--accent-line)]" />
      </span>
      <span>
        <span className="block text-[0.82rem] text-[var(--ink)]">{room.title}</span>
        <span className="block text-[0.72rem] text-[var(--ink-dim)]">이어서 대화하기</span>
      </span>
    </Link>
  );
}
