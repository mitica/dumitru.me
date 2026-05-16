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
    <section className="space-y-5">
      <div>
        <p className="eyebrow">Tag</p>
        <h1 className="title-display mt-2 text-4xl font-semibold text-emerald-950">{tag.name}</h1>
        <p className="section-copy mt-2">{tag.count} articole cu acest tag.</p>
      </div>

      <PostsList posts={posts} />
    </section>
  );
}
