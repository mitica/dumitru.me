"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Tag } from "@/lib/content";

type TagCloudProps = {
  tags: Tag[];
};

export function TagCloud({ tags }: TagCloudProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2" aria-label="Tags">
      {tags.map((tag) => {
        const href = `/tags/${tag.slug}`;
        const isActive = pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link key={tag.slug} href={href} className={["chip inline-flex items-center gap-1.5", isActive ? "chip-active" : ""].join(" ")}>
            <span>{tag.name}</span>
            <small className="text-[11px] opacity-70">{tag.count}</small>
          </Link>
        );
      })}
    </div>
  );
}
