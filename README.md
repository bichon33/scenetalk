# SceneTalk

"More than a movie, it's a conversation." — a movie-chat app. Next.js (App
Router) + TypeScript + Tailwind CSS v4, scaffolded from the `home` /
`room_list` / `report` / `settings` light & dark HTML mockups.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/
    page.tsx              home — centered search, brand mark, pinned rooms
    rooms/page.tsx         room list
    rooms/[roomId]/page.tsx  room chat (placeholder — not yet designed)
    report/page.tsx        taste analysis report
    report/[type]/page.tsx   movies for one persona type
    settings/page.tsx      settings
    globals.css            design tokens (light/dark) distilled from the mockups
  components/
    ui/          SearchBox, IconButton, Tag, Toggle
    layout/      AppFrame (460px mobile shell), ScreenHeader (back + title)
    home/        MenuDropdown, PinnedRoomChip
    rooms/       RoomCard
    report/      TypeCard, MovieCard
    settings/    SettingsRow, SettingsGroup, ThemeToggleRow
    icons.tsx    shared inline icon set
  lib/
    theme.tsx     light/dark theme (data-theme attribute, no-flash init script)
    types.ts      Room / PersonaReport / PersonaType / PersonaMovie
    mock-data.ts  placeholder data standing in for a future API
```

The home screen is a full-bleed centered layout (menu → room list / report /
settings), matching the mockups; the other three screens share a 460px
mobile-width `AppFrame` with a back-button header, also per the mockups.

Dark mode is wired to a real toggle in Settings (`화면 → 다크 모드`) backed by
`localStorage` + system preference, even though the mockups only showed two
static light/gray variants — the actual product needs a live switch.

## Notes on the source mockups

- The light and dark (`gray_ver`) mockups used slightly different alpha
  values per screen for the same visual role (surface / border / hover);
  these were unified into one token scale in `globals.css` so every screen
  shares the same system.
- No chat/conversation UI was in the mockups, so `/rooms/[roomId]` is a
  placeholder screen — build it out once that design exists.
