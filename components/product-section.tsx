import Image from "next/image"
import Link from "next/link"

export default function ProductSection() {
  const products = [
    {
      name: "Filtros de Aceite",
      description: "Protección esencial para el motor de su vehículo.",
      imageQuery: "oil filter for car",
    },
    {
      name: "Filtros de Aire",
      description: "Mejore el rendimiento y la eficiencia del combustible.",
      imageQuery: "air filter for truck",
    },
    {
      name: "Filtros de Combustible",
      description: "Asegure la pureza del combustible para un funcionamiento óptimo.",
      imageQuery: "fuel filter for heavy machinery",
    },
    {
      name: "Sistemas Hidráulicos",
      description: "Soluciones de filtración para sistemas hidráulicos complejos.",
      imageQuery: "hydraulic filter system",
    },
    {
      name: "Filtración en Seco",
      description: "Tecnología avanzada para una filtración eficiente.",
      imageQuery: "dry filtration system",
    },
    {
      name: "Filtros para Maquinaria Vial",
      description: "Componentes robustos para equipos de construcción y viales.",
      imageQuery: "filter for construction equipment",
    },
  ]

  return (
    <section id="products" className="py-12 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-filcam-teal mb-10">Nuestros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Link href="#" className="block relative" prefetch={false}>
                <Image
                  src={`/placeholder.svg?height=300&width=400&query=${encodeURIComponent(product.imageQuery)}`}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
