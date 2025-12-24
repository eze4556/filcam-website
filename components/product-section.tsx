import Image from "next/image"
import Link from "next/link"

export default function ProductSection() {
  const products = [
    {
      name: "Filtros de Aire Poliuretano",
      description: "Filtros de aire de alta calidad fabricados en poliuretano para máxima durabilidad y eficiencia en la filtración.",
      image: "/filtros de aire polieturano.jfif",
    },
    {
      name: "Filtros de Aire",
      description: "Filtros de aire DARMET de alta calidad para motores, con diferentes tamaños y especificaciones. Mejore el rendimiento y la eficiencia del motor con nuestra gama completa de filtros de aire.",
      image: "/filtrosaire.jfif",
    },
    {
      name: "Elementos Filtrantes Aceite Motor e Hidráulico",
      description: "Elementos filtrantes especializados para aceite de motor y sistemas hidráulicos, garantizando la protección y limpieza óptima de los fluidos.",
      image: "/Elementos filtrantes aceite motor e hidráulico.jfif",
    },
    {
      name: "Unidades Selladas Hidráulico",
      description: "Unidades selladas hidráulicas de alta calidad para sistemas hidráulicos complejos, garantizando máxima eficiencia y durabilidad.",
      image: "/Unidades selladas hidráulico.jfif",
    },
    {
      name: "Unidades Selladas Aceite Motor",
      description: "Unidades selladas especializadas para aceite de motor, diseñadas para máxima protección y durabilidad en condiciones extremas.",
      image: "/Unidades selladas aceite motor.jfif",
    },
    {
      name: "Elementos Filtrantes de Combustible y Semi Blindados",
      description: "Elementos filtrantes de combustible de alta calidad y sistemas semi blindados, diseñados para máxima protección y eficiencia en la filtración de combustibles.",
      image: "/Elementos filtrantes de combustible y semi blindados.jfif",
    },
    {
      name: "Unidades Selladas de Combustible",
      description: "Unidades selladas especializadas para sistemas de combustible, garantizando máxima protección y eficiencia en la filtración de combustibles.",
      image: "/Unidades selladas de combustible.jfif",
    },
    {
      name: "Otras Marcas que Comercializamos",
      description: "Distribuimos una amplia gama de marcas reconocidas como Fleetguard, Donaldson, Baldwin, Turbo, Mareno, Lanns y más, ofreciendo soluciones completas para todas las necesidades de filtración.",
      image: "/Otras marcas que comercializamos.jfif",
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
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-filcam-teal mb-2">{product.name}</h3>
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
