"use client";

import Link from "next/link";
import { useId } from "react";
import { usePathname } from "next/navigation";

type PortraitProps = {
  size?: number;
};

export function Portrait({ size = 48 }: PortraitProps) {
  const pathname = usePathname();
  const clipId = useId().replace(/:/g, "");
  const home = pathname === "/";

  const mark = (
    <svg
      className="portrait"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="64" height="64" />
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
    return <span className="portrait-slot">{mark}</span>;
  }

  return (
    <Link href="/" className="portrait-slot" aria-label="Acasă">
      {mark}
    </Link>
  );
}
