import { AppFrame } from "@/components/layout/AppFrame";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { RoomCard } from "@/components/rooms/RoomCard";
import { SearchBox } from "@/components/ui/SearchBox";
import { rooms } from "@/lib/mock-data";

export default function RoomsPage() {
  return (
    <AppFrame>
      <ScreenHeader title="방 목록" backHref="/" />

      <div className="px-5 pt-4 pb-1.5">
        <SearchBox name="query" placeholder="영화 제목으로 검색 (예: 인터스텔라)" />
      </div>

      <div className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-5 pt-2 pb-5">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </AppFrame>
  );
}
