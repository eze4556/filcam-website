export default function AboutSection() {
  return (
    <section id="about" className="py-12 pb-6 md:py-20 md:pb-10 bg-gray-50">
      {" "}
      {/* Ajustado el padding-bottom */}
      <div className="container max-w-4xl mx-auto px-4 md:px-6 text-justify">
        <h2 className="text-3xl md:text-4xl font-bold text-filcam-teal mb-6">Sobre Nosotros</h2>
        <p className="text-lg text-filcam-teal leading-relaxed mb-4">
          Distribuidora Filcam es distribuidor oficial de filtros darmet. Comercializa filtros para automotores
          (automóviles, tractores, camiones, cosechadoras, máquinas viales, palas y autoelevadores) de aceite, aire,
          combustible, sistemas hidráulicos y sistema de filtración en seco.
        </p>
        <p className="text-lg text-filcam-teal leading-relaxed mb-4">
          Incorporando además marcas como fleetguard, donaldson, baldwin, turbo, mareno, lanns.
        </p>
        <p className="text-lg text-filcam-teal leading-relaxed">
          Con más de 40 años de trayectoria, distribuidora Filcam se destaca por su amplia experiencia en el rubro,
          siendo su mayor fortaleza el conocimiento y asesoramiento en la conversión equivalente de cualquier filtro
          nacional e importado.
        </p>
      </div>
    </section>
  )
}
