import Link from "next/link";
import type { Project } from "@/lib/content";

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <ul className="project-list">
      {projects.map((project, index) => (
        <li key={project.slug} className="project-entry">
          <div className="project-entry__meta">
            <span className="numeral">{String(index + 1).padStart(2, "0")}</span>
            {project.releaseYear ? (
              <span className="project-entry__year">{project.releaseYear}</span>
            ) : null}
            <span
              className={[
                "project-entry__status",
                project.isAlive ? "is-alive" : "is-retired"
              ].join(" ")}
            >
              {project.isAlive ? "Activ" : "Inactiv"}
            </span>
          </div>

          <div>
            <h3 className="project-entry__title">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="project-entry__summary">
              {project.summary || "Fără descriere scurtă."}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
