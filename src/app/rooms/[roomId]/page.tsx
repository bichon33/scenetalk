import { notFound } from "next/navigation";
import { AppFrame } from "@/components/layout/AppFrame";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { pinnedRooms, rooms } from "@/lib/mock-data";

export default async function RoomChatPage({ params }: PageProps<"/rooms/[roomId]">) {
  const { roomId } = await params;
  const room = [...rooms, ...pinnedRooms].find((r) => r.id === roomId);

  if (!room) {
    notFound();
  }

  return (
    <AppFrame>
      <ScreenHeader title={room.title} backHref="/rooms" />
      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8 text-center">
        <p className="text-[0.92rem] text-[var(--ink)]">{room.genre}</p>
        <p className="text-[0.82rem] text-[var(--ink-dim)]">
          채팅 화면은 다음 단계에서 디자인될 예정이에요.
        </p>
      </div>
    </AppFrame>
  );
}
