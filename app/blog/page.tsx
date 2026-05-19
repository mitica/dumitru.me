import type { Metadata } from "next";
import { PostsList } from "@/components/posts-list";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog"
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section>
      <header className="article-head">
        <p className="dateline article-head__eyebrow">— jurnal tehnic —</p>
        <h1 className="article-head__title">Blog</h1>
        <p className="article-head__lead">
          Toate articolele, ordonate de la cel mai nou la cel mai vechi.{" "}
          <span className="mono" style={{ fontSize: "0.85em", color: "var(--muted-strong)" }}>
            ({posts.length} ediții)
          </span>
        </p>
      </header>

      <div style={{ marginTop: "1.6rem" }}>
        <PostsList posts={posts} />
      </div>
    </section>
  );
}
