import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="surface-strong rounded-2xl p-8">
      <h1 className="title-display text-3xl font-semibold text-emerald-950">Pagina nu a fost găsită</h1>
      <p className="section-copy mt-3">Link-ul poate fi vechi sau invalid.</p>
      <p className="mt-5">
        <Link href="/" className="text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-900">
          Înapoi la prima pagină
        </Link>
      </p>
    </section>
  );
}
