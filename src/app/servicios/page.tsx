'use client'
import Image from 'next/image'
import { tinos } from '../fonts'
import Link from 'next/link'
import  InstagramFeed  from '../../components/InstagramFeed'


export default function Page() {
    return (
        <section>
<section id='servicios' className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-white h-full pb-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex justify-center items-center py-8'>
            <h1 className={`${tinos.className} text-center text-blue-300 text-3xl lg:text-[3.25rem] pt-5 pb-5`}>Descubre los servicios que ofrecemos</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col lg:flex-row justify-between gap-4 pb-4'>
              <div className='bg-white flex flex-col border border-gray-200 px-5 py-12'>
                <div>
                  <Image
                    src='/fotografia.webp'
                    alt='Fotografía'
                    width={220}
                    height={215}
                    className='rounded-[10rem]'
                  />
                  <div className='flex items-center justify-center pt-7'>
                    <Link href="#contact">
                      <button className={`${tinos.className} border-2 text-blue-500 border-blue-600 text-lg px-3 font-bold hover:scale-105`}>FOTOGRAFÍA</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='bg-white flex flex-col border border-gray-200 px-5 py-12'>
                <div>
                  <Image
                    src='/videografia.webp'
                    alt='Videografía'
                    width={220}
                    height={215}
                    className='rounded-[10rem]'
                  />
                  <div className='flex items-center justify-center pt-7'>
                    <Link href="#contact">
                      <button className={`${tinos.className} border-2 text-blue-500 border-blue-600 text-lg px-3 font-bold hover:scale-105`}>VIDEOGRAFÍA</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='bg-white flex flex-col border border-gray-200 px-5 py-12'>
                <div>
                  <Image
                    src='/disenografico.webp'
                    alt='Diseno Grafico'
                    width={220}
                    height={215}
                    className='rounded-[10rem]'
                  />
                  <div className='flex items-center justify-center pt-7'>
                    <Link href="#contact">
                      <button className={`${tinos.className} border-2 text-blue-500 border-blue-600 text-lg px-3 font-bold hover:scale-105`}>DISEÑO GRÁFICO</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='bg-white flex flex-col border border-gray-200 px-5 py-12'>
                <div>
                  <Image
                    src='/paginaweb.webp'
                    alt='Pagina Web'
                    width={220}
                    height={215}
                    className='rounded-[10rem]'
                  />
                  <div className='flex items-center justify-center pt-7'>
                    <Link href="#contact">
                      <button className={`${tinos.className} border-2 text-blue-500 border-blue-600 text-lg px-3 font-bold hover:scale-105`}>PÁGINA WEB</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-4'>
              <div className='bg-white flex flex-col border border-gray-200 px-5 py-12'>
                <div>
                  <Image
                    src='/redes.webp'
                    alt='Redes'
                    width={220}
                    height={215}
                    className='rounded-[10rem]'
                  />
                  <div className='flex items-center justify-center pt-7'>
                    <Link href="#contact">
                      <button className={`${tinos.className} border-2 text-blue-500 border-blue-600 text-lg px-3 font-bold hover:scale-105`}>REDES SOCIALES</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='bg-white flex flex-col border border-gray-200 px-5 py-12'>
                <div>
                  <Image
                    src='/estrategia.webp'
                    alt='Estrategia'
                    width={220}
                    height={215}
                    className='rounded-[10rem]'
                  />
                  <div className='flex items-center justify-center pt-7'>
                    <Link href="#contact">
                      <button className={`${tinos.className} border-2 text-blue-500 border-blue-600 text-lg px-3 font-bold hover:scale-105`}>ESTRATEGIA DIGITAL</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='bg-white flex flex-col border border-gray-200 px-5 py-12'>
                <div>
                  <Image
                    src='/publicida.webp'
                    alt='Publicidad'
                    width={220}
                    height={215}
                    className='rounded-[10rem]'
                  />
                  <div className='flex items-center justify-center pt-7'>
                    <Link href="#contact">
                      <button className={`${tinos.className} border-2 text-blue-500 border-blue-600 text-lg px-3 font-bold hover:scale-105`}>PUBLICIDAD</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='bg-white flex flex-col border border-gray-200 px-5 py-12'>
                <div>
                  <Image
                    src='/UX.webp'
                    alt='Diseño UX/UI'
                    width={220}
                    height={215}
                    className='rounded-[10rem]'
                  />
                  <div className='flex items-center justify-center pt-7'>
                    <Link href="#contact">
                      <button className={`${tinos.className} border-2 text-blue-500 border-blue-600 text-lg px-3 font-bold hover:scale-105`}>DISEÑO UX/UI</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
                </div>
                </section>
            <InstagramFeed></InstagramFeed>
        </section>
        
    )
}