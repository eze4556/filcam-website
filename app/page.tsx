import Navbar from "@/components/navbar"
import AboutSection from "@/components/about-section"
import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import NewFiltersSection from "@/components/new-filters-section"
import type { Metadata } from "next" // Importar Metadata

// Definir los metadatos para la página
export const metadata: Metadata = {
  title: "Distribuidora Filcam",
  description: "Distribuidor oficial de filtros con más de 40 años de experiencia.",
  icons: {
    icon: "/logo-filcam-distribuidora.png",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-filcam-teal to-teal-700 text-white flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">DISTRIBUIDORA FILCAM</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Su distribuidor oficial de filtros con más de 40 años de experiencia.
            </p>
          </div>
        </section>
        <NewFiltersSection />
        <AboutSection />
        <ProductSection />
      </main>
      <Footer />
      <WhatsAppButton
        phoneNumber="5491123456789"
        message="Hola! Me interesa consultar sobre filtros FILCAM para mi vehículo."
      />
    </div>
  )
}
