import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { TagCloud } from "@/components/tag-cloud";
import { getAllPosts, getTags } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: "dumitru.me",
    template: "%s | dumitru.me"
  },
  description: "Site personal - Dumitru Cantea"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const tags = getTags();
  const issue = String(getAllPosts().length).padStart(3, "0");
  const year = new Date().getFullYear();

  return (
    <html lang="ro">
      <body className="site-bg min-h-screen antialiased">
        <div className="site-shell">
          <header className="site-header">
            <div className="site-dateline">
              <span>
                <span className="bullet-star">★</span>
                DUMITRU.ME — Nº&nbsp;{issue} — IALOVENI — {year}
              </span>
              <span>RO · est. 2005</span>
            </div>

            <div className="site-header__row">
              <Link href="/" aria-label="dumitru.me — homepage" className="site-brand">
                <Image
                  src="/img/face.jpg"
                  alt="Dumitru Cantea"
                  width={56}
                  height={56}
                  className="site-brand__face"
                  priority
                />
                <span className="site-brand__text">
                  <span className="site-brand__title">
                    dumitru<span className="dot-accent">.</span>me
                  </span>
                  <span className="site-brand__sub">Dumitru Cantea · IT engineer</span>
                </span>
              </Link>

              <MainNav />
            </div>
          </header>

          <div className="site-grid">
            <main className="site-main">{children}</main>

            <aside className="site-aside">
              <div className="aside-section">
                <p className="dateline" style={{ color: "var(--accent)" }}>— index —</p>
                <h2 className="aside-section__title">Tag-uri</h2>
                <p className="aside-section__lead">Explorează postările după subiect.</p>
                <TagCloud tags={tags} />
              </div>
            </aside>
          </div>

          <footer className="site-footer">
            <div className="site-footer__inner">
              <p className="dateline" style={{ color: "var(--accent)" }}>— colophon —</p>
              <p className="site-footer__lead">
                <strong>dumitru.me</strong> — Dumitru Cantea, {year}.
              </p>
              <p className="site-footer__note">
                Tipărit în <span className="mono">FFTisa</span> · construit cu{" "}
                <span className="mono">Next.js</span> · linkurile vechi <span className="mono">*.html</span> încă răspund.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
