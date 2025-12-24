"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="bg-white text-gray-800 py-4 px-6 md:px-8 flex items-center justify-between shadow-sm">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        {/* Logo simplificado */}
        <img
          src="/logo-filcam-distribuidora.png"
          alt="FILCAM Distribuidora Logo"
          className="h-12 w-auto object-contain"
          onError={(e) => {
            // Fallback a logo alternativo si hay error
            const target = e.target as HTMLImageElement
            target.src = '/logo-filcam.png'
          }}
        />
        <span className="sr-only">FILCAM Distribuidora</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:underline underline-offset-4" prefetch={false}>
          Inicio
        </Link>
        <Link href="/#about" className="hover:underline underline-offset-4" prefetch={false}>
          Nosotros
        </Link>
        <Link href="/#products" className="hover:underline underline-offset-4" prefetch={false}>
          Productos
        </Link>
        <Link href="/lista-precios" className="hover:underline underline-offset-4" prefetch={false}>
          Lista Precios Clientes
        </Link>
        <Link href="/contacto" className="hover:underline underline-offset-4" prefetch={false}>
          Contacto
        </Link>
      </nav>
      <Button variant="ghost" className="md:hidden">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
