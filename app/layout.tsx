import type { Metadata } from "next";
import Link from "next/link";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";

const sans = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "dumitru.me",
    template: "%s | dumitru.me"
  },
  description: "Site personal — Dumitru Cantea"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className={sans.className}>
        <a className="skip" href="#content">
          Sari la conținut
        </a>
        <div className="wrap">
          <header className="top">
            <Link href="/" className="word">
              dumitru.me
            </Link>
            <MainNav />
          </header>
          <main id="content">{children}</main>
          <p className="foot">Ialoveni</p>
        </div>
      </body>
    </html>
  );
}
