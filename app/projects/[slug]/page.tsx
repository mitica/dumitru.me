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
    <article className="surface-strong rounded-3xl p-6 md:p-8">
      <header>
        <p className="eyebrow">Proiect</p>
        <h1 className="title-display mt-2 text-4xl font-semibold text-emerald-950 md:text-5xl">
          {project.title}
          {project.releaseYear ? <sup className="ml-2 text-xl text-emerald-900/45">({project.releaseYear})</sup> : null}
        </h1>
        {project.summary ? <p className="section-copy mt-3">{project.summary}</p> : null}
      </header>

      <div className="mt-7 grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="surface h-fit rounded-2xl p-4 lg:sticky lg:top-6">
          <p className="text-sm text-emerald-900/78">
            <strong className="text-emerald-950">Stare:</strong> {project.isAlive ? "Activ" : "Inactiv"}
          </p>

          {project.links.length > 0 ? (
            <div className="mt-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-900/58">Linkuri</h2>
              <ul className="mt-2 space-y-2 text-sm">
                {project.links.map((link) => (
                  <li key={link}>
                    <a href={link} target="_blank" rel="noreferrer" className="text-emerald-800 underline decoration-emerald-300 underline-offset-3 hover:text-emerald-900">
                      {link.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-5">
            <Link href="/projects" className="text-sm text-emerald-900/72 hover:text-emerald-950">
              ← Înapoi la proiecte
            </Link>
          </p>
        </aside>

        <div className="markdown" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
      </div>
    </article>
  );
}
