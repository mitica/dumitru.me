import { PostsList } from "@/components/posts-list";
import { getAllPosts } from "@/lib/content";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 8);

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 shadow-sm md:p-9">
        <div className="pointer-events-none absolute -left-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br from-amber-200/45 to-orange-200/15 blur-2xl" />

        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Bun venit</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Coding din plăcere</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">Eu sunt Dumitru, inginer IT. Aici scriu despre proiecte, experimente și experiențe practice.</p>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Ultimele articole</h2>
        </div>

        <PostsList posts={posts} />
      </section>
    </div>
  );
}
