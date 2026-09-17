import Image from "next/image";
import { MenuDropdown } from "@/components/home/MenuDropdown";
import { PinnedRoomChip } from "@/components/home/PinnedRoomChip";
import { SearchBox } from "@/components/ui/SearchBox";
import { pinnedRooms } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_65%_50%_at_50%_50%,var(--accent-dim),transparent_70%)]">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.035]" />

      <MenuDropdown />

      <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24">
        <Image
          src="/brand/scenunion-logo.png"
          alt="Scenunion — More than a movie, it's a conversation."
          width={746}
          height={791}
          priority
          className="animate-rise-in w-full max-w-[220px]"
        />

        <div className="animate-rise-in w-full max-w-[620px]" style={{ animationDelay: "0.15s" }}>
          <form>
            <SearchBox variant="lg" name="query" placeholder="무슨 영화 이야기할까요?" autoFocus />
          </form>
          <p className="mt-3 text-center text-[0.82rem] text-[var(--ink-dim)]">
            영화 제목을 말해도 되고, 그냥 하고 싶은 얘기부터 시작해도 좋아요
          </p>
        </div>

        {pinnedRooms.length > 0 && (
          <div className="animate-rise-in w-full max-w-[620px]" style={{ animationDelay: "0.3s" }}>
            <p className="mb-3 text-center text-[0.74rem] text-[var(--ink-dim)]">고정된 방</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {pinnedRooms.map((room) => (
                <PinnedRoomChip key={room.id} room={room} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
