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
          className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <h2 className="text-2xl font-semibold leading-tight text-stone-900 transition group-hover:text-stone-700">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>

          <p className="mt-2 text-sm text-stone-500">{formatDateRo(post.dateValue)}</p>
          <p className="mt-3 text-stone-600">{post.excerpt}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={`${post.slug}-${tag}`}
                href={`/tags/${normalizeTagSlug(tag)}`}
                className="inline-flex rounded-full border border-amber-200/80 bg-amber-50/60 px-2.5 py-1 text-xs text-amber-700 transition hover:border-amber-300 hover:bg-amber-100/80"
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
