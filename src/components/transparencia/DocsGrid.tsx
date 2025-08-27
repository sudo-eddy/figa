import Link from "next/link";
import { FileText } from "lucide-react";
import { docs } from "@/data/transparencia";

export default function DocsGrid() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-extrabold">Documentos descargables</h3>
        <p className="text-gray-700 mt-2">
          Consulta los informes, estados financieros y documentos de autorización:
        </p>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.map((d) => (
            <Link
              key={d.file}
              href={`/docs/${d.file}`}
              target="_blank"
              className="group rounded-xl border border-gray-200 p-4 hover:shadow-md transition flex items-center gap-3 bg-white"
            >
              <FileText className="w-5 h-5 text-blue-600 group-hover:scale-110 transition" />
              <span className="font-medium">{d.label}</span>
            </Link>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-6">
          ¿No encuentras un documento? Escríbenos y con gusto lo compartimos.
        </p>
      </div>
    </section>
  );
}
