"use client"

import { Phone, Mail, MapPin, Clock, Package, Truck } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ContactoPage() {
  const handleEmailClick = (type: 'consulta' | 'pedido') => {
    const email = 'filtrosfilcam@hotmail.com'
    const subject = type === 'consulta' ? 'Consulta Filcam' : 'Pedido Filcam'
    const body = type === 'consulta' 
      ? 'Hola, necesito información sobre sus productos.'
      : 'Hola, me interesa realizar un pedido de sus productos.'
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Intentar abrir el mailto
    const link = document.createElement('a')
    link.href = mailtoLink
    link.click()
    
    // Fallback: mostrar información si no se abre el email
    setTimeout(() => {
      const shouldShowFallback = !document.hidden && !window.navigator.userAgent.includes('Mobile')
      if (shouldShowFallback) {
        alert(`Si no se abrió tu cliente de email, puedes copiar esta dirección:\n\n${email}\n\nAsunto: ${subject}\n\nMensaje: ${body}`)
      }
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-filcam-teal to-teal-700 text-white">
          <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Contacto</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Teléfono */}
              <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-filcam-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Teléfono</h3>
                <p className="text-gray-600 mb-4">Llamanos de Lunes a Viernes</p>
                <a href="tel:+5493415151970" className="text-filcam-teal font-semibold hover:underline text-lg">
                  +54 9 341 515-1970
                </a>
              </div>

              {/* Email */}
              <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-filcam-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Escribenos tu consulta</p>
                <button 
                  onClick={() => handleEmailClick('consulta')}
                  className="text-filcam-teal font-semibold hover:underline text-lg cursor-pointer"
                >
                  filtrosfilcam@hotmail.com
                </button>
              </div>

              {/* Dirección */}
              <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <div className="bg-filcam-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dirección</h3>
                <p className="text-gray-600 mb-4">Próximamente</p>
                <address className="text-filcam-teal font-semibold not-italic">
                  Parque Industrial Roldán
                  <br />
                  Provincia de Santa Fe
                  <br />
                  Argentina
                </address>
              </div>
            </div>

            {/* Información de Ventas */}
            <div className="mt-12 bg-filcam-teal text-white rounded-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-semibold">Ventas</h3>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold mb-4">Enviamos pedidos a todo el país</p>
                <p className="text-teal-100 text-lg">Amplio Stock</p>
              </div>
            </div>

            {/* Información de Pedidos */}
            <div className="mt-8 bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <Package className="h-8 w-8 mr-3 text-filcam-teal" />
                <h3 className="text-2xl font-semibold text-gray-800">Pedidos</h3>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800 mb-4">Vía Email o WhatsApp</p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <button 
                    onClick={() => handleEmailClick('pedido')}
                    className="bg-filcam-teal text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300 font-semibold"
                  >
                    Email: filtrosfilcam@hotmail.com
                  </button>
                  <a 
                    href="https://wa.me/5493415151970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 font-semibold"
                  >
                    WhatsApp: +54 9 341 515-1970
                  </a>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Necesitas Asesoramiento?</h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                Con más de 40 años de experiencia, nuestro equipo está capacitado para ayudarte a encontrar el filtro
                exacto que necesitas. Contamos con equivalencias de todas las marcas nacionales e importadas.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const message = "HOLA NECESITO ASESORAMIENTO"
                    const encodedMessage = encodeURIComponent(message)
                    const whatsappUrl = `https://wa.me/5493415151970?text=${encodedMessage}`
                    window.open(whatsappUrl, "_blank")
                  }}
                  className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors duration-300 font-semibold flex items-center gap-3 text-lg"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
                  Contactar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
