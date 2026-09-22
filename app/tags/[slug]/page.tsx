import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portrait } from "@/components/portrait";
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
    title: tag ? tag.name : "Tag"
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = getTags().find((item) => item.slug === slug);

  if (!tag) {
    notFound();
  }

  const posts = getPostsByTagSlug(slug);
  const count = tag.count === 1 ? "1 notă" : `${tag.count} note`;

  return (
    <section>
      <h1 className="with-portrait">
        <Portrait size={48} />
        {tag.name}
      </h1>
      <p className="sub">{count}</p>
      <div className="block">
        <PostsList posts={posts} />
      </div>
    </section>
  );
}
