/* eslint-disable @next/next/no-img-element */
import Quality from "./Quality";
import { tinos } from '../app/fonts'

function Qualities() {
  return (
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
            <Quality number="01." title="Creatividad ante todo."/>
            <Quality number="02." title="Inigualablemente auténticas."/>
            <Quality number="03." title="Responsabilidad al tope."/>
            <Quality number="04." title="Experiencia favorable."/>
            <Quality number="05." title="Hacen de tu marca memorable."/>
              </div>
              </div>
            </div>
        </div>
 </section>
  );
}

export default Qualities;