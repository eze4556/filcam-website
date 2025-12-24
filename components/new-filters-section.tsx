import { PdfModal } from "@/components/pdf-modal"

export default function NewFiltersSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-filcam-teal">
              FILTROS NUEVOS
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Descubre las últimas incorporaciones a nuestro catálogo de filtros.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <PdfModal
              pdfUrl="/FILTROS.PDF"
              title="Catálogo de Filtros Nuevos"
              buttonText="VER NUEVOS FILTROS"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
