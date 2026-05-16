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
            "rounded-2xl border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md",
            project.isAlive ? "border-emerald-200/80" : "border-stone-200"
          ].join(" ")}
        >
          <h3 className="text-xl font-semibold leading-tight text-stone-900">
            <Link href={`/projects/${project.slug}`} className="hover:text-stone-700">
              {project.title}
            </Link>
            {project.releaseYear ? <sup className="ml-1 text-sm text-stone-400">{project.releaseYear}</sup> : null}
          </h3>

          <p className="mt-3 text-sm text-stone-600">{project.summary || "Fără descriere scurtă."}</p>
        </article>
      ))}
    </div>
  );
}
