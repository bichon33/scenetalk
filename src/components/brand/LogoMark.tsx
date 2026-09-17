type LogoMarkProps = {
  size?: number;
  className?: string;
};

/**
 * Flat, single-stroke Scenunion mark — a film-reel "S"/question-mark
 * silhouette. The perforation cutouts are punched out in the page
 * background color (`var(--bg)`), so the mark stays theme-aware without
 * separate light/dark assets. No gradient, gloss, or shadow — this is
 * the app's icon style (see `components/icons.tsx`), not the old
 * photographic logo render.
 */
export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 62 29 C 62 12 36 12 36 27 C 36 40 51 42 58 51 C 67 62 62 74 47 78 C 41 79.5 35 78.5 31 75.5"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="43" y="38" width="7" height="7" fill="var(--bg)" transform="rotate(48 46.5 41.5)" />
      <rect x="50" y="47" width="7" height="7" fill="var(--bg)" transform="rotate(48 53.5 50.5)" />
      <circle cx="38" cy="89" r="6.5" fill="currentColor" />
    </svg>
  );
}
