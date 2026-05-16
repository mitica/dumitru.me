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
            "surface-strong rounded-2xl p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl",
            project.isAlive ? "border-emerald-300/80" : "border-slate-300/70"
          ].join(" ")}
        >
          <h3 className="title-display text-xl font-semibold text-emerald-950">
            <Link href={`/projects/${project.slug}`} className="hover:text-emerald-800">
              {project.title}
            </Link>
            {project.releaseYear ? <sup className="ml-1 text-sm text-emerald-900/45">{project.releaseYear}</sup> : null}
          </h3>

          <p className="mt-3 text-sm text-emerald-950/72">{project.summary || "Fără descriere scurtă."}</p>
        </article>
      ))}
    </div>
  );
}
