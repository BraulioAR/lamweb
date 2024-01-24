import Image from 'next/image'
import { tinos } from '../fonts'


export default function Page() {
    return (
        <section className='w-full h-full items-center bg-gradient-to-b from-white via-gray-200 to-gray-300 '>
            <div className="grid lg:grid-cols-6 lg:grid-rows-8 lg:max-w-[1920px] ">
     
    <div className="col-span-4">
        <Image
                            src='/img-about.webp'
                            alt='Acerca de'
                            width={1200}
                        height={1061}
                        className='w-full h-auto'
                        ></Image>
      </div>
    <div className="bg-black flex col-span-2 items-center justify-center w-screen lg:w-full">
        
                    <div className='flex flex-col items-center lg:mx-20 gap-y-16'>
                       
                            <h1 className={`${tinos.className} text-indigo-300 pt-8 lg:pt-0 ml-2 lg:ml-0 text-2xl lg:text-[2.5rem] text-start leading-tight font-extrabold drop-shadow-2xl shadow-indigo-300`}>
                                SI TIENES <br />DUDAS, TE<br />CONTAMOS...</h1>
                         
                        <h2 className={`${tinos.className} text-white text-xl lg:text-[1.25rem] text-center px-4`}>Luego de una larga experiencia laboral en los <span className={`${tinos.className} text-white text-xl lg:text-[1.25rem] font-bold`}>medios digitales, audiovisual, publicidad y diseño gráfico</span>, decidimos emprender un camino donde combinaríamos toda nuestra creatividad <span className={`${tinos.className} text-white text-2xl lg:text-[1.25rem] font-bold`}>para ayudar a otros.</span></h2>
                        <h2 className={`${tinos.className} text-white text-xl lg:text-[1.25rem] text-center px-4`}>Con este proyecto buscamos promover el trabajo con <span className={`${tinos.className} text-white text-xl lg:text-[1.25rem] font-bold`}>pasión</span>, destacando la <span className={`${tinos.className} text-white text-xl lg:text-[1.25rem] font-bold`}>autenticidad</span> de cada marca y plasmarlas en la mente de los demás, de forma en que sean <span className={`${tinos.className} text-white text-xl lg:text-[1.25rem] font-bold`}>recordadas.</span></h2>
                        <h2 className={`${tinos.className} text-white text-xl lg:text-[1.25rem] text-center px-4`}>3 chicas con grandes metas, donde nuestro primer objetivo ¡es ayudarte!</h2>
                        <h2 className={`${tinos.className} text-white text-xl lg:text-[1.25rem] text-center px-4 font-extrabold`}>#TEAMLAM</h2>
                        <h2 className={`${tinos.className} bg-white bg-cover text-black text-xl lg:text-[1.25rem] text-center font-bold px-4`}>¿,Listo para empezar tu nueva travesía digital?</h2>
                        </div>
                   
      </div>
                <div className="bg-black p-12 col-span-3 row-span-3 items-center justify-center flex">
                   
        <h1 className={`${tinos.className}  text-white text-2xl lg:text-[4rem] text-start leading-tight`}>Shade <br /> González</h1>
                    </div>
                   
    <div className="bg-white p-12 col-span-3 row-span-3 items-center flex">
        <h2 className={`${tinos.className}  text-black text-xl lg:text-[1.25rem] text-start`}>Aquí les habla la chica que hará de sus ideas una <br></br>realidad... ¡Hola un placer!, mi nombre es Shade <br></br>González, soy Licenciada en Comunicación Digital y <br></br>Fotógrafa, poseo un Diplomado en Redes Sociales,  <br></br>Diseño Gráfico y  Administración de Empresas. <br></br><br></br>

Estudié fotografía profesional y actualmente lo ejerzo.<br></br> Tengo más de 5 años de experiencia en el <br></br>mundo digital, trabajando con grandes marcas y <br></br>poniendo mi grano de arena para hacerlas crecer.<br></br><br></br>

​

Ahoro gozo de trabajar en esta empresa junto a mis <br></br>socias, donde desempeño la función de fotógrafa y <br></br>filmmaker, ¡echándole ganas cada día para poder <br></br>ayudar a todas las marcas posibles!</h2>
      </div>

  
    
    <div className="bg-black lg:bg-white p-12 col-span-3 row-span-3 items-center justify-center flex py-12">
        <h1 className={`${tinos.className} text-white lg:text-black text-2xl lg:text-[4rem] text-start leading-tight`}>Gabriella <br /> Soriano</h1>
      </div>
    <div className="bg-white lg:bg-black p-12 col-span-3 row-span-3 items-start ">
        <h2 className={`${tinos.className}  text-black lg:text-white text-xl lg:text-[1.25rem] text-start`}>
Aló?, Hi there! Mi nombre es Gabriella Soriano, (casi)<br></br> Licenciada en Comunicación Digital, con un Diplomado <br></br>en Marketing Digital y Redes Sociales. ¡Qué el título no <br></br>te confunda!, en esta empresa me encargo de convertir <br></br>cada una de las ideas en arte, de la mano de la <br></br>creatividad visual. <br></br> <br></br>
Con más de dos años de experiencia en el área, me he <br></br>dado cuenta de que…¡Me gusta más estar detrás de la <br></br>pantalla!

Como Graphic & Web Designer, busco crear una <br></br>experiencia diferente, donde nuestras marcas obtengan <br></br>las soluciones que necesitan y queden satisfechas con <br></br>nuestro trabajo. ¡Un buen servicio es una excelente <br></br>tarjeta de presentación!</h2>
      </div>
    
    <div className="bg-black p-12 col-span-3 row-span-3 items-center justify-center flex">
        <h1 className={`${tinos.className}  text-white text-2xl lg:text-[4rem] text-start leading-tight `}>Jenny <br />Sánchez</h1>
      </div>
    <div className="bg-white p-12 col-span-3 row-span-3 items-start">
        <h2 className={`${tinos.className}  text-black text-xl lg:text-[1.25rem] text-start`}>¿Una palabra que me define? &quot;La creatividad&quot;, para <br></br>que conozcan un poco más de mi, me llamo Jenny <br></br>Sánchez, soy Licenciada en Comunicación Social, me <br></br>desempeño como Content Creator, Community <br></br>Manager y Asesora de medios Sociales.<br></br>
Estudié Teatro en la Escuela Nacional de Arte <br></br>Dramático, por lo que me he desempeñado en todas las áreas de creatividad.<br></br><br></br>
Tengo más de 3 años de experiencia trabajando para<br></br> los medios digitales.<br></br>
¿Artistas?, ¿Políticos?, ¿Figuras del medio?, he tenido <br></br>la oportunidad de trabajar con diferentes <br></br>personalidades, ayudando en proyección de su imagen. <br></br> Actualmente estoy feliz de trabajar en esta empresa <br></br>junto a mis socias dispuesta a llevar tu marca a otro <br></br>nivel.</h2>
      </div>
    </div>
        </section>
    )
}

