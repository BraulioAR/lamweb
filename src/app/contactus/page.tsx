import { tinos } from '../fonts'
import {ContactForm} from '../../components/ContactForm'


export default function Page() {
    return (
        <section id='contact' className='bg-gradient-to-b from-white via-gray-200 to-gray-300 h-screen flex items-center justify-center'>
        <div className='mx-auto max-w-7xl w-11/12  '>
          <div className='flex flex-col h-full gap-12'>
            <div className='flex content-center justify-center'>
              <h1 className={`${tinos.className} text-center text-[3.5rem] text-green-950`}>Ponte en contacto</h1>
            </div>
            <div className='flex flex-col items-center lg:mt-8 gap-[2.5rem]'>
             <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    )
}