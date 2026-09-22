import Link from "next/link";
import type { Post } from "@/lib/content";
import { formatDateRo } from "@/lib/format";

type PostsListProps = {
  posts: Post[];
};

export function PostsList({ posts }: PostsListProps) {
  return (
    <ul className="index">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <span className="t">{post.title}</span>
            <time className="d" dateTime={post.date}>
              {formatDateRo(post.dateValue)}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
