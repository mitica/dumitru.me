import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

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

  return (
    <article>
      <header className="article-head">
        <p className="dateline article-head__eyebrow">— proiect —</p>
        <h1 className="article-head__title">
          {project.title}
          {project.releaseYear ? <sup>{project.releaseYear}</sup> : null}
        </h1>
        {project.summary ? <p className="article-head__lead">{project.summary}</p> : null}
      </header>

      <div className="project-meta">
        <div className="project-meta__row">
          <span className="project-meta__label">Stare</span>
          <span
            className={[
              "project-entry__status",
              project.isAlive ? "is-alive" : "is-retired"
            ].join(" ")}
          >
            {project.isAlive ? "Activ" : "Inactiv"}
          </span>
        </div>

        {project.releaseYear ? (
          <div className="project-meta__row">
            <span className="project-meta__label">An</span>
            <span className="project-meta__value">{project.releaseYear}</span>
          </div>
        ) : null}

        {project.links.length > 0 ? (
          <div className="project-meta__row project-meta__row--links">
            <span className="project-meta__label">Linkuri</span>
            <ul className="project-meta__links">
              {project.links.map((link) => (
                <li key={link}>
                  <a href={link} target="_blank" rel="noreferrer">
                    → {link.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div
        className="markdown"
        style={{ marginTop: "2rem" }}
        dangerouslySetInnerHTML={{ __html: project.contentHtml }}
      />

      <footer className="article-foot">
        <Link href="/projects" className="project-aside__back">
          ← Înapoi la proiecte
        </Link>
      </footer>
    </article>
  );
}
