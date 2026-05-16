import Link from "next/link";
import { normalizeTagSlug, type Post } from "@/lib/content";
import { formatDateRo } from "@/lib/format";

type PostsListProps = {
  posts: Post[];
};

export function PostsList({ posts }: PostsListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="surface-strong group rounded-2xl p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <h2 className="title-display text-2xl font-semibold text-emerald-950 transition group-hover:text-emerald-800">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>

          <p className="mt-2 text-sm text-emerald-900/55">{formatDateRo(post.dateValue)}</p>
          <p className="mt-3 text-emerald-950/76">{post.excerpt}</p>

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
