import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects-grid";
import { getAllProjects, splitProjectsByStatus } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proiecte"
};

export default function ProjectsPage() {
  const { active, inactive } = splitProjectsByStatus(getAllProjects());

  return (
    <section>
      <header className="article-head">
        <p className="dateline article-head__eyebrow">— portofoliu —</p>
        <h1 className="article-head__title">Proiecte</h1>
        <p className="article-head__lead">
          Lista proiectelor active și a celor închise.
        </p>
      </header>

      <div style={{ marginTop: "2rem" }}>
        <header className="section-head">
          <p className="dateline section-head__eyebrow">— curent —</p>
          <h2 className="section-head__title">
            Proiecte active{" "}
            <sup style={{ fontFamily: "var(--mono)", fontSize: "0.55em", color: "var(--accent)" }}>
              {String(active.length).padStart(2, "0")}
            </sup>
          </h2>
        </header>
        <ProjectsGrid projects={active} />
      </div>

      <div style={{ marginTop: "2.6rem" }}>
        <header className="section-head">
          <p className="dateline section-head__eyebrow">— arhivă —</p>
          <h2 className="section-head__title">
            Proiecte inactive{" "}
            <sup style={{ fontFamily: "var(--mono)", fontSize: "0.55em", color: "var(--muted-strong)" }}>
              {String(inactive.length).padStart(2, "0")}
            </sup>
          </h2>
        </header>
        <p className="section-copy" style={{ marginBottom: "0.8rem" }}>
          Proiectele nereușite m-au învățat la fel de mult ca cele reușite.
        </p>
        <ProjectsGrid projects={inactive} />
      </div>
    </section>
  );
}
