import Link from "next/link";
import { Portrait } from "@/components/portrait";

export default function NotFoundPage() {
  return (
    <section>
      <h1 className="with-portrait">
        <Portrait size={48} />
        Pagina nu există
      </h1>
      <p className="sub">Link-ul poate fi vechi sau scris greșit.</p>
      <p className="back">
        <Link href="/">dumitru.me</Link>
      </p>
    </section>
  );
}
