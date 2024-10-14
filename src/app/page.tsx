/* eslint-disable @next/next/no-sync-scripts */
'use client'
import { tinos } from './fonts'
import { useEffect, useState } from 'react';
import InstagramFeed from '../components/InstagramFeed';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Qualities from '../components/Qualities';
import { ContactForm } from '@/components/ContactForm';


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
      <Hero/>
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
     <Team isVisible={isVisible} />
     <Services/>
    <Gallery/>
    <Qualities/>
     <section id='instagramfeed' className='flex justify-center mx-4'>
       
      </section> 
      
      <section id='contact' className='bg-gradient-to-b from-white via-gray-200 to-gray-300 h-auto lg:h-[70vh]'>
        <div className='mx-auto max-w-7xl w-11/12 '>
          <div className='flex flex-col h-full gap-12'>
            <div className='flex content-center justify-center mt-12 lg:mt-[10vh]'>
              <h1 className={`${tinos.className} text-center text-[3.5rem] text-green-950`}>Ponte en contacto</h1>
            </div>
            <div className='flex flex-col items-center lg:mt-8 gap-[2.5rem]'>
             <ContactForm/>
            </div>
          </div>
        </div>
      </section>
     
    </main>

    
  )

}




