import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects-grid";
import { getAllProjects, splitProjectsByStatus } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proiecte"
};

export default function ProjectsPage() {
  const { active, inactive } = splitProjectsByStatus(getAllProjects());

  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900">Proiecte</h1>
        <p className="mt-2 text-stone-500">Lista proiectelor active și a celor închise.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-stone-900">
          Proiecte active <sup className="text-stone-400">{active.length}</sup>
        </h2>
        <ProjectsGrid projects={active} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-stone-900">
          Proiecte inactive <sup className="text-stone-400">{inactive.length}</sup>
        </h2>
        <p className="text-stone-500">Proiectele nereușite m-au învățat la fel de mult ca cele reușite.</p>
        <ProjectsGrid projects={inactive} />
      </div>
    </section>
  );
}
