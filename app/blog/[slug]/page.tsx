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

  return (
    <article className="surface-strong rounded-3xl p-6 md:p-8">
      <header>
        <p className="eyebrow">Articol</p>
        <h1 className="title-display mt-2 text-4xl font-semibold text-emerald-950 md:text-5xl">{post.title}</h1>
        <p className="mt-3 text-sm text-emerald-900/55">{formatDateRo(post.dateValue)}</p>
      </header>

      <div className="markdown mt-7" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <footer className="divider mt-8 border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={`${post.slug}-${tag}`} href={`/tags/${normalizeTagSlug(tag)}`} className="chip">
              {tag}
            </Link>
          ))}
        </div>

        <div className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
          <div>
            {adjacent.next ? (
              <Link href={`/blog/${adjacent.next.slug}`} className="text-emerald-900/72 hover:text-emerald-950">
                ← {adjacent.next.title}
              </Link>
            ) : null}
          </div>

          <div className="text-left sm:text-right">
            {adjacent.prev ? (
              <Link href={`/blog/${adjacent.prev.slug}`} className="text-emerald-900/72 hover:text-emerald-950">
                {adjacent.prev.title} →
              </Link>
            ) : null}
          </div>
        </div>
      </footer>
    </article>
  );
}
