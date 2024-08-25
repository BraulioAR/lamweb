'use client'

import { tinos } from '../fonts';
import  InstagramFeed from '../../components/InstagramFeed'

export default function Page() {
    return (
        <section className='w-full h-auto bg-white animate-fade animate-duration-[1500ms] pt-12'>
            <div className='mx-auto w-11/12'>
            <div className='flex flex-col gap-4 items-center justify-center '>
                <h1 className={`${tinos.className} font-bold text-7xl text-center`}>Parte de nuestros<br />trabajos</h1>
                <h2 className={`${tinos.className} text-xl text-center`}>Te presentamos algunos de nuestros proyectos auténticos. Explora más sobre <br />nosotros y lleva tu marca to the next level!</h2>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 h-[215vh] pt-12'>
                 <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla ">
                <div className="absolute inset-0 bg-cover bg-center bg-insp9
                "></div>   
                        <figcaption className='flex justify-center items-center'>
                            <p className={`${tinos.className} text-black  font-bold text-2xl lg:text-4xl text-center`}>Fresh and Free</p>
                    <a href="/portafolio/freshandfree" target="_self" rel="noopener noreferrer"></a>
						</figcaption>	
              </figure>
                </div>
                 <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-maggie-portfolio"></div>   
                        <figcaption className='flex justify-center items-center'>
                             <p className={`${tinos.className} text-black  font-bold text-2xl lg:text-4xl text-center`}>Maggie Uceta</p>
                    <a href="/portafolio/maggie" target="_self" rel="noopener noreferrer"></a>
						</figcaption>	
              </figure>
                </div>
                
                 <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-fotografia-portfolio"></div>   
                        <figcaption className='flex justify-center items-center'>
                             <p className={`${tinos.className} text-black  font-bold text-2xl lg:text-4xl text-center`}>Fotografía</p>
                    <a href="/portafolio/fotografia" target="_self" rel="noopener noreferrer"></a>
						</figcaption>	
              </figure>
                </div>
                 <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-fraganciaspena-portfolio"></div>   
                        <figcaption className='flex justify-center items-center'>
                             <p className={`${tinos.className} text-black  font-bold text-2xl lg:text-4xl text-center`}>Optic Fragancias Peña</p>
                    <a href="/portafolio/fraganciaspena" target="_self" rel="noopener noreferrer"></a>
						</figcaption>	
              </figure>
                </div>
                
                 <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-symmetryc-portfolio"></div>   
                        <figcaption className='flex justify-center items-center'>
                             <p className={`${tinos.className} text-black  font-bold text-2xl lg:text-4xl text-center`}>Symmetryc</p>
                    <a href="/portafolio/symmetryc" target="_self" rel="noopener noreferrer"></a>
						</figcaption>	
              </figure>
                </div>
                 <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-boho-portfolio"></div>   
                        <figcaption className='flex justify-center items-center'>
                             <p className={`${tinos.className} text-black  font-bold text-4xl text-center`}>Boho Decor</p>
                    <a href="/portafolio/bohodecor" target="_self" rel="noopener noreferrer"></a>
						</figcaption>	
              </figure>
                </div>
                 <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-estevez-portfolio"></div>   
                        <figcaption className='flex justify-center items-center'>
                             <p className={`${tinos.className} text-black font-bold text-4xl text-center`}>Doctor Estevez</p>
                    <a href="/portafolio/doctorestevez" target="_self" rel="noopener noreferrer"></a>
						</figcaption>	
              </figure>
              </div>
            </div>
          {/*  <section id='instagramfeed' className='flex justify-center'>
        <InstagramFeed></InstagramFeed>
                </section>*/}
                </div>
        </section>
    )
}