import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { TagCloud } from "@/components/tag-cloud";
import { getTags } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: "dumitru.me",
    template: "%s | dumitru.me"
  },
  description: "Site personal - Dumitru Cantea"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const tags = getTags();

  return (
    <html lang="ro">
      <body className="min-h-screen bg-stone-100/70 text-stone-800 antialiased selection:bg-amber-200/60 selection:text-stone-900">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:py-10">
          <header className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-sm backdrop-blur md:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-amber-300/25 via-orange-200/20 to-transparent blur-3xl" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Link href="/" className="text-4xl font-semibold tracking-tight text-stone-900">
                  dumitru.me
                </Link>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-stone-500">IT Engineer</p>
              </div>

              <MainNav />
            </div>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
            <main className="min-w-0">{children}</main>

            <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
              <h2 className="text-base font-semibold text-stone-900">Tags</h2>
              <p className="mt-1 text-sm text-stone-500">Explorează postările după subiect.</p>
              <div className="mt-4">
                <TagCloud tags={tags} />
              </div>
            </aside>
          </div>

          <footer className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-500">
            <p>
              <strong className="text-stone-700">dumitru.me</strong> rebuilt with Next.js and exported as static pages.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
