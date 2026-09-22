"use client";

import Link from "next/link";
import { useId } from "react";
import { usePathname } from "next/navigation";

type MedallionProps = {
  size?: number;
};

export function Medallion({ size = 48 }: MedallionProps) {
  const pathname = usePathname();
  const clipId = useId().replace(/:/g, "");
  const home = pathname === "/";

  const mark = (
    <svg
      className="medallion"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="32" cy="32" r="32" />
        </clipPath>
      </defs>
      <image
        href="/img/face-mark.jpg"
        x="0"
        y="0"
        width="64"
        height="64"
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMid slice"
      />
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
