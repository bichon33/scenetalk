"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MenuIcon, ReportIcon, RoomsIcon, SettingsIcon } from "@/components/icons";
import { IconButton } from "@/components/ui/IconButton";

const items = [
  { href: "/rooms", label: "방 목록", icon: RoomsIcon },
  { href: "/report", label: "취향분석 보고서", icon: ReportIcon },
] as const;

export function MenuDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <div ref={ref} className="absolute top-7 right-8 z-20">
      <IconButton size={40} aria-label="메뉴" onClick={() => setOpen((v) => !v)}>
        <MenuIcon />
      </IconButton>

      {open && (
        <div className="absolute top-[46px] right-0 w-[220px] rounded-2xl border border-[var(--border-soft)] bg-[var(--bg)] p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]">
          {items.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-[10px] px-3.5 py-3 text-[0.9rem] text-[var(--ink)] transition-colors hover:bg-[var(--surface-2)]"
            >
              <Icon className="shrink-0 text-[var(--accent-line)]" />
              {label}
            </Link>
          ))}
          <div className="my-1.5 mx-1 h-px bg-[var(--border-soft)]" />
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-[10px] px-3.5 py-3 text-[0.9rem] text-[var(--ink)] transition-colors hover:bg-[var(--surface-2)]"
          >
            <SettingsIcon className="shrink-0 text-[var(--accent-line)]" />
            설정
          </Link>
        </div>
      )}
    </div>
  );
}
