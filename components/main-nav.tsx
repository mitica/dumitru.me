"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { num: "01", href: "/projects", label: "Proiecte" },
  { num: "02", href: "/blog", label: "Blog" }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Main">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={["site-nav__link", isActive ? "is-active" : ""].join(" ")}
          >
            <span className="site-nav__num">{item.num}</span>
            <span className="site-nav__label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
