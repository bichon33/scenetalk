export type Room = {
  id: string;
  title: string;
  genre: string;
  lastActiveAt: string; // "YYYY.MM.DD"
  pinned?: boolean;
};

export type PersonaType = {
  id: string;
  name: string;
  movieCount: number;
  totalCount: number;
};

export type PersonaMovie = {
  title: string;
  genre: string;
  date: string; // "YYYY.MM.DD"
};

export type PersonaReport = {
  eyebrow: string;
  personaName: string;
  description: string;
  keywords: string[];
  topTypes: PersonaType[];
  moviesByType: Record<string, PersonaMovie[]>;
};
