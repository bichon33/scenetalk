import { rooms as mockRooms } from "@/lib/mock-data";
import type { Room } from "@/lib/types";

/**
 * Data-access seam for rooms. Pages call this instead of importing the
 * mock array directly, so swapping in a real Supabase query later means
 * changing this function only.
 */
export async function getRooms(): Promise<Room[]> {
  // TODO: replace with a Supabase query (e.g. supabase.from("rooms").select()).
  return mockRooms;
}
