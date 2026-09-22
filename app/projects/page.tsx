import type { Metadata } from "next";
import { Fish } from "@/components/fish";
import { ProjectsGrid } from "@/components/projects-grid";
import { getAllProjects, splitProjectsByStatus } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proiecte"
};

export default function ProjectsPage() {
  const { active, inactive } = splitProjectsByStatus(getAllProjects());

  return (
    <section>
      <h1 className="with-mark">
        <Fish width={58} />
        Proiecte
      </h1>

      <section className="block">
        <h2>În lucru</h2>
        <ProjectsGrid projects={active} />
      </section>

      <section className="block">
        <h2>Închise</h2>
        <ProjectsGrid projects={inactive} />
      </section>
    </section>
  );
}
