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
          <Link
            key={tag.slug}
            href={href}
            className={[
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition",
              isActive
                ? "border-amber-300 bg-amber-50 text-amber-700"
                : "border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300 hover:bg-white hover:text-stone-900"
            ].join(" ")}
          >
            <span>{tag.name}</span>
            <small className="text-[11px] text-stone-500">{tag.count}</small>
          </Link>
        );
      })}
    </div>
  );
}
