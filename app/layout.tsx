import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import ClientWrapper from '@/components/client-wrapper'

export const metadata: Metadata = {
  title: 'Distribuidora Filcam',
  description: 'Distribuidor oficial de filtros con más de 40 años de experiencia.',
  generator: 'v0.dev',
  icons: {
    icon: '/LOGO FILCAM R.ico',
    shortcut: '/LOGO FILCAM R.ico',
    apple: '/LOGO FILCAM R.ico',
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
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientWrapper>
      </body>
    </html>
  )
}
