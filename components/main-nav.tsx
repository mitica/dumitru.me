"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/projects", label: "Proiecte" },
  { href: "/blog", label: "Blog" }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-2" aria-label="Main">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              isActive
                ? "border-amber-300 bg-amber-50 text-amber-700"
                : "border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900"
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
