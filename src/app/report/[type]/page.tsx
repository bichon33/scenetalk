import { notFound } from "next/navigation";
import { AppFrame } from "@/components/layout/AppFrame";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { MovieCard } from "@/components/report/MovieCard";
import { personaReport } from "@/lib/mock-data";

export default async function ReportTypeDetailPage({ params }: PageProps<"/report/[type]">) {
  const { type } = await params;
  const typeId = decodeURIComponent(type);
  const persona = personaReport.topTypes.find((t) => t.id === typeId);
  const movies = personaReport.moviesByType[typeId];

  if (!persona || !movies) {
    notFound();
  }

  return (
    <AppFrame>
      <ScreenHeader title={persona.name} backHref="/report" />
      <div className="px-5.5 py-6.5">
        <h3 className="mb-4 text-[0.82rem] font-semibold text-[var(--ink-dim)]">
          이 유형에 가깝게 분석된 영화들
        </h3>
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </AppFrame>
  );
}
