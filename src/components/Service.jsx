/* eslint-disable @next/next/no-img-element */
import { tinos } from '../app/fonts'
import Link from 'next/link'

function Service({img,alt,buttonText}) {
  return (
    <div className='bg-white flex flex-col border border-gray-200 px-5 py-12'>
                <div>
                  <img
                    src={img}
                    alt={alt}
                    width={220}
                    height={215}
                    className='rounded-[10rem]'
                  />
                  <div className='flex items-center justify-center pt-7'>
                    <Link href="#contact">
                      <button className={`${tinos.className} border-2 text-blue-500 border-blue-600 text-lg px-3 font-bold hover:scale-105`}>{buttonText}</button>
                    </Link>
                  </div>
                </div>
    </div>
  );
}

export default Service;