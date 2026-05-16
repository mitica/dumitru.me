import Link from "next/link";
import type { Project } from "@/lib/content";

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.slug}
          className={[
            "rounded-lg border bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg",
            project.isAlive ? "border-cyan-700/30" : "border-stone-300"
          ].join(" ")}
        >
          <h3 className="title-display text-xl font-semibold text-stone-950">
            <Link href={`/projects/${project.slug}`} className="hover:text-cyan-900">
              {project.title}
            </Link>
            {project.releaseYear ? <sup className="ml-1 text-sm text-stone-400">{project.releaseYear}</sup> : null}
          </h3>

          <p className="mt-3 text-sm leading-6 text-stone-600">{project.summary || "Fără descriere scurtă."}</p>
        </article>
      ))}
    </div>
  );
}
