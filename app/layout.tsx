import type { Metadata } from "next";
import Image from "next/image";
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
      <body className="site-bg min-h-screen antialiased selection:bg-emerald-200/70 selection:text-emerald-950">
        <div className="mx-auto max-w-6xl px-4 py-7 md:px-6 md:py-9 lg:py-10">
          <header className="surface relative overflow-hidden rounded-[2rem] p-5 backdrop-blur md:p-7">
            <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-gradient-to-br from-emerald-300/30 via-orange-200/20 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-20 h-40 w-40 rounded-full bg-gradient-to-br from-teal-200/35 to-transparent blur-2xl" />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Link href="/" aria-label="dumitru.me - homepage" className="avatar-ring block overflow-hidden rounded-2xl">
                  <Image src="/img/face.jpg" alt="Dumitru Cantea" width={78} height={78} className="h-[78px] w-[78px] object-cover" priority />
                </Link>

                <div>
                  <p className="eyebrow">Personal Website</p>
                  <Link href="/" className="title-display mt-1 block text-3xl font-semibold text-emerald-950 md:text-4xl">
                    dumitru.me
                  </Link>
                  <p className="mt-1 text-sm text-emerald-900/70">IT Engineer</p>
                </div>
              </div>

              <MainNav />
            </div>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
            <main className="min-w-0">{children}</main>

            <aside className="surface h-fit rounded-2xl p-5 lg:sticky lg:top-6">
              <h2 className="text-base font-semibold text-emerald-950">Tags</h2>
              <p className="mt-1 text-sm text-emerald-900/65">Explorează postările după subiect.</p>
              <div className="mt-4">
                <TagCloud tags={tags} />
              </div>
            </aside>
          </div>

          <footer className="divider mt-10 border-t pt-6 text-sm text-emerald-900/68">
            <p>
              <strong className="text-emerald-950">dumitru.me</strong> rebuilt with Next.js and exported as static pages.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
