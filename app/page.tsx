import Link from "next/link";
import { Portrait } from "@/components/portrait";
import { PostsList } from "@/components/posts-list";
import { ProjectsGrid } from "@/components/projects-grid";
import { getAllPosts, getAllProjects, splitProjectsByStatus } from "@/lib/content";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5);
  const { active } = splitProjectsByStatus(getAllProjects());

  return (
    <>
      <p className="lede with-portrait">
        <Portrait size={56} />
        Dumitru Cantea. IT engineer. Ce e în lucru, și ce a rămas în urmă.
      </p>

      <section className="block">
        <div className="block-head">
          <h2>Note</h2>
          <Link href="/blog" className="more">
            Toate
          </Link>
        </div>
        <PostsList posts={posts} />
      </section>

      <section className="block">
        <div className="block-head">
          <h2>Proiecte</h2>
          <Link href="/projects" className="more">
            Toate
          </Link>
        </div>
        <ProjectsGrid projects={active.slice(0, 5)} />
      </section>
    </>
  );
}
