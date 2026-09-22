import Link from "next/link";
import { Fish } from "@/components/fish";

export default function NotFoundPage() {
  return (
    <section>
      <h1 className="with-mark">
        <Fish width={58} />
        Pagina nu există
      </h1>
      <p className="sub">Link-ul poate fi vechi sau scris greșit.</p>
      <p className="back">
        <Link href="/">dumitru.me</Link>
      </p>
    </section>
  );
}
