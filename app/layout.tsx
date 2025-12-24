import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import ClientWrapper from '@/components/client-wrapper'

export const metadata: Metadata = {
  title: 'Filcam Distribuidora - Filtros Industriales y Automotrices',
  description: 'Distribuidor oficial de filtros industriales, automotrices y elementos filtrantes con más de 40 años de experiencia. Filtros de aceite, combustible, aire e hidráulicos.',
  keywords: 'filtros industriales, filtros automotrices, filtros aceite, filtros combustible, filtros aire, filtros hidráulicos, elementos filtrantes, filcam, filtros poliuretano, filtros DARMET, Fleetguard, Donaldson, Baldwin, Turbo, Mareno, Lanns, filtros motor, filtros hidráulicos, filtros combustible, unidades selladas, elementos filtrantes aceite, filtros semi blindados, distribuidora filtros, filtros Argentina, filtros Santa Fe, filtros Roldán, filtros camiones, filtros maquinaria, filtros agrícolas, filtros construcción, filtros minería, filtros transporte, filtros logística, filtros flota, filtros repuestos, filtros originales, filtros equivalentes, filtros importados, filtros nacionales, filtros calidad, filtros durabilidad, filtros eficiencia, filtros rendimiento, filtros protección motor, filtros limpieza aceite, filtros limpieza combustible, filtros limpieza aire, filtros protección hidráulica, filtros protección sistema, filtros mantenimiento, filtros preventivo, filtros correctivo, filtros repuestos automotrices, filtros repuestos industriales, filtros repuestos maquinaria, filtros repuestos camiones, filtros repuestos tractores, filtros repuestos excavadoras, filtros repuestos cargadores, filtros repuestos bulldozers, filtros repuestos motoniveladoras, filtros repuestos retroexcavadoras, filtros repuestos grúas, filtros repuestos montacargas, filtros repuestos generadores, filtros repuestos compresores, filtros repuestos bombas, filtros repuestos válvulas, filtros repuestos cilindros, filtros repuestos motores diesel, filtros repuestos motores gasolina, filtros repuestos transmisiones, filtros repuestos diferenciales, filtros repuestos cajas de cambios, filtros repuestos sistemas de frenos, filtros repuestos sistemas de dirección, filtros repuestos sistemas de suspensión, filtros repuestos sistemas de refrigeración, filtros repuestos sistemas de lubricación, filtros repuestos sistemas de combustible, filtros repuestos sistemas de aire, filtros repuestos sistemas hidráulicos, filtros repuestos sistemas neumáticos, filtros repuestos sistemas eléctricos, filtros repuestos sistemas de escape, filtros repuestos sistemas de admisión, filtros repuestos sistemas de inyección, filtros repuestos sistemas de encendido, filtros repuestos sistemas de carga, filtros repuestos sistemas de arranque, filtros repuestos sistemas de iluminación, filtros repuestos sistemas de señalización, filtros repuestos sistemas de seguridad, filtros repuestos sistemas de comunicación, filtros repuestos sistemas de navegación, filtros repuestos sistemas de entretenimiento, filtros repuestos sistemas de climatización, filtros repuestos sistemas de ventilación, filtros repuestos sistemas de calefacción, filtros repuestos sistemas de refrigeración, filtros repuestos sistemas de humidificación, filtros repuestos sistemas de deshumidificación, filtros repuestos sistemas de purificación, filtros repuestos sistemas de filtración, filtros repuestos sistemas de separación, filtros repuestos sistemas de clasificación, filtros repuestos sistemas de tamizado, filtros repuestos sistemas de cribado, filtros repuestos sistemas de centrifugado, filtros repuestos sistemas de sedimentación, filtros repuestos sistemas de flotación, filtros repuestos sistemas de coagulación, filtros repuestos sistemas de floculación, filtros repuestos sistemas de precipitación, filtros repuestos sistemas de cristalización, filtros repuestos sistemas de evaporación, filtros repuestos sistemas de destilación, filtros repuestos sistemas de extracción, filtros repuestos sistemas de adsorción, filtros repuestos sistemas de absorción, filtros repuestos sistemas de intercambio iónico, filtros repuestos sistemas de ósmosis inversa, filtros repuestos sistemas de ultrafiltración, filtros repuestos sistemas de nanofiltración, filtros repuestos sistemas de microfiltración, filtros repuestos sistemas de macrofiltración, filtros repuestos sistemas de filtración profunda, filtros repuestos sistemas de filtración superficial, filtros repuestos sistemas de filtración absoluta, filtros repuestos sistemas de filtración nominal, filtros repuestos sistemas de filtración beta, filtros repuestos sistemas de filtración alfa, filtros repuestos sistemas de filtración gamma, filtros repuestos sistemas de filtración delta, filtros repuestos sistemas de filtración epsilon, filtros repuestos sistemas de filtración zeta, filtros repuestos sistemas de filtración eta, filtros repuestos sistemas de filtración theta, filtros repuestos sistemas de filtración iota, filtros repuestos sistemas de filtración kappa, filtros repuestos sistemas de filtración lambda, filtros repuestos sistemas de filtración mu, filtros repuestos sistemas de filtración nu, filtros repuestos sistemas de filtración xi, filtros repuestos sistemas de filtración omicron, filtros repuestos sistemas de filtración pi, filtros repuestos sistemas de filtración rho, filtros repuestos sistemas de filtración sigma, filtros repuestos sistemas de filtración tau, filtros repuestos sistemas de filtración upsilon, filtros repuestos sistemas de filtración phi, filtros repuestos sistemas de filtración chi, filtros repuestos sistemas de filtración psi, filtros repuestos sistemas de filtración omega',
  authors: [{ name: 'Filcam Distribuidora' }],
  creator: 'Filcam Distribuidora',
  publisher: 'Filcam Distribuidora',
  generator: 'Next.js',
  applicationName: 'Filcam Website',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'tu-codigo-verificacion-google', // Agregar código de Google Search Console
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://filcam.com.ar',
    siteName: 'Filcam Distribuidora',
    title: 'Filcam Distribuidora - Filtros Industriales y Automotrices',
    description: 'Distribuidor oficial de filtros industriales, automotrices y elementos filtrantes con más de 40 años de experiencia.',
    images: [
      {
        url: '/logo-filcam.png',
        width: 1200,
        height: 630,
        alt: 'Filcam Distribuidora - Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Filcam Distribuidora - Filtros Industriales y Automotrices',
    description: 'Distribuidor oficial de filtros industriales, automotrices y elementos filtrantes con más de 40 años de experiencia.',
    images: ['/logo-filcam.png'],
  },
  alternates: {
    canonical: 'https://filcam.com.ar',
  },
  icons: {
    icon: '/favicon-96x96.png',
    shortcut: '/favicon-96x96.png',
    apple: '/favicon-96x96.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body suppressHydrationWarning>
        <ClientWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            forcedTheme="light"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientWrapper>
      </body>
    </html>
  )
}
