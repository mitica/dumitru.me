import type { Metadata } from "next";
import { PostsList } from "@/components/posts-list";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog"
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-5">
      <div>
        <p className="eyebrow">Jurnal tehnic</p>
        <h1 className="title-display mt-2 text-4xl font-semibold text-stone-950">Blog</h1>
        <p className="section-copy mt-2">Toate articolele, ordonate de la cel mai nou la cel mai vechi.</p>
      </div>

      <PostsList posts={posts} />
    </section>
  );
}
