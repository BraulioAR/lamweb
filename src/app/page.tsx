'use client'
import Image from 'next/image'
import { tinos } from './fonts'
import Link from 'next/link'
import { Suspense, useEffect } from 'react';


export default function Page() {
  useEffect(() => {
    document.querySelectorAll('[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => { // Use an arrow function here
        e.preventDefault();
        const targetId = anchor.getAttribute("href") as string; // Use 'anchor' instead of 'this'

        if (targetId) {
          const target = document.querySelector(targetId);
          const headerHeight = 0;

          if (target) {
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

  return (

    <main>
      <section id='home' className="flex flex-row h-[80vh] w-full">
        <video className='absolute top-30 left-0 w-full h-full object-cover z-0' autoPlay muted loop>
          <source src='/file1.mp4' type='video/mp4'></source>
        </video>
        <div className='mx-auto max-w-7xl z-10'>
          <div className=' flex justify-center items-center w-full h-full '>
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
        <video className='absolute top-0 left-0 w-full h-full object-cover z-0' autoPlay muted loop>
          <source src='/file.mp4' type='video/mp4'></source>
        </video>
        <div className='mx-auto max-w-7xl z-10 flex items-center justify-center'>
          <div className=" bg-[url('/bg-title2.webp')] bg-center lg:w-[75%] lg:h-auto w-[80%] h-[72%] rounded-3xl">
            <div className='flex m-2 mx-auto p-2 justify-center lg:justify-baseline lg:m-[8vh] lg:pt-52 items-center '>
              <h1 className={`${tinos.className} italic text-white text-5xl lg:text-[3rem]`}>
                Deja que las redes sociales hablen de ti. <span className={`${tinos.className} text-white bg-black text-6xl lg:text-[3rem]`}>Nosotros</span> les daremos algo que <span className={`${tinos.className}  text-white bg-black text-6xl lg:text-[3rem]`}>decir</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id='team' className='flex w-screen flex-col h-full bg-white bg-cover'>
        <div className='mx-auto max-w-7xl'>
          <div className='py-4 lg:py-12 flex flex-col h-auto mx-4'>
            <h1 className={`${tinos.className} text-center text-black text-6xl lg:text-[5rem] border-b border-black border-opacity-20`}>
              Conoce al #TEAMLAM
            </h1>
            <h3 className={`${tinos.className} text-center text-black text-4xl lg:text-[3rem]`}>Solo somos un grupo de gente creativa, ¡fundiendo cada día!</h3>
          </div>
          <div className='flex flex-col lg:flex-row gap-8 mx-4 items-center lg:pb-8'>
            <div className='flex flex-col bg-indigo-200 h-auto lg:h-[65vh] pb-4 w-auto lg:w-[80vh] gap-[2vh] rounded-3xl hover:scale-105 transition-transform'>
              <div>
                <Image alt='Jenny TM1'
                  src='/Jenny.webp'
                  width={403}
                  height={329}
                  className='rounded-[1rem]' />
              </div>
              <div className='flex flex-col ml-6'>

                <h3 className={`${tinos.className} text-black text-[1rem]`}>Experta en redes sociales</h3>


                <h2 className={`${tinos.className} font-bold text-black text-[1.5rem] `}>Jenny Sánchez</h2>


                <h3 className={`${tinos.className} text-black text-[1rem] mt-3`}>Construyó los cimientos de nuestra trayectoria. Apasionada por la tecnología y comprometida con resultados excepcionales, Jenny fusiona su habilidad técnica con un enfoque orientado al cliente. ¡Descubre el mundo luminoso de Lights and Media con Jenny a la cabeza!</h3>

              </div>
              <div className='flex flex-row gap-[2vh] ml-7 '>
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
            <div className='flex flex-col bg-indigo-200 pb-4 w-auto lg:h-[65vh] lg:w-[80vh] gap-[2vh] rounded-3xl hover:scale-105 transition-transform'>
              <div>
                <Image alt='Gabriella TM1'
                  src='/Gabriella.webp'
                  width={403}
                  height={329}
                  className='rounded-[1rem]' />
              </div>
              <div className='flex flex-col  ml-6'>

                <h3 className={`${tinos.className} text-black text-[1rem]`}>Diseñadora gráfica y página web</h3>


                <h2 className={`${tinos.className} font-bold text-black text-[1.5rem] `}>Gabriella Soriano</h2>


                <h3 className={`${tinos.className} text-black text-[1rem] mt-2`}>Desde la creación de impactantes elementos gráficos hasta el diseño de páginas web envolventes, su habilidad artística y conocimiento técnico se unen para ofrecer proyectos visualmente impactantes y funcionalmente sólidos. ¡Explora el arte y la innovación con Gabriella Soriano!</h3>

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
                  <svg className='w-4 h-4 fill-black transition-fill-03s cursor-pointer hover:scale-105 hover:text-indigo-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                </a>
              </div>
            </div>
            <div className='flex flex-col bg-indigo-200 pb-4 w-auto lg:h-[65vh] lg:w-[80vh] gap-[2vh] rounded-3xl hover:scale-105 transition-transformhover:scale-105 transition-transform'>
              <div>
                <Image alt='Shade'
                  src='/Shade.webp'
                  width={403}
                  height={329}
                  className='rounded-[1rem]' />
              </div>
              <div className='flex flex-col ml-6'>

                <h3 className={`${tinos.className} text-black text-[1rem]`}>Creadora de multimedia</h3>


                <h2 className={`${tinos.className} font-bold text-black bottom-1 text-[1.5rem] `}>Shade González</h2>


                <h3 className={`${tinos.className} text-black text-[1rem] mt-2`}>Destaca por su habilidad para combinar arte y tecnología, creando experiencias visuales únicas. Su enfoque innovador da vida a proyectos cautivadores, desde diseño gráfico hasta elementos multimedia. Shade redefine la creatividad digital, invitándote a explorar un mundo visualmente impactante.</h3>

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
      </section>
      <section id='servicios' className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-white h-full lg:pb-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex justify-center items-center'>
            <h1 className={`${tinos.className} text-center text-black text-5xl lg:text-[5rem] pt-5 pb-5`}>Servicios para tu presencia digital</h1>
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
      <section id='Cualidades'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex justify-center items-center'>
            <h1 className={`${tinos.className} text-center text-black text-5xl lg:text-[5rem] py-5`}>Cualidades según nuestros clientes</h1>
          </div>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-green-950 text-[3rem]`}>01.</h1>
              <h3 className={`${tinos.className} text-black text-[1.25rem]`}>Creatividad ante todo.</h3>
              <div className="h-[3px] w-full bg-black mt-6"></div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-green-950 text-[3rem]`}>02.</h1>
              <h3 className={`${tinos.className} text-black text-[1.25rem]`}>Inigualablemente autenticas.</h3>
              <div className="h-[3px] w-full bg-black mt-6"></div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-green-950 text-[3rem]`}>03.</h1>
              <h3 className={`${tinos.className} text-black text-[1.25rem]`}>Responsabilidad al tope.</h3>
              <div className="h-[3px] w-full bg-black mt-6"></div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-green-950 text-[3rem]`}>04.</h1>
              <h3 className={`${tinos.className} text-black text-[1.25rem]`}>Experiencia favorable.</h3>
              <div className="h-[3px] w-full bg-black mt-6"></div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
              <h1 className={`${tinos.className} text-green-950 text-[3rem]`}>05.</h1>
              <h3 className={`${tinos.className} text-black text-[1.25rem]`}>Hacen de tu marca memorable.</h3>
              <div className="h-[3px] w-full bg-black mt-6"></div>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='bg-gradient-to-b from-white via-gray-200 to-gray-300 h-auto lg:h-[70vh]'>
        <div className='mx-auto max-w-7xl '>
          <div className='flex flex-col h-full gap-12'>
            <div className='flex content-center justify-center mt-12 lg:mt-[10vh]'>
              <h1 className={`${tinos.className} text-center text-[5rem] text-black`}>Vamo&apos; a eto!</h1>
            </div>
            <div className='flex flex-col items-center lg:mt-[10vh] gap-[2.5rem]'>
              <form name="contactus" action='/contactus' method='post'>
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
