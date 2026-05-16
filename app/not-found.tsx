import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">Pagina nu a fost găsită</h1>
      <p className="mt-3 text-stone-600">Link-ul poate fi vechi sau invalid.</p>
      <p className="mt-5">
        <Link href="/" className="text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800">
          Înapoi la prima pagină
        </Link>
      </p>
    </section>
  );
}
