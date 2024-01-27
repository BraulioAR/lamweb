'use client'
import { tinos } from '../../fonts'
import  InstagramFeed  from '../../../components/InstagramFeed'
import Image from 'next/image'

export default function Page() {
    return (
        <section className=' h-auto bg-white pt-12 mx-auto max-w-screen-3xl w-11/12 animate-fade-left animate-duration-[1500ms]'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8'>
          <div className='flex flex-row justify-between gap-2'>
          <div className='flex-row flex gap-4'>
            <a href="/portafolio">
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
    <title/>
    <g data-name="Layer 2" id="Layer_2">
      <path d="M31,16A15,15,0,1,1,16,1,15,15,0,0,1,31,16ZM3,16A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z"/>
      <path d="M19.87,10.41,14.29,16l5.58,5.59a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L12.1,16.64a.91.91,0,0,1,0-1.28L18.46,9a1,1,0,0,1,1.41,0h0A1,1,0,0,1,19.87,10.41Z"/>
    </g>
  </svg>
</a>
              <h1 className={`${tinos.className} text-5xl`}>Fotografía</h1>
              </div></div>
                <h2 className={`${tinos.className} text-xl`}>Utilizamos una variedad de técnicas y estilos fotográficos para crear imágenes que <br />sean atractivas y relevantes para nuestro público objetivo. Nos centramos en la <br /> calidad de la imagen, así como en la composición y el mensaje que queremos <br />  transmitir.</h2>
            </div>
            <div className='pt-12'>
                 <Image src='/fotografia-portfolio.webp'
                    alt='Fotografia'
                    width={1370}
                    height={1365}
                    className='object-cover' />
            </div>
            <div className='grid grid-rows-8 grid-cols-2 h-full lg:h-[400vh] py-12'>
                <div className="row-span-1 relative overflow-hidden ">
              <figure className="effect-layla">
                <Image src='/fotografia1.webp'
                    alt='Fotografia 1'
                    width={2000}
                    height={2000}
                            className='w-full h-full object-cover' />   
              </figure>
                </div>
                <div className="lg:row-span-2 row-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/fotografia2.webp'
                    alt='Fotografia 2'
                    width={2150}
                    height={3225}
                            className='w-full h-full object-cover'/>   
              </figure>
                </div>
                <div className="row-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/fotografia3.webp'
                    alt='Fotografia 3'
                    width={2150}
                    height={3225}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="row-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/fotografia4.webp'
                    alt='Fotografia 4'
                    width={2150}
                    height={1433}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="lg:row-span-2 row-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/fotografia5.webp'
                    alt='Fotografia 5'
                    width={2150}
                    height={3225}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="lg:row-span-2 row-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/fotografia6.webp'
                    alt='Fotografia 6 '
                    width={2150}
                    height={3225}
                            className='object-cover  '/>   
              </figure>
                </div>
                <div className="lg:row-span-2 row-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/fotografia7.webp'
                    alt='Fotografia 7'
                    width={2150}
                    height={3225}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="lg:row-span-3 row-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/fotografia8.webp'
                    alt='Fotografia 8'
                    width={1687}
                    height={2999}
                            className='object-cover' />   
              </figure>
                </div>
            </div>
               <section id='instagramfeed' className='flex justify-center'>
        <InstagramFeed></InstagramFeed>
      </section>
        </section>
    )
}