/* eslint-disable @next/next/no-img-element */
'use client'

import { tinos } from '../app/fonts'
import { useEffect, useState } from 'react';
import InstagramFeed from '../components/InstagramFeed';
import Team from '../components/Team';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Qualities from '../components/Qualities';
import { ContactForm } from '@/components/ContactForm';

function Hero() {
  return (
    <section id='home' className="flex flex-row h-[80vh] w-full">
        <video className='absolute top-30 left-0 w-full h-full object-cover z-0 blur-sm' autoPlay muted loop playsInline>
          <source src='/file1.mp4' type='video/mp4'></source>
        </video>
        <div className='mx-auto max-w-7xl w-11/12 z-10'>
          <div className='animate-fade animate-duration-[1500ms] flex flex-col justify-center items-center w-full h-full'>
            <img
              className='hover:scale-95 transition-transform'
              src='/aaaa.webp'
              alt='Lights & Media, agencia de social media en República Dominicana'
              width={794}
              height={468}
              
            />
            <h1 className='relative -mt-12 w-[72%] text-center text-3xl font-bold text-indigo-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:-mt-20 lg:text-5xl'>
              Agencia de Social Media
            </h1>
          </div>
        </div>
</section>
  );
}

export function HomePageClient() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    document.querySelectorAll('[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");

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
      <Hero />
      <section className="relative flex justify-center h-[80vh]">
        <video className='absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm' autoPlay muted loop playsInline>
          <source src='/file.mp4' type='video/mp4'></source>
        </video>
        <div className='mx-auto max-w-7xl z-10 flex items-center justify-center'>
          <div className="w-[50%] h-[72%] flex items-center justify-center">

            <div className='flex flex-col items-center gap-8'>
              <h2 className={`${tinos.className} text-center text-white text-2xl lg:text-[2.35rem] leading-normal`}>
                Deja que las redes sociales hablen de ti. En <span className='bg-black px-2 py-1 text-white'>Lights &amp; Media</span> les daremos algo que decir.
              </h2>
              <a
                href='https://wa.me/18295054533?text=Hola%20Lights%20%26%20Media%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios.'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Contactar a Lights & Media por WhatsApp'
                className='whitespace-nowrap rounded-full border border-white/60 bg-white/20 px-5 py-2.5 text-sm font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:text-gray-900 sm:px-7 sm:py-3 sm:text-base'
              >
                Escríbenos por WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>
      <Team isVisible={isVisible} />
      <Services />
      <Gallery />
      <Qualities />
      <section id='instagramfeed' className='flex justify-center'>
        <InstagramFeed />
      </section>
      <section id='contact' className='bg-gradient-to-b from-white via-gray-200 to-gray-300 h-auto lg:h-[70vh]'>
        <div className='mx-auto max-w-7xl w-11/12 '>
          <div className='flex flex-col h-full gap-12'>
            <div className='flex content-center justify-center mt-12 lg:mt-[10vh]'>
              <h2 className={`${tinos.className} text-center text-4xl text-green-950 lg:text-[3rem]`}>Contáctanos</h2>
            </div>
            <div className='flex flex-col items-center lg:mt-8 gap-[2.5rem]'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>


  )

}

export default Hero;
