import type { PersonaReport, Room } from "./types";

/**
 * Placeholder data standing in for the future API layer. Shapes mirror
 * the light_ver / gray_ver HTML mockups (home, room list, report) so the
 * real screens can be wired up to a backend later without changing the
 * component props.
 */

export const pinnedRooms: Room[] = [
  { id: "odyssey", title: "오디세이", genre: "모험 · 드라마", lastActiveAt: "2026.09.02", pinned: true },
  { id: "whiplash", title: "위플래쉬", genre: "드라마 · 음악", lastActiveAt: "2026.07.10", pinned: true },
  { id: "interstellar", title: "인터스텔라", genre: "SF · 드라마", lastActiveAt: "2026.07.22", pinned: true },
];

export const rooms: Room[] = [
  { id: "spiderman-no-way-home", title: "스파이더맨: 노 웨이 홈", genre: "액션 · SF", lastActiveAt: "2026.09.06" },
  { id: "odyssey", title: "오디세이", genre: "모험 · 드라마", lastActiveAt: "2026.09.02" },
  { id: "whiplash", title: "위플래쉬", genre: "드라마 · 음악", lastActiveAt: "2026.07.10" },
];

export const personaReport: PersonaReport = {
  eyebrow: "지금까지 분석된 7편 중 가장 많이 나타난 유형",
  personaName: "영화 애호가",
  description: "전체 대화의 절반 이상에서 이 유형으로 나타났어요",
  keywords: ["느와르", "A24 스타일", "잔잔한 결말 선호", "비선형 서사"],
  topTypes: [
    { id: "애호가", name: "영화 애호가", movieCount: 4, totalCount: 7 },
    { id: "씨네필", name: "씨네필", movieCount: 2, totalCount: 7 },
    { id: "입문자", name: "영화 입문자", movieCount: 1, totalCount: 7 },
  ],
  moviesByType: {
    애호가: [
      { title: "스파이더맨: 노 웨이 홈", genre: "액션 · SF", date: "2026.09.06" },
      { title: "라라랜드", genre: "뮤지컬 · 로맨스", date: "2026.08.20" },
      { title: "소셜 네트워크", genre: "드라마", date: "2026.08.02" },
      { title: "인터스텔라", genre: "SF · 드라마", date: "2026.07.22" },
    ],
    씨네필: [
      { title: "오디세이", genre: "모험 · 드라마", date: "2026.09.02" },
      { title: "매트릭스", genre: "SF · 액션", date: "2026.07.30" },
    ],
    입문자: [{ title: "위플래쉬", genre: "드라마 · 음악", date: "2026.07.10" }],
  },
};
