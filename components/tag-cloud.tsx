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
    <ul className="index-list" aria-label="Tags">
      {tags.map((tag, index) => {
        const href = `/tags/${tag.slug}`;
        const isActive = pathname === href || pathname.startsWith(`${href}/`);

        return (
          <li key={tag.slug} className="index-entry">
            <Link
              href={href}
              className={["index-link", isActive ? "is-active" : ""].join(" ")}
            >
              <span className="index-entry__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="index-entry__name">{tag.name}</span>
              <span className="index-entry__count">{tag.count}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
