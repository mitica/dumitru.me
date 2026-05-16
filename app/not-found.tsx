import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="border-t border-stone-300/70 pt-8">
      <h1 className="title-display text-3xl font-semibold text-stone-950">Pagina nu a fost găsită</h1>
      <p className="section-copy mt-3">Link-ul poate fi vechi sau invalid.</p>
      <p className="mt-5">
        <Link href="/" className="text-cyan-800 underline decoration-cyan-300 underline-offset-4 hover:text-cyan-950">
          Înapoi la prima pagină
        </Link>
      </p>
    </section>
  );
}
