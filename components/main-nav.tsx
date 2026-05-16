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
                ? "border-emerald-300 bg-emerald-100/70 text-emerald-900"
                : "border-emerald-900/20 bg-white/80 text-emerald-900/72 hover:border-emerald-900/30 hover:bg-white hover:text-emerald-950"
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
