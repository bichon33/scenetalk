import Image from "next/image";
import { AppFrame } from "@/components/layout/AppFrame";
import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { TypeCard } from "@/components/report/TypeCard";
import { Tag } from "@/components/ui/Tag";
import { personaReport } from "@/lib/mock-data";

export default function ReportPage() {
  return (
    <AppFrame>
      <ScreenHeader title="취향분석 보고서" backHref="/" />

      <div className="flex flex-col items-center border-b border-[var(--hairline)] bg-[radial-gradient(ellipse_65%_55%_at_50%_15%,var(--accent-dim),transparent_70%)] px-8 pt-10 pb-8 text-center">
        <Image
          src="/brand/scenunion-icon.png"
          alt=""
          width={620}
          height={952}
          className="mb-5 w-[76px]"
        />
        <p className="mb-2 text-[0.78rem] text-[var(--ink-dim)]">{personaReport.eyebrow}</p>
        <p className="text-[1.7rem] font-bold tracking-tight text-[var(--ink)]">
          {personaReport.personaName}
        </p>
        <p className="mt-2.5 text-[0.88rem] text-[var(--ink-dim)]">{personaReport.description}</p>
      </div>

      <div className="border-b border-[var(--hairline)] px-5.5 py-6.5">
        <h3 className="mb-4 text-[0.82rem] font-semibold text-[var(--ink-dim)]">취향 키워드</h3>
        <div className="flex flex-wrap gap-2.5">
          {personaReport.keywords.map((keyword) => (
            <Tag key={keyword}>{keyword}</Tag>
          ))}
        </div>
      </div>

      <div className="px-5.5 py-6.5">
        <h3 className="mb-4 text-[0.82rem] font-semibold text-[var(--ink-dim)]">나타난 유형 Top 3</h3>
        {personaReport.topTypes.map((type, i) => (
          <TypeCard key={type.id} type={type} rank={i + 1} />
        ))}
      </div>
    </AppFrame>
  );
}
