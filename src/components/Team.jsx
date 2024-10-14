/* eslint-disable @next/next/no-img-element */
import { tinos } from '../app/fonts'
import TeamMember from '../components/TeamMember'

function Team({isVisible}) {
  return (
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
                      <TeamMember img="/Jenny.webp" alt="Team member Jenny Sánchez" name="Jenny Sánchez" desc="Lic. Comunicación Social. Experta en redes sociales.">
                          ¡Hola!, Soy Jenny Sánchez, me encargo de crear todo un mundo digital, dónde brindo mis conocimientos de  medios digitales y tradicionales, ya que mi pasión es comunicar de manera que las marcas sean recordadas.<br /><br /><br />¡Ya es hora de expandir tu negocio a nuevos horizontes!
                         </TeamMember>
                      <TeamMember img="/Shade.webp" alt="Team member Shade González" name="Shade González" desc="Lic. Comunicación Digital y Fotografía. Creadora de multimedia.">
                        ¿Sabías que la palabra &#34;fotografía&#34; significa &#34;dibujar con luz&#34;?, pues te cuento que ¡de eso practicamente se trata mi trabajo!
                    <br /><br/>Un placer conocerte, espero que estés aquí para planear tu próximo paso de éxito, y sobre todo, como fotógrafa y filmmaker, ayudarte a plasmar lo más autentico de tu marca.
                    <br /><br/>¿Listo para empezar?
                      </TeamMember>
            </div>
            </div>
        </div>
 </section>
  );
}

export default Team;