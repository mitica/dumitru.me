"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Proiecte" }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="nav" aria-label="Secțiuni">
      {items.map((item) => {
        const isActive =
          pathname === item.href ||
          pathname.startsWith(`${item.href}/`) ||
          (item.href === "/blog" && pathname.startsWith("/tags"));

        return (
          <Link key={item.href} href={item.href} aria-current={isActive ? "page" : undefined}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
