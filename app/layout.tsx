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
      <body className="site-bg min-h-screen antialiased selection:bg-cyan-200/70 selection:text-stone-950">
        <div className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-7">
          <header className="border-b border-stone-300/70 pb-5">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Link href="/" aria-label="dumitru.me - homepage" className="avatar-ring block overflow-hidden rounded-full">
                  <Image src="/img/face.jpg" alt="Dumitru Cantea" width={58} height={58} className="h-[58px] w-[58px] object-cover" priority />
                </Link>

                <div>
                  <Link href="/" className="title-display block text-2xl font-semibold text-stone-950 md:text-3xl">
                    dumitru.me
                  </Link>
                  <p className="mt-1 text-sm text-stone-600">IT Engineer</p>
                </div>
              </div>

              <MainNav />
            </div>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
            <main className="min-w-0">{children}</main>

            <aside className="h-fit border-t border-stone-300/70 pt-5 lg:sticky lg:top-6">
              <h2 className="text-base font-semibold text-stone-950">Tags</h2>
              <p className="mt-1 text-sm text-stone-600">Explorează postările după subiect.</p>
              <div className="mt-4">
                <TagCloud tags={tags} />
              </div>
            </aside>
          </div>

          <footer className="mt-12 border-t border-stone-300/70 pt-6 text-sm text-stone-600">
            <p>
              <strong className="text-stone-950">dumitru.me</strong> - Dumitru Cantea.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
