'use client'
import { tinos } from '../../fonts'
import  InstagramFeed  from '../../../components/InstagramFeed'
import Image from 'next/image'

export default function Page() {
    return (
        <section className=' h-auto bg-white pt-12 mx-auto w-11/12 animate-fade-left animate-duration-[1500ms]'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8'>
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
            <h1 className={`${tinos.className} text-5xl`}>Symmetryc</h1>
            </div>
                <h2 className={`${tinos.className} text-xl`}>Si se busca relajación y belleza en una sola palabra, claramente sería <br /> Symmetryc, una estética y spa, donde lo hermoso de cada persona <br /> reluce y la calma sale a flote. <br /> <br />

Aquí te dejamos un poco más sobre esta maravillosa marca.</h2>
            </div>
            <div className='pt-12'>
                <Image src='/symmetryc-portfolio.webp'
                    alt='Symmetryc'
                    width={1073}
                    height={858}
                    className='w-full h-[80vh] object-cover' />
            </div>
            <div className='grid grid-rows-12 grid-cols-2 h-full  py-12'>
                <div className="lg:row-span-4 row-span-2 relative overflow-hidden ">
              <figure className="effect-layla">
              <video loop autoPlay playsInline muted className='object-cover'>
                <source src='/symmetryc1.mp4' type="video/mp4" />
              </video>
              </figure>
                </div>
                <div className="row-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/symmetryc2.webp'
                    alt='Symmetryc 2'
                    width={1277}
                    height={949}
                            className='object-cover'/>   
              </figure>
                </div>
                <div className="row-span-3 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/symmetryc3.webp'
                    alt='Symmetryc 3'
                    width={1024}
                    height={1024}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="lg:row-span-2 row-span-1  relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/symmetryc4.webp'
                    alt='Symmetryc 4'
                    width={1218}
                    height={719}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="row-span-4 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/symmetryc5.webp'
                    alt='Symmetryc 5'
                    width={1277}
                    height={949}
                            className='object-cover' />   
              </figure>
                </div>
                <div className="lg:row-span-4 row-span-2 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/symmetryc6.webp'
                    alt='Symmetryc 6 '
                    width={1280}
                    height={1280}
                            className='object-cover  '/>   
              </figure>
                </div>
                <div className="row-span-3 relative overflow-hidden  ">
              <figure className="effect-layla">
                <Image src='/symmetryc7.webp'
                    alt='Symmetryc 7'
                    width={1280}
                    height={1280}
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