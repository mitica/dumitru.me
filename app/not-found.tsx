import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section>
      <header className="article-head">
        <p className="dateline article-head__eyebrow">— eroare 404 —</p>
        <h1 className="article-head__title">Pagina nu a fost găsită</h1>
        <p className="article-head__lead">Link-ul poate fi vechi sau invalid.</p>
      </header>

      <p style={{ marginTop: "1.6rem" }}>
        <Link
          href="/"
          className="mono"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.78rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--accent)",
            textDecoration: "underline",
            textDecorationColor: "var(--accent)",
            textUnderlineOffset: "4px"
          }}
        >
          ← Înapoi la prima pagină
        </Link>
      </p>
    </section>
  );
}
