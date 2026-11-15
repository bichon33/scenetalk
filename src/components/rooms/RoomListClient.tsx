"use client";

import { useMemo, useState } from "react";
import { RoomCard } from "@/components/rooms/RoomCard";
import { SearchBox } from "@/components/ui/SearchBox";
import type { Room, RoomWatchStatus } from "@/lib/types";

type FilterValue = RoomWatchStatus | "all";

const filters: { value: FilterValue; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "watched", label: "봤음" },
  { value: "unwatched", label: "안 봄" },
  { value: "unsure", label: "확실치 않음" },
];

export function RoomListClient({ rooms }: { rooms: Room[] }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");

  const filteredRooms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return rooms.filter((room) => {
      const matchesFilter = filter === "all" || room.watchStatus === filter;
      const matchesQuery = room.title.toLowerCase().includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [rooms, filter, query]);

  return (
    <>
      <div className="px-5 pt-4 pb-1.5">
        <SearchBox
          name="query"
          placeholder="영화 제목으로 검색 (예: 인터스텔라)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto px-5 pt-3 pb-1">
        {filters.map(({ value, label }) => {
          const active = value === filter;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className="shrink-0 rounded-full border px-3.5 py-[7px] text-[0.8rem] whitespace-nowrap transition-colors"
              style={{
                borderColor: active ? "transparent" : "var(--border-mid)",
                background: active ? "var(--accent-line)" : "var(--surface-1)",
                color: active ? "var(--bg)" : "var(--ink-dim)",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-5 pt-3 pb-5">
        {filteredRooms.length === 0 ? (
          <p className="pt-10 text-center text-[0.85rem] text-[var(--ink-dim)]">
            조건에 맞는 채팅방이 없어요
          </p>
        ) : (
          filteredRooms.map((room) => <RoomCard key={room.id} room={room} />)
        )}
      </div>
    </>
  );
}
