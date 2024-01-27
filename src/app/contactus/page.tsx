import { tinos } from '../fonts'


export default function Page() {
    return (
        <section id='contact' className='bg-gradient-to-b from-white via-gray-200 to-gray-300 h-screen flex items-center justify-center'>
        <div className='mx-auto max-w-7xl w-11/12  '>
          <div className='flex flex-col h-full gap-12'>
            <div className='flex content-center justify-center'>
              <h1 className={`${tinos.className} text-center text-[3.5rem] text-green-950`}>Ponte en contacto</h1>
            </div>
            <div className='flex flex-col items-center lg:mt-8 gap-[2.5rem]'>
              <form name="contactus" action='/contactus/success' method='POST' data-netlify="true">
                <input required type='hidden' name='form-name' value='contactus' />
                <div className="flex flex-row gap-[1.25rem]">
                  <div>
                    <label>
                      Nombre<br /><input
                        required
                        type="text"
                        name="name"
                        className="border rounded-[0.5rem] pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] w-full focus:outline-none focus:shadow-sm focus:transition-border-03s focus:transition-shadow-03s"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Email<br /><input
                        required
                        type="email"
                        name="email"
                        className="border rounded-[0.5rem] pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] w-full focus:outline-none focus:shadow-sm focus:transition-border-03s focus:transition-shadow-03s"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label>
                    Mensaje<br />
                    <textarea required
                      name="message"
                      className="border rounded-[0.5rem] pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] w-full focus:outline-none focus:shadow-sm focus:transition-border-03s focus:transition-shadow-03s"
                    ></textarea>
                  </label>
                </div>
                <div className=" flex justify-end px-[2rem] py-[1rem] items-end">
                  <button
                    className="border px-[2rem] py-[0.5rem] bg-black text-white hover:text-black hover:bg-white transition-color-03s"
                    type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}