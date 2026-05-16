import Link from "next/link";
import { normalizeTagSlug, type Post } from "@/lib/content";
import { formatDateRo } from "@/lib/format";

type PostsListProps = {
  posts: Post[];
};

export function PostsList({ posts }: PostsListProps) {
  return (
    <div className="divide-y divide-stone-300/70 border-t border-stone-300/70">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="group py-6"
        >
          <h2 className="title-display text-2xl font-semibold text-stone-950 transition group-hover:text-cyan-900">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>

          <p className="mt-2 text-sm text-stone-500">{formatDateRo(post.dateValue)}</p>
          <p className="mt-3 max-w-2xl text-stone-700">{post.excerpt}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={`${post.slug}-${tag}`}
                href={`/tags/${normalizeTagSlug(tag)}`}
                className="chip"
              >
                {tag}
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
