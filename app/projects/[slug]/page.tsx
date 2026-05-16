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
    <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <header>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-5xl">
          {project.title}
          {project.releaseYear ? <sup className="ml-2 text-xl text-stone-400">({project.releaseYear})</sup> : null}
        </h1>
        {project.summary ? <p className="mt-3 text-stone-500">{project.summary}</p> : null}
      </header>

      <div className="mt-7 grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="h-fit rounded-2xl border border-stone-200 bg-stone-50 p-4 lg:sticky lg:top-6">
          <p className="text-sm text-stone-600">
            <strong className="text-stone-800">Stare:</strong> {project.isAlive ? "Activ" : "Inactiv"}
          </p>

          {project.links.length > 0 ? (
            <div className="mt-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-stone-500">Linkuri</h2>
              <ul className="mt-2 space-y-2 text-sm">
                {project.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-700 underline decoration-amber-300 underline-offset-3 hover:text-amber-800"
                    >
                      {link.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-5">
            <Link href="/projects" className="text-sm text-stone-600 hover:text-stone-900">
              ← Înapoi la proiecte
            </Link>
          </p>
        </aside>

        <div className="markdown" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
      </div>
    </article>
  );
}
