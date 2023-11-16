import Image from 'next/image'
import { tinos } from '../fonts'


export default function Page() {
    return (
        <section className='w-full h-full items-center bg-gradient-to-b from-white via-gray-200 to-gray-300'>
            <div className='grid grid-cols-3 justify-center mx-32 py-12'>
                <div className={`bg-black`}>
                    <div className='flex flex-col mx-28'>
                        <h1 className={`${tinos.className} pb-12 text-indigo-300 text-[2.5rem] text-center pt-12`}>SI TIENES MÁS CURIOSIDAD, TE CONTAMOS...</h1>
                        <h2 className={`${tinos.className} text-white text-[1.75rem] text-center px-4`}>Luego de una larga experiencia laboral en los <span className={`${tinos.className} text-indigo-300 text-[2.25rem]`}>medios digitales, audiovisual, publicidad y diseño gráfico</span>, decidimos emprender un camino donde combinaríamos toda nuestra creatividad <span className={`${tinos.className} text-indigo-300 text-[2.5rem]`}>para ayudar a otros.</span></h2>
                    </div>
                </div>
                <div>
                    <Image
                        src='/acercaDe.webp'
                        alt='Acerca de'
                        width={400}
                        height={906}
                        className='w-full h-auto'
                    ></Image>
                </div>
                <div className={`bg-black`}>
                    <div className='flex flex-col mx-32 jus'>
                        <h2 className={`${tinos.className} text-white text-[1.75rem] text-center px-8 pb-12 pt-12`}>Con este proyecto buscamos promover el trabajo con <span className={`${tinos.className} text-indigo-300 text-[2.25rem]`}>pasión</span>, destacando la <span className={`${tinos.className} text-indigo-300 text-[2.25rem]`}>responsabilidad</span> y autenticidad de cada marca y plasmarlas en la mente de los demás, de forma en que sean <span className={`${tinos.className} text-indigo-300 text-[2.25rem]`}>recordadas</span>.</h2>
                        <h2 className={`${tinos.className} text-white text-[1.75rem] text-center px-8 pb-12 pt-12`}>Listo para empezar tu nueva travesía digital?</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}