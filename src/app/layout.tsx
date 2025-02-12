
import type { Metadata } from 'next'

import './globals.css'
import Link from 'next/link'
import { tinos } from './fonts'
import Image from 'next/image'
import Head from 'next/head';
import  Header  from '../components/Header'

interface MyMetadata extends Metadata {
  extra?: {
    [key: string]: any;
  };
}


export const metadata: MyMetadata = {
  title: 'Lights and Media: Social Media Agency | Marketing Digital | Fotografía Profesional | Publicidad Online  | Estrategias Digitales',
  description: 'Lights and Media es una agencia especializada en manejo de redes sociales, marketing digital, fotografía profesional, publicidad online y estrategias digitales para marcas.',
  extra: {
    keywords: 'Social Media Agency, Manejo de Redes Sociales, Marketing Digital, Fotografía Profesional, Publicidad Online, Estrategia Digital, Branding Digital, Marketing de Influencers, Anuncios en Redes Sociales, Posicionamiento en Redes Sociales, Estrategias de Engagement, Marketing de Contenidos, Campañas Publicitarias Digitales, Consultoría en Redes Sociales',
  },
  icons: [
    {
      sizes: '57x57',
      href: '/icons/apple-icon-57x57.png',
      url: '/icons/apple-icon-57x57.png',
    },
    {
      sizes: '60x60',
      href: '/icons/apple-icon-60x60.png',
      url: '/icons/apple-icon-60x60.png',
    },
    {
      sizes: '72x72',
      href: '/icons/apple-icon-72x72.png',
      url: '/icons/apple-icon-72x72.png',
    },
    {
      sizes: '76x76',
      href: '/icons/apple-icon-76x76.png',
      url: '/icons/apple-icon-76x76.png',
    },
    {
      sizes: '114x114',
      href: '/icons/apple-icon-114x114.png',
      url: '/icons/apple-icon-114x114.png',
    },
    {
      sizes: '120x120',
      href: '/icons/apple-icon-120x120.png',
      url: '/icons/apple-icon-120x120.png',
    },
    {
      sizes: '144x144',
      href: '/icons/apple-icon-144x144.png',
      url: '/icons/apple-icon-144x144.png',
    },
    {
      sizes: '152x152',
      href: '/icons/apple-icon-152x152.png',
      url: '/icons/apple-icon-152x152.png',
    },
    {
      sizes: '180x180',
      href: '/icons/apple-icon-180x180.png',
      url: '/icons/apple-icon-180x180.png',
    },
    {
      sizes: '192x192',
      href: '/icons/android-icon-192x192.png',
      url: '/icons/android-icon-192x192.png',
    },
    {
      sizes: '32x32',
      href: '/icons/favicon-32x32.png',
      url: '/icons/favicon-32x32.png',
    },
    {
      sizes: '96x96',
      href: '/icons/favicon-96x96.png',
      url: '/icons/favicon-96x96.png',
    },
    {
      sizes: '16x16',
      href: '/icons/favicon-16x16.png',
      url: '/icons/favicon-16x16.png',
    },
  ],
};



export default function RootLayout({ children }: { children: React.ReactNode })
{
 

  return (
    
    <html lang="es">
      <Head>
        <Link rel="icon" href="/icons/favicon.ico" /> 
      </Head>
       
      <body className={tinos.className}>
          <Header></Header>
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
            <p className="flex items-center text-sm text-center">
              &copy; 2024  Lights and Media | Web desarrollada por&nbsp; <a href='https://bookplaintech.com/' target="_blank"
                rel="noopener noreferrer" className='underline'> Bookplain Technology.</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
