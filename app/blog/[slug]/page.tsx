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
    <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <header>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-5xl">{post.title}</h1>
        <p className="mt-3 text-sm text-stone-500">{formatDateRo(post.dateValue)}</p>
      </header>

      <div className="markdown mt-7" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <footer className="mt-8 border-t border-stone-200 pt-6">
        <div className="flex flex-wrap gap-2">
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

        <div className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
          <div>
            {adjacent.next ? (
              <Link href={`/blog/${adjacent.next.slug}`} className="text-stone-600 hover:text-stone-900">
                ← {adjacent.next.title}
              </Link>
            ) : null}
          </div>

          <div className="text-left sm:text-right">
            {adjacent.prev ? (
              <Link href={`/blog/${adjacent.prev.slug}`} className="text-stone-600 hover:text-stone-900">
                {adjacent.prev.title} →
              </Link>
            ) : null}
          </div>
        </div>
      </footer>
    </article>
  );
}
