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
              <h1 className={`${tinos.className} text-5xl`}>Optic Fragancias Peña</h1>
            </div>
            </div>
                <h2 className={`${tinos.className} text-xl`}>Esta optica con muchos años de experiencia en el mercado, se <br />caracteriza por sus lentes resistentes y el aroma de sus perfumes <br /> originales, aquí te dejamos cómo manejamos su presencia digital</h2>
            </div>
            <div className='pt-12 lg:px-40 mx-2'>
                 <Image src='/fraganciaspena-portfolio.webp'
                    alt='Optic Fragancias Peña'
                    width={1370}
                    height={1365}
                    className='w-full lg:h-[80vh] object-scale-down lg:object-cover' />
            </div>
            <div className='grid grid-rows-12 grid-cols-2 h-full py-12'>
                <div className="row-span-7 relative overflow-hidden ">
               <figure className="effect-layla">
              <video loop autoPlay playsInline muted className='object-cover'>
                <source src='/optic1.mp4' type="video/mp4" />
              </video>
              </figure>
                </div>
                <div className="lg:row-span-1 row-span-7 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/optic2.webp'
                    alt='Optic Fragancias Peña 2'
                    width={2150}
                    height={3225}
                            className='object-cover'/>   
              </figure>
                </div>
                <div className="row-span-6 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/optic3.webp'
                    alt='Optic Fragancias Peña 3'
                    width={2150}
                    height={3225}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="lg:row-span-7 row-span-3 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/optic4.webp'
                    alt='Optic Fragancias Peña 4'
                    width={2150}
                    height={1433}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="row-span-5 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/optic5.webp'
                    alt='Optic Fragancias Peña 5'
                    width={2150}
                    height={3225}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="row-span-5 relative overflow-hidden  ">
              <figure className="effect-layla">
              <video loop autoPlay playsInline muted className='object-cover'>
                <source src='/optic6.mp4' type="video/mp4" />
              </video>
              </figure>
                </div>
 
            </div>
               <section id='instagramfeed' className='flex justify-center'>
        
      </section>
        </section>
    )
}