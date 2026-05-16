import Image from "next/image";
import Link from "next/link";
import { PostsList } from "@/components/posts-list";
import { getAllPosts } from "@/lib/content";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 8);

  return (
    <div className="space-y-12">
      <section className="home-hero relative overflow-hidden rounded-lg bg-stone-950">
        <Image src="/img/face.jpg" alt="Portret Dumitru Cantea" fill sizes="(min-width: 1024px) 820px, 100vw" className="hero-image object-cover" priority />
        <div className="hero-scrim absolute inset-0" />

        <div className="relative flex min-h-[inherit] items-end p-6 md:p-10">
          <div className="max-w-2xl pb-3 text-white md:pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/72">IT Engineer</p>
            <h1 className="title-display mt-3 text-5xl font-semibold md:text-7xl">Dumitru Cantea</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/82">
              Scriu despre proiecte, experimente și experiențe practice din tehnologie.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-stone-950 transition hover:bg-stone-100">
                Vezi proiectele
              </Link>
              <Link
                href="/blog"
                className="rounded-md border border-white/42 px-4 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
              >
                Citește blogul
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4 border-b border-stone-300/70 pb-3">
          <h2 className="title-display text-2xl font-semibold text-stone-950">Ultimele articole</h2>
          <Link href="/blog" className="text-sm font-medium text-cyan-800 hover:text-cyan-950">
            Toate articolele
          </Link>
        </div>

        <PostsList posts={posts} />
      </section>
    </div>
  );
}
