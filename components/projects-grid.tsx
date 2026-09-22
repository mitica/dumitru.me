import Link from "next/link";
import type { Project } from "@/lib/content";

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <ul className="index">
      {projects.map((project) => {
        const detail = [project.summary, project.releaseYear].filter(Boolean).join(" · ");

        return (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              <span className="t">{project.title}</span>
              {detail ? <span className="s">{detail}</span> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
