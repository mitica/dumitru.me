import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostsList } from "@/components/posts-list";
import { getPostsByTagSlug, getTags } from "@/lib/content";

type TagPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getTags().map((tag) => ({ slug: tag.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTags().find((item) => item.slug === slug);

  return {
    title: tag ? `Tag: ${tag.name}` : "Tag"
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = getTags().find((item) => item.slug === slug);

  if (!tag) {
    notFound();
  }

  const posts = getPostsByTagSlug(slug);

  return (
    <section>
      <header className="article-head">
        <p className="dateline article-head__eyebrow">— rubrică · tag —</p>
        <h1 className="article-head__title">{tag.name}</h1>
        <p className="article-head__meta">
          {tag.count} {tag.count === 1 ? "articol" : "articole"} cu acest tag
        </p>
      </header>

      <div style={{ marginTop: "1.6rem" }}>
        <PostsList posts={posts} />
      </div>
    </section>
  );
}
