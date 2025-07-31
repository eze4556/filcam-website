import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 px-6 md:px-8 shadow-inner">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/logo-filcam-distribuidora.png"
            alt="FILCAM Distribuidora Logo"
            width={150}
            height={50}
            className="h-8 w-auto"
          />
          <span className="sr-only">FILCAM Distribuidora</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link href="/" className="hover:underline underline-offset-4 text-sm" prefetch={false}>
            Inicio
          </Link>
          <Link href="/#about" className="hover:underline underline-offset-4 text-sm" prefetch={false}>
            Nosotros
          </Link>
          <Link href="/#products" className="hover:underline underline-offset-4 text-sm" prefetch={false}>
            Productos
          </Link>
          <Link href="/contacto" className="hover:underline underline-offset-4 text-sm" prefetch={false}>
            Contacto
          </Link>
        </nav>
        <p className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Distribuidora FILCAM. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
