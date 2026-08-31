/* eslint-disable @next/next/no-img-element */
import { tinos } from '../app/fonts'
import Link from 'next/link'
import Service from './Service';
function Services() {
  return (
     <section id='servicios' className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-white h-full pb-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex justify-center items-center py-8'>
            <h2 className={`${tinos.className} text-center text-blue-500 text-3xl lg:text-[2.75rem] pt-5 pb-5`}>Servicios de marketing digital</h2>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col lg:flex-row justify-between gap-4 pb-4'>
              <Service img="/redes.webp" alt="Servicio de manejo de redes sociales" buttonText="Manejo de redes sociales"/>
              <Service img="/Publicida.webp" alt="Servicio de publicidad digital" buttonText="Publicidad digital"/>
              <Service img="/disenografico.webp" alt="Servicio de diseño gráfico" buttonText="Diseño gráfico"/>
              <Service img="/estrategia.webp" alt="Servicio de producción audiovisual" buttonText="Producción audiovisual"/>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-4'>
              <Service img="/paginaweb.webp" alt="Servicio de desarrollo web" buttonText="Desarrollo web"/>
              <Service img="/fotografia.webp" alt="Servicio de fotografía profesional" buttonText="Fotografía"/>
              <Service img="/videografia.webp" alt="Servicio de videografía y filmmaker" buttonText="Videografía / Filmmaker"/>
              <Service img="/UX.webp" alt="Servicio de posicionamiento web" buttonText="Posicionamiento web"/>
            </div>
          </div>
        </div>
 </section>
  );
}

export default Services;
