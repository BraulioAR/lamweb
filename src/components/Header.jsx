/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <div className='mx-auto w-11/12'>
        <div className='flex flex-row lg:justify-between justify-center'>

          <div className='hidden lg:block hover:scale-105 pt-2'>
            <Link href="/">
              <div>
                <img src="/header-logo.jpg" alt="LAM logo" className='h-full w-full object-cover' />
              </div>
            </Link>
          </div>

          <div className='flex items-center justify-center lg:items-end lg:justify-end gap-x-2 lg:gap-x-4 '>
            <Link href="/" className='text-gray-600 lg:px-3 py-5 cursor-pointer text-sm lg:text-lg hover:scale-105 hover:text-black transition-transform duration-300'>Inicio</Link>
            <Link href="/contactus" className='text-gray-600 lg:px-3 py-5 cursor-pointer text-sm lg:text-lg hover:scale-105 hover:text-black transition-transform duration-300'>Contacto</Link>
            <Link href="/acercaDe" className='text-gray-600 lg:px-3 py-5 cursor-pointer text-sm lg:text-lg hover:scale-105 hover:text-black transition-transform duration-300'>Acerca de</Link>
            <Link href="/#servicios" className='text-gray-600 lg:px-3 py-5 cursor-pointer text-sm lg:text-lg hover:scale-105 hover:text-black transition-transform'>Servicios</Link>
            <Link href="/portafolio" className='text-gray-600 lg:px-3 py-5 cursor-pointer text-sm lg:text-lg hover:scale-105 hover:text-black transition-transform'>Portafolio</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-black h-0 mx-auto w-11/12"></div>
    </header>
  );
}

export default Header;