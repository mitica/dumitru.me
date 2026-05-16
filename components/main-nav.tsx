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
    <nav className="flex flex-wrap items-center gap-5" aria-label="Main">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "border-b py-1 text-sm font-medium transition",
              isActive
                ? "border-cyan-700 text-stone-950"
                : "border-transparent text-stone-600 hover:border-stone-400 hover:text-stone-950"
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
