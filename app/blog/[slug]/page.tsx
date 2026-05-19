import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  const allPosts = getAllPosts();
  const index = allPosts.findIndex((p) => p.slug === post.slug);
  const issue = allPosts.length - index;

  return (
    <article>
      <header className="article-head">
        <p className="dateline article-head__eyebrow">
          — articol Nº&nbsp;{String(issue).padStart(2, "0")} —
        </p>
        <h1 className="article-head__title">{post.title}</h1>
        <p className="article-head__meta">{formatDateRo(post.dateValue)}</p>
      </header>

      <div className="markdown" style={{ marginTop: "1.8rem" }} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <footer className="article-foot">
        <div className="post-entry__tags" style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem 0.85rem" }}>
          {post.tags.map((tag) => (
            <Link key={`${post.slug}-${tag}`} href={`/tags/${normalizeTagSlug(tag)}`} className="chip">
              {tag}
            </Link>
          ))}
        </div>

        <nav className="article-nav" aria-label="Navigare articole">
          <div className="article-nav__prev">
            {adjacent.next ? (
              <Link href={`/blog/${adjacent.next.slug}`}>
                ← <span style={{ textTransform: "none", letterSpacing: 0 }}>{adjacent.next.title}</span>
              </Link>
            ) : null}
          </div>

          <div className="article-nav__next">
            {adjacent.prev ? (
              <Link href={`/blog/${adjacent.prev.slug}`}>
                <span style={{ textTransform: "none", letterSpacing: 0 }}>{adjacent.prev.title}</span> →
              </Link>
            ) : null}
          </div>
        </nav>
      </footer>
    </article>
  );
}
