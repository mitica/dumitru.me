"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type FishProps = {
  width?: number;
};

export function Fish({ width = 56 }: FishProps) {
  const pathname = usePathname();
  const height = Math.round((width * 56) / 100);
  const home = pathname === "/";

  const mark = (
    <svg
      className="fish"
      width={width}
      height={height}
      viewBox="0 0 100 56"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M48 28 L8 10 L18 28 L8 46 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <ellipse cx="68" cy="28" rx="24" ry="18" fill="none" stroke="currentColor" strokeWidth="2.7" />
      <circle cx="78" cy="24" r="2.6" fill="#e3b505" />
    </svg>
  );

  if (home) {
    return <span className="mark">{mark}</span>;
  }

  return (
    <Link href="/" className="mark" aria-label="Acasă">
      {mark}
    </Link>
  );
}
