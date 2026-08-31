/* eslint-disable @next/next/no-img-element */
import { tinos } from '../app/fonts'
import TeamMember from '../components/TeamMember'

function Team({isVisible}) {
  return (
     <section id='team' className='flex w-full flex-col h-full lg:p-12 bg-black bg-cover '>
        <div className='mx-auto max-w-7xl w-11/12'>
          <div className={`py-4 lg:py-12 flex flex-col h-auto mx-4 animate-duration-[1500ms] ${isVisible ? 'animate-fade-left' : ''}`}>
            <h2 className={`${tinos.className} text-center text-white text-4xl lg:text-[3rem]`}>
              Profesionales del Social Media
            </h2>
            <p className={`${tinos.className} text-center text-white text-2xl mt-8 lg:text-[1.25rem]`}>Conoce al #TEAMLAM, grupo de gente creativa ¡fundiendo cada día!</p>
          </div>
          <div className='flex items-center justify-center max-w-7xl mx-4'>
          <div className='flex flex-col lg:flex-row lg:gap-8 gap-12 mx-4 items-center justify-center lg:pb-8 lg:w-full w-10/12'>
                      <TeamMember img="/Jenny.webp" alt="Jenny Sánchez, community manager de Lights & Media" name="Jenny Sánchez" desc="Lic. en Comunicación Social. Community Manager y experta en manejo de redes sociales.">
                          ¡Hola! Soy Jenny Sánchez, me encargo de la gestión de redes sociales y estrategia digital de nuestros clientes, combinando medios digitales y tradicionales para que cada marca sea recordada.<br /><br />¡Ya es hora de expandir tu negocio a nuevos horizontes!
                         </TeamMember>
                      <TeamMember img="/Shade.webp" alt="Shade González, fotógrafa y productora audiovisual de Lights & Media" name="Shade González" desc="Lic. en Comunicación Digital y Fotografía. Producción audiovisual y multimedia.">
                        ¿Sabías que “fotografía” significa “dibujar con luz”? De eso trata mi trabajo: fotografía profesional y producción audiovisual para plasmar lo más auténtico de tu marca.<br /><br/>¿Listo para empezar?
                      </TeamMember>
            </div>
            </div>
        </div>
 </section>
  );
}

export default Team;
