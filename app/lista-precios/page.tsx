"use client"

import { useState, useEffect } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Download, Calendar, FileText, Lock } from 'lucide-react'

interface PriceList {
  id: string
  date: string
  fileName: string
  downloadURL: string
  uploadDate: Date
}

export default function ListaPreciosPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [priceLists, setPriceLists] = useState<PriceList[]>([])
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'filmar2025') {
      setIsAuthenticated(true)
      setMessage('')
      fetchPriceLists()
    } else {
      setMessage('Contraseña incorrecta')
      setMessageType('error')
    }
  }

  const fetchPriceLists = async () => {
    setIsLoading(true)
    try {
      const q = query(collection(db, 'priceLists'), orderBy('uploadDate', 'desc'))
      const querySnapshot = await getDocs(q)
      const lists: PriceList[] = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        lists.push({
          id: doc.id,
          date: data.date,
          fileName: data.fileName,
          downloadURL: data.downloadURL,
          uploadDate: data.uploadDate.toDate()
        } as PriceList)
      })
      setPriceLists(lists)
    } catch (error) {
      console.error('Error fetching price lists:', error)
      setMessage('Error al cargar las listas de precios')
      setMessageType('error')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="text-center">
                <Lock className="mx-auto h-12 w-12 text-filcam-teal mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Lista de Precios
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Ingresa la contraseña para acceder a las listas de precios
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                                 <div>
                   <Label htmlFor="password">Contraseña</Label>
                   <Input
                     id="password"
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     className="mt-1"
                   />
                 </div>
                {message && (
                  <Alert variant={messageType === 'error' ? 'destructive' : 'default'}>
                    <AlertDescription>{message}</AlertDescription>
                  </Alert>
                )}
                <Button type="submit" className="w-full">
                  Acceder
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-filcam-teal to-teal-700 text-white">
          <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Lista de Precios
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Accede a nuestras listas de precios actualizadas
            </p>
          </div>
        </section>

        {/* Price Lists Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Listas de Precios Disponibles</h2>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/'}
                >
                  Volver a la Web
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsAuthenticated(false)}
                >
                  Cerrar Sesión
                </Button>
              </div>
            </div>

            {message && (
              <Alert variant={messageType === 'error' ? 'destructive' : 'default'} className="mb-6">
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-filcam-teal mx-auto"></div>
                <p className="text-gray-600 mt-4">Cargando listas de precios...</p>
              </div>
            ) : priceLists.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500 text-lg">No hay listas de precios disponibles</p>
                  <p className="text-gray-400">Contacta a nuestro equipo para más información</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {priceLists.map((list) => (
                  <Card key={list.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-filcam-teal text-white p-3 rounded-full">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              Lista de Precios - {list.date}
                            </h3>
                            <p className="text-gray-600">{list.fileName}</p>
                            <p className="text-sm text-gray-400">
                              Actualizada: {list.uploadDate.toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        <Button
                          onClick={() => window.open(list.downloadURL, '_blank')}
                          className="bg-filcam-teal hover:bg-teal-700"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Descargar PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Additional Info */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                ¿Necesitas más información?
              </h3>
              <p className="text-gray-600 max-w-3xl mb-6">
                Si tienes alguna consulta sobre nuestros precios o necesitas información adicional,
                no dudes en contactarnos. Nuestro equipo está disponible para ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    const message = "HOLA NECESITO INFORMACIÓN SOBRE PRECIOS"
                    const encodedMessage = encodeURIComponent(message)
                    const whatsappUrl = `https://wa.me/5493415151970?text=${encodedMessage}`
                    window.open(whatsappUrl, "_blank")
                  }}
                  className="bg-green-500 hover:bg-green-600"
                >
                  Contactar por WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const email = 'filtrosfilcam@hotmail.com'
                    const subject = 'Consulta sobre Precios'
                    const body = 'Hola, necesito información sobre sus precios.'
                    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    window.open(mailtoLink)
                  }}
                >
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
