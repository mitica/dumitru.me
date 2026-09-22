import Link from "next/link";
import { Medallion } from "@/components/medallion";

export default function NotFoundPage() {
  return (
    <section>
      <h1 className="with-mark">
        <Medallion size={46} />
        Pagina nu există
      </h1>
      <p className="sub">Link-ul poate fi vechi sau scris greșit.</p>
      <p className="back">
        <Link href="/">dumitru.me</Link>
      </p>
    </section>
  );
}
