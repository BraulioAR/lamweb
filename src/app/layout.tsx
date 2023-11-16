import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lights and Media',
  description: 'Social Media Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <header className='flex flex-row justify-between items-center text-white ml-5 mr5 '>
          <div className='mx-auto max-w-7xl'>
            <div className='py-5 sm: hidden'>
              <Image
                alt="LAM Logo"
                src="/LAM-logo.png"
                width={120}
                height={150}
              />
            </div>
            <div className='flex items-center sm:justify-between gap-x-3'>
              <Link className='text-black lg:px-3 py-5 cursor-pointer text-md hover:scale-105 hover:text-indigo-100 transition:fill 0.3s'
                href="/"
                rel="noopener noreferrer">Inicio</Link>
              <Link className='text-black lg:px-3 py-5 cursor-pointer text-md hover:scale-105 hover:text-indigo-100 transition:fill 0.3s'
                href="/#contact"
                rel="noopener noreferrer">Contacto</Link>
              <Link className='text-black lg:px-3 py-5 cursor-pointer text-md hover:scale-105 hover:text-indigo-100 transition:fill 0.3s'
                href="/acercaDe"
                rel="noopener noreferrer">Acerca de</Link>
              <Link className='text-black lg:px-3 py-5 cursor-pointer text-md hover:scale-105 hover:text-indigo-100 transition:fill 0.3s'
                href="/#servicios"
                rel="noopener noreferrer">Servicios</Link>
              <Link className='text-black lg:px-3 py-5 cursor-pointer text-md hover:scale-105 hover:text-indigo-100 transition:fill 0.3s'
                href="#home"
                rel="noopener noreferrer">Blog</Link>
              <Link className='text-black lg:px-3 py-5 cursor-pointer text-md hover:scale-105 hover:text-indigo-100 transition:fill 0.3s'
                href="#home"
                rel="noopener noreferrer">Portafolio</Link>
            </div>
          </div>
        </header>
        {children}
        <footer className='flex flex-col gap-[0.5rem] bg-gray-300'>
          <div
            className="flex flex-col justify-between items-center"
          >
            <nav className="flex gap-[1rem] grow-[1] basis-0 content-center">
              <a
                href="https://www.instagram.com/lightsandmedialam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className='w-4 h-4 fill-black transition: fill 0.3s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>

            </nav>
          </div>
          <div className='flex justify-center'>
            <p className="flex items-center text-sm">
              &copy; 2023  Lights and Media | Developed by Braulio A. Rosario.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
