import Link from "next/link";
import { BackIcon } from "@/components/icons";
import { IconButton } from "@/components/ui/IconButton";

export function ScreenHeader({ title, backHref }: { title: string; backHref: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3.5 border-b border-[var(--hairline)] px-5 py-4">
      <Link href={backHref}>
        <IconButton aria-label="뒤로 가기">
          <BackIcon />
        </IconButton>
      </Link>
      <h2 className="m-0 text-[1.02rem] font-semibold">{title}</h2>
    </div>
  );
}
