/* eslint-disable @next/next/no-img-element */
import { tinos } from '../app/fonts'
import Link from 'next/link'
import Service from './Service';
function Services() {
  return (
     <section id='servicios' className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-white h-full pb-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex justify-center items-center py-8'>
            <h1 className={`${tinos.className} text-center text-blue-300 text-3xl lg:text-[3.25rem] pt-5 pb-5`}>Descubre los servicios que ofrecemos</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col lg:flex-row justify-between gap-4 pb-4'>
              <Service img="/fotografia.webp" alt="Fotografía" buttonText="FOTOGRAFÍA"/>
              <Service img="/videografia.webp" alt="Videografía" buttonText="VIDEOGRAFÍA"/>
              <Service img="/disenografico.webp" alt="Diseno Grafico" buttonText="DISEÑO GRÁFICO"/>
              <Service img="/paginaweb.webp" alt="Pagina Web" buttonText="PÁGINA WEB"/>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-4'>
              <Service img="/redes.webp" alt="Redes" buttonText="REDES SOCIALES"/>
              <Service img="/estrategia.webp" alt="Estrategia Digital" buttonText="ESTRATEGIA DIGITAL"/>
              <Service img="/publicida.webp" alt="Publicidad" buttonText="PUBLICIDAD"/>
              <Service img="/UX.webp" alt="Diseño UX/UI" buttonText="DISEÑO UX/UI"/>
            </div>
          </div>
        </div>
 </section>
  );
}

export default Services;