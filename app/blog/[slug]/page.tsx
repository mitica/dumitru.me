import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Portrait } from "@/components/portrait";
import { formatDateRo } from "@/lib/format";
import { getAdjacentPosts, getAllPosts, getPostBySlug, normalizeTagSlug } from "@/lib/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post?.title ?? "Post"
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const adjacent = getAdjacentPosts(post.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p className="meta">
        <time dateTime={post.date}>{formatDateRo(post.dateValue)}</time>
      </p>

      <div className="markdown" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <p className="sign with-portrait">
        <Portrait size={36} />
        Dumitru Cantea
      </p>

      {post.tags.length > 0 ? (
        <p className="tags">
          {post.tags.map((tag) => (
            <Link key={`${post.slug}-${tag}`} href={`/tags/${normalizeTagSlug(tag)}`}>
              {tag}
            </Link>
          ))}
        </p>
      ) : null}

      <nav className="pager" aria-label="Note vecine">
        {adjacent.next ? <Link href={`/blog/${adjacent.next.slug}`}>{adjacent.next.title}</Link> : null}
        {adjacent.prev ? <Link href={`/blog/${adjacent.prev.slug}`}>{adjacent.prev.title}</Link> : null}
      </nav>
    </article>
  );
}
