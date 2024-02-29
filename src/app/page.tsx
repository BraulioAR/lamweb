/* eslint-disable @next/next/no-sync-scripts */
'use client'
import Image from 'next/image'
import { tinos } from './fonts'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import InstagramFeed from '../components/InstagramFeed';


export default function Page({ }) {
 const [posts, setPosts] = useState([]);
useEffect(() => {
    document.querySelectorAll('[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href") as string;

        if (targetId && targetId.startsWith("#")) {
          const target = document.querySelector(targetId);

          if (target) {
            const headerHeight = 0;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollBy({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      });
    });
  }, []);
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio >= 0) {
        setIsVisible(true);
      }
    }, {
      root: document.querySelector('#team'),
      threshold: 0,
    });

    const element = document.querySelector('.animate-fade-left'); // Use optional chaining
    if (element) {
      observer.observe(element); // Observe the element only if it exists
    }

    return () => observer.disconnect();
  }, []);

  return (

    <main>
      <section id='home' className="flex flex-row h-[80vh] w-full">
        <video className='absolute top-30 left-0 w-full h-full object-cover z-0' autoPlay muted loop playsInline>
          <source src='/file1.mp4' type='video/mp4'></source>
        </video>
        <div className='mx-auto max-w-7xl w-11/12 z-10'>
          <div className=' animate-fade animate-duration-[1500ms] flex justify-center items-center w-full h-full '>
            <Image
              className='hover:scale-95 transition-transform'
              src='/aaaa.webp'
              alt='logo'
              width={794}
              height={468}
              
            />
          </div>
        </div>
      </section>
      <section className="relative flex justify-center h-[80vh]">
        <video className='absolute top-0 left-0 w-full h-full object-cover z-0' autoPlay muted loop playsInline>
          <source src='/file.mp4' type='video/mp4'></source>
        </video>
        <div className='mx-auto max-w-7xl z-10 flex items-center justify-center'>
          <div className="w-[50%] h-[72%] flex items-center justify-center">
            
              <h1 className={`${tinos.className}  text-white text-3xl lg:text-[2.75rem] leading-normal`}>
                &#34;Deja que las redes sociales hablen de ti. <span className={`${tinos.className} text-white bg-black text-3xl lg:text-[3rem]`}>Nosotros</span> les daremos algo que <span className={`${tinos.className}  text-white bg-black text-4xl lg:text-[3rem]`}>decir</span>.&#34;
              </h1>
            
          </div>
        </div>
      </section>
      <section id='team' className='flex w-full flex-col h-full lg:p-12 bg-black bg-cover '>
        <div className='mx-auto max-w-7xl w-11/12'>
          <div className={`py-4 lg:py-12 flex flex-col h-auto mx-4 animate-duration-[1500ms] ${isVisible ? 'animate-fade-left' : ''}`}>
            <h1 className={`${tinos.className}  text-center text-white text-6xl lg:text-[3.75rem]`}>
              Conoce al #TEAMLAM
            </h1>
            <h3 className={`${tinos.className} text-center text-white text-4xl mt-8 lg:text-[1.25rem]`}>Solo somos un grupo de gente creativa, ¡fundiendo cada día!</h3>
          </div>
          <div className='flex items-center justify-center max-w-7xl mx-4'>
          <div className='flex flex-col lg:flex-row lg:gap-8 gap-12 mx-4 items-center justify-center lg:pb-8 lg:w-full w-10/12'>
            <div className='hover:shadow-custom flex flex-col bg-indigo-200 h-auto lg:h-auto pb-4 w-[42vh] lg:w-full gap-[2vh] rounded-3xl hover:scale-105 transition-transform overflow-hidden'>
              <div>
                <Image alt='Jenny TM1'
                  src='/Jenny.webp'
                  width={403}
                  height={329}
                />
              </div>
              <div className='flex flex-col px-8'>

                <div>
                <h2 className={`${tinos.className} font-bold text-black text-[1.5rem]`}>Jenny Sánchez</h2>

                <h3 className={`${tinos.className} text-black text-[1rem] mt-[-0.5rem]`}>Lic. Comunicación Social. Experta en redes sociales.</h3>
                </div>
                <div className='mt-9 '>
                  <h3 className={`${tinos.className} text-black text-[1rem] leading-6`}>¡Hola!, Soy Jenny Sánchez, me encargo de crear todo un mundo digital, dónde brindo mis conocimientos de  medios digitales y tradicionales, ya que mi pasión es comunicar de manera que las marcas sean recordadas.<br/><br/><br/>¡Ya es hora de expandir tu negocio a nuevos horizontes!</h3>
                </div>
              </div>
              <div className='flex flex-row gap-[2vh] ml-7 mt-3'>
                <a
                  href="https://www.instagram.com/lightsandmedialam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/lightsandmedialam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/lightsandmedialam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                </a>
              </div>
            </div>
            <div className='hover:shadow-custom flex flex-col bg-indigo-200 pb-4 lg:h-auto w-[42vh] lg:w-full gap-[2vh] rounded-3xl hover:scale-105 transition-transform overflow-hidden'>
              <div>
                <Image alt='Gabriella TM1'
                  src='/Gabriella.webp'
                  width={403}
                  height={329}
                   />
              </div>
              <div className='flex flex-col px-8'>
                <div>
                <h2 className={`${tinos.className} font-bold text-black text-[1.5rem]`}>Gabriella Soriano</h2>
                <h3 className={`${tinos.className} text-black text-[1rem]  mt-[-0.5rem]`}>Lic. Comunicación Digital. Diseñadora gráfica y página web.</h3>
                </div>
                <div className='mt-7'>
                <h3 className={`${tinos.className} text-black text-[1rem]`}>¡Me encanta crear! de hecho, tal vez sea una de las personas más creativas que conocerás.
                  <br /><br/> Mi idea del arte es poder transformar tu inspiración a la realidad, claramente poniéndole el toque LAM.
                  <br /><br />Espero que podamos trabajar en conjunto, de forma que las personas te reconozcan como una marca ejemplar, con un toque creativo.</h3>
                </div>
              </div>
              <div className='flex flex-row gap-[2vh] ml-7 mt-4'>
                <a
                  href="https://www.instagram.com/lightsandmedialam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/lightsandmedialam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/lightsandmedialam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                </a>
              </div>
            </div>
            <div className='hover:shadow-custom flex flex-col bg-indigo-200 mb-12 pb-4 lg:mb-0  lg:h-auto w-[42vh] lg:w-full gap-[2vh] rounded-xl transform hover:scale-105 transition-transform overflow-hidden relative z-10'>
              <div>
                <Image alt='Shade'
                  src='/Shade.webp'
                  width={403}
                  height={329}
                 
                  />
              </div>
              <div className='flex flex-col px-8'>
                <div>
                <h2 className={`${tinos.className} font-bold text-black bottom-1 text-[1.5rem] `}>Shade González</h2>

                  <h3 className={`${tinos.className} text-black text-[1rem] mt-[-0.5rem]`}>Lic. Comunicación Digital y Fotografía.<br/>Creadora de multimedia.</h3>
                </div>
                <div className='mt-6'>
                  <h3 className={`${tinos.className} text-black text-[1rem]`}>¿Sabías que la palabra &#34;fotografía&#34; significa &#34;dibujar con luz&#34;?, pues te cuento que ¡de eso practicamente se trata mi trabajo!
                    <br /><br/>Un placer conocerte, espero que estés aquí para planear tu próximo paso de éxito, y sobre todo, como fotógrafa y filmmaker, ayudarte a plasmar lo más autentico de tu marca.
                    <br /><br/>¿Listo para empezar?</h3>
                </div>
              </div>
              <div className='flex flex-row gap-[2vh] ml-7 mt-2'>

                <a
                  href="https://www.instagram.com/lightsandmedialam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/lightsandmedialam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/lightsandmedialam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                </a>
             
              </div>
              
            </div>
            
            </div>
            </div>
        </div>
      </section>
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
      <section id='inspiracion' className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-white h-full'>
          <div className='flex justify-center items-center py-12 mx-auto'>
            <h1 className={`${tinos.className} text-center text-black text-5xl lg:text-[5rem]`}>Por si necesitas <br/>inspiración para tu <br/> contenido...</h1>
          </div>
  
          <div className="grid lg:grid-cols-3 grid-cols-1 h-[275vh] w-full pl-5 lg:px-5">
            
       <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-insp"></div>   
                <figcaption>
						</figcaption>	
              </figure>
              </div>
              
       <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-insp2"></div>   
                <figcaption>
						</figcaption>	
              </figure>
              </div>
       <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-insp3"></div>   
                <figcaption>
						</figcaption>	
              </figure>
              </div>

       <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-insp4"></div>   
                <figcaption>
						</figcaption>	
              </figure>
              </div>
       <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-insp5"></div>   
                <figcaption>
						</figcaption>	
              </figure>
              </div>

     
       <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-insp6"></div>   
                <figcaption>
						</figcaption>	
              </figure>
              </div>
       <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-insp7"></div>   
                <figcaption>
						</figcaption>	
              </figure>
              </div>
      <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-insp8"></div>   
                <figcaption>
						</figcaption>	
              </figure>
              </div>
    <div className="col-span-1 relative overflow-hidden  ">
              <figure className="effect-layla">
                <div className="absolute inset-0 bg-cover bg-center bg-insp9"></div>   
                <figcaption>
						</figcaption>	
              </figure>
              </div>
          </div>
         
      </section>
    
      <section id='cualidades' className='bg-black pb-48 w-full'>
        <div className='pt-12 pb-20 mx-20'>
          <div className='flex justify-start items-start '>
            <h1 className={`${tinos.className} text-start text-white text-5xl lg:text-[3.5rem]`}>Cualidades según nuestros clientes</h1>
            </div>
            </div>
        <div className=' mx-auto max-w-6xl w-11/12'>
          <div className='flex flex-col gap-24 justify-center w-full items-center'>
            <div>
          <div className='flex flex-col lg:flex-row justify-between gap-28'>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-indigo-100 text-[3rem]`}>01.</h1>
              <h3 className={`${tinos.className} text-white text-[1.25rem]`}>Creatividad ante todo.</h3>
              <div className="h-[3px] w-full bg-white mt-6"></div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-indigo-100 text-[3rem]`}>02.</h1>
              <h3 className={`${tinos.className} text-white text-[1.25rem]`}>Inigualablemente autenticas.</h3>
              <div className="h-[3px] w-full bg-white mt-6"></div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-indigo-100 text-[3rem]`}>03.</h1>
              <h3 className={`${tinos.className} text-white text-[1.25rem]`}>Responsabilidad al tope.</h3>
              <div className="h-[3px] w-full bg-white mt-6"></div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-indigo-100 text-[3rem]`}>04.</h1>
              <h3 className={`${tinos.className} text-white text-[1.25rem]`}>Experiencia favorable.</h3>
              <div className="h-[3px] w-full bg-white mt-6"></div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-indigo-100 text-[3rem]`}>05.</h1>
              <h3 className={`${tinos.className} text-white text-[1.25rem]`}>Hacen de tu marca memorable.</h3>
              <div className="h-[3px] w-full bg-white mt-6"></div>
            </div>
              </div>
              </div>
            </div>
        </div>
      </section>
     
      <section id='instagramfeed' className='flex justify-center mx-4'>
        <InstagramFeed></InstagramFeed>
      </section>
      
      <section id='contact' className='bg-gradient-to-b from-white via-gray-200 to-gray-300 h-auto lg:h-[70vh]'>
        <div className='mx-auto max-w-7xl w-11/12 '>
          <div className='flex flex-col h-full gap-12'>
            <div className='flex content-center justify-center mt-12 lg:mt-[10vh]'>
              <h1 className={`${tinos.className} text-center text-[3.5rem] text-green-950`}>Ponte en contacto</h1>
            </div>
            <div className='flex flex-col items-center lg:mt-8 gap-[2.5rem]'>
              <form name="contactus" action='/contactus' method='POST' data-netlify="true">
                <input required type='hidden' name='form-name' value='contactus' />
                <div className="flex flex-row gap-[1.25rem]">
                  <div>
                    <label>
                      Nombre<br /><input
                        required
                        type="text"
                        name="name"
                        className="border rounded-[0.5rem] pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] w-full focus:outline-none focus:shadow-sm focus:transition-border-03s focus:transition-shadow-03s"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Email<br /><input
                        required
                        type="email"
                        name="email"
                        className="border rounded-[0.5rem] pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] w-full focus:outline-none focus:shadow-sm focus:transition-border-03s focus:transition-shadow-03s"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label>
                    Mensaje<br />
                    <textarea required
                      name="message"
                      className="border rounded-[0.5rem] pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] w-full focus:outline-none focus:shadow-sm focus:transition-border-03s focus:transition-shadow-03s"
                    ></textarea>
                  </label>
                </div>
                <div className=" flex justify-end px-[2rem] py-[1rem] items-end">
                  <button
                    className="border px-[2rem] py-[0.5rem] bg-black text-white hover:text-black hover:bg-white transition-color-03s"
                    type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
     
    </main>

    
  )

}




