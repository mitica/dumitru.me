import Image from "next/image";
import Link from "next/link";
import { PostsList } from "@/components/posts-list";
import { getAllPosts, getAllProjects, splitProjectsByStatus } from "@/lib/content";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 8);
  const { active } = splitProjectsByStatus(getAllProjects());
  const featured = active.slice(0, 4);
  const year = new Date().getFullYear();

  return (
    <div className="space-y-14">
      <section className="masthead">
        <div className="masthead-strap-top">
          <span className="dateline">
            <span className="bullet-star">★</span>
            Nº&nbsp;{String(posts.length).padStart(2, "0")} — IALOVENI — {year}
          </span>
          <span className="dateline masthead-strap-top__right">
            construiește lucruri pe internet · de prin 2005
          </span>
        </div>

        <div className="masthead-name-row">
          <h1 className="masthead-name">
            <span className="masthead-name__line">DUMITRU</span>
            <span className="masthead-name__line masthead-name__line--shift">
              CANTEA<span className="masthead-name__dot">.</span>
            </span>
          </h1>

          <div className="masthead-face">
            <Image
              src="/img/face.jpg"
              alt="Portret Dumitru Cantea"
              width={140}
              height={140}
              priority
              className="masthead-face__img"
            />
            <p className="masthead-face__caption">Ialoveni · {year}</p>
          </div>
        </div>

        <p className="masthead-tagline">
          IT engineer. Scriu despre <em>proiecte</em>, experimente și experiențe practice
          din tehnologie — pe scurt, ce e în lucru și ce a rămas în urmă.
        </p>

        <div className="masthead-strap-bottom">
          <p className="dateline masthead-strap-bottom__label">— curent —</p>
          <ul className="masthead-strap-bottom__list">
            {featured.map((project, index) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <span className="numeral">{String(index + 1).padStart(2, "0")}</span>
                  <span className="masthead-strap-bottom__name">{project.title}</span>
                  {project.releaseYear ? (
                    <span className="masthead-strap-bottom__year">{project.releaseYear}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <header className="section-head">
          <p className="dateline section-head__eyebrow">— din jurnal —</p>
          <h2 className="section-head__title">Ultimele articole</h2>
          <Link href="/blog" className="section-head__more">
            Toate articolele →
          </Link>
        </header>

        <PostsList posts={posts} />
      </section>
    </div>
  );
}
