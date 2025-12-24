"use client"

import { useState, useEffect } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, getDocs, orderBy, query, deleteDoc, doc } from 'firebase/firestore'
import { storage, db } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Trash2, Upload, Download, Calendar } from 'lucide-react'

interface PriceList {
  id: string
  date: string
  fileName: string
  downloadURL: string
  uploadDate: Date | null
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [priceLists, setPriceLists] = useState<PriceList[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [date, setDate] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  // Helper function to format dates safely
  const formatDate = (date: Date | null): string => {
    if (!date) return 'Fecha no disponible'
    try {
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch (error) {
      return 'Fecha inválida'
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchPriceLists()
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'admin@filcam.com' && password === 'filcam') {
      setIsAuthenticated(true)
      setMessage('')
    } else {
      setMessage('Credenciales incorrectas')
      setMessageType('error')
    }
  }

  const fetchPriceLists = async () => {
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
          uploadDate: data.uploadDate?.toDate() || new Date()
        } as PriceList)
      })
      setPriceLists(lists)
    } catch (error) {
      console.error('Error fetching price lists:', error)
      setMessage('Error al cargar las listas de precios')
      setMessageType('error')
    }
  }

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile || !date) {
      setMessage('Por favor selecciona un archivo y una fecha')
      setMessageType('error')
      return
    }

    setIsUploading(true)
    try {
      // Upload file to Firebase Storage
      const storageRef = ref(storage, `priceLists/${Date.now()}_${selectedFile.name}`)
      const snapshot = await uploadBytes(storageRef, selectedFile)
      const downloadURL = await getDownloadURL(snapshot.ref)

      // Save metadata to Firestore
      await addDoc(collection(db, 'priceLists'), {
        date,
        fileName: selectedFile.name,
        downloadURL,
        uploadDate: new Date()
      })

      setMessage('Lista de precios subida exitosamente')
      setMessageType('success')
      setSelectedFile(null)
      setDate('')
      fetchPriceLists()
    } catch (error) {
      console.error('Error uploading file:', error)
      setMessage('Error al subir el archivo')
      setMessageType('error')
    } finally {
      setIsUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta lista de precios?')) {
      try {
        await deleteDoc(doc(db, 'priceLists', id))
        setMessage('Lista de precios eliminada exitosamente')
        setMessageType('success')
        fetchPriceLists()
      } catch (error) {
        console.error('Error deleting price list:', error)
        setMessage('Error al eliminar la lista de precios')
        setMessageType('error')
      }
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-gray-900">
              Panel de Administración
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
                               <div>
                   <Label htmlFor="email">Email</Label>
                   <Input
                     id="email"
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className="mt-1"
                   />
                 </div>
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
                Iniciar Sesión
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
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

        {/* Upload Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Subir Nueva Lista de Precios</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFileUpload} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Fecha de la Lista</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="file">Archivo PDF</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              <Button type="submit" disabled={isUploading} className="w-full md:w-auto">
                {isUploading ? (
                  <>
                    <Upload className="mr-2 h-4 w-4 animate-spin" />
                    Subiendo...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Subir Lista de Precios
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Price Lists */}
        <Card>
          <CardHeader>
            <CardTitle>Listas de Precios Existentes</CardTitle>
          </CardHeader>
          <CardContent>
            {priceLists.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No hay listas de precios disponibles</p>
            ) : (
              <div className="space-y-4">
                {priceLists.map((list) => (
                  <div
                    key={list.id}
                    className="flex items-center justify-between p-4 border rounded-lg bg-white"
                  >
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">{list.date}</p>
                        <p className="text-sm text-gray-500">{list.fileName}</p>
                                                 <p className="text-xs text-gray-400">
                           Subido: {formatDate(list.uploadDate)}
                         </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(list.downloadURL, '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Descargar
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(list.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Eliminar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
