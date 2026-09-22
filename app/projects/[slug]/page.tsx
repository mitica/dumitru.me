import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fish } from "@/components/fish";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function hostLabel(link: string): string {
  try {
    return new URL(link).host.replace(/^www\./, "");
  } catch {
    return link.replace(/^https?:\/\//, "");
  }
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project?.title ?? "Proiect"
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const state = [project.isAlive ? "în lucru" : "închis", project.releaseYear].filter(Boolean).join(", ");

  return (
    <article>
      <h1>{project.title}</h1>
      {project.summary ? <p className="sub">{project.summary}</p> : null}
      <p className="meta">
        <span>{state}</span>
        {project.links.map((link) => (
          <a key={link} href={link}>
            {hostLabel(link)}
          </a>
        ))}
      </p>

      <div className="markdown" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />

      <p className="sign with-mark">
        <Fish width={44} />
        Dumitru Cantea
      </p>
    </article>
  );
}
