/* eslint-disable @next/next/no-img-element */
function Hero() {
  return (
    <section id='home' className="flex flex-row h-[80vh] w-full">
        <video className='absolute top-30 left-0 w-full h-full object-cover z-0 blur-sm' autoPlay muted loop playsInline>
          <source src='/file1.mp4' type='video/mp4'></source>
        </video>
        <div className='mx-auto max-w-7xl w-11/12 z-10'>
          <div className=' animate-fade animate-duration-[1500ms] flex justify-center items-center w-full h-full '>
            <img
              className='hover:scale-95 transition-transform'
              src='/aaaa.webp'
              alt='logo'
              width={794}
              height={468}
              
            />
          </div>
        </div>
</section>
  );
}

export default Hero;