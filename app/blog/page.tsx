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
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900">Blog</h1>
        <p className="mt-2 text-stone-500">Toate articolele, ordonate de la cel mai nou la cel mai vechi.</p>
      </div>

      <PostsList posts={posts} />
    </section>
  );
}
