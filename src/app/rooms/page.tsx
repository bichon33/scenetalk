import { AppFrame } from "@/components/layout/AppFrame";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { RoomListClient } from "@/components/rooms/RoomListClient";
import { getRooms } from "@/lib/data/rooms";

export default async function RoomsPage() {
  const rooms = await getRooms();

  return (
    <AppFrame>
      <ScreenHeader title="방 목록" backHref="/" />
      <RoomListClient rooms={rooms} />
    </AppFrame>
  );
}
