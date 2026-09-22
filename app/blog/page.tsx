import type { Metadata } from "next";
import { Medallion } from "@/components/medallion";
import { PostsList } from "@/components/posts-list";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog"
};

export default function BlogPage() {
  const posts = getAllPosts();
  const count = posts.length === 1 ? "1 notă" : `${posts.length} note`;

  return (
    <section>
      <h1 className="with-mark">
        <Medallion size={46} />
        Blog
      </h1>
      <p className="sub">{count}, de la cea mai nouă.</p>
      <div className="block">
        <PostsList posts={posts} />
      </div>
    </section>
  );
}
