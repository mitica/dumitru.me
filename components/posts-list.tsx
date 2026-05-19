import Link from "next/link";
import { normalizeTagSlug, type Post } from "@/lib/content";
import { formatDateRo } from "@/lib/format";

type PostsListProps = {
  posts: Post[];
};

export function PostsList({ posts }: PostsListProps) {
  return (
    <ol className="post-list">
      {posts.map((post, index) => (
        <li key={post.slug} className="post-entry">
          <div className="post-entry__numeral">
            <span className="post-entry__numeral-prefix">Nº</span>
            <span className="post-entry__numeral-num">{String(index + 1).padStart(2, "0")}</span>
          </div>

          <div>
            <h2 className="post-entry__title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="post-entry__meta">
              <span>{formatDateRo(post.dateValue)}</span>
              {post.tags.length ? (
                <>
                  <span className="post-entry__sep">—</span>
                  <span className="post-entry__tags">
                    {post.tags.map((tag) => (
                      <Link
                        key={`${post.slug}-${tag}`}
                        href={`/tags/${normalizeTagSlug(tag)}`}
                        className="chip"
                      >
                        {tag}
                      </Link>
                    ))}
                  </span>
                </>
              ) : null}
            </p>

            <p className="post-entry__excerpt">{post.excerpt}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
