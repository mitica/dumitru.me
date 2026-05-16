import Image from "next/image";
import Link from "next/link";
import { PostsList } from "@/components/posts-list";
import { getAllPosts } from "@/lib/content";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 8);

  return (
    <div className="space-y-8">
      <section className="surface-strong relative overflow-hidden rounded-[2rem] p-7 md:p-9">
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br from-emerald-200/60 to-orange-100/50 blur-2xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_220px]">
          <div>
            <p className="eyebrow">Bun venit</p>
            <h1 className="title-display mt-3 text-4xl font-semibold text-emerald-950 md:text-5xl">Coding din plăcere</h1>
            <p className="section-copy mt-4 max-w-2xl text-lg">
              Eu sunt Dumitru, inginer IT. Aici scriu despre proiecte, experimente și experiențe practice.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link href="/projects" className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800">
                Vezi proiectele
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-emerald-900/20 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-900 transition hover:border-emerald-900/35 hover:bg-white"
              >
                Citește blogul
              </Link>
            </div>
          </div>

          <div className="avatar-ring mx-auto w-fit overflow-hidden rounded-3xl md:mx-0 md:justify-self-end">
            <Image
              src="/img/face.jpg"
              alt="Portret Dumitru Cantea"
              width={220}
              height={260}
              className="h-[260px] w-[220px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="title-display text-2xl font-semibold text-emerald-950">Ultimele articole</h2>
        </div>

        <PostsList posts={posts} />
      </section>
    </div>
  );
}
