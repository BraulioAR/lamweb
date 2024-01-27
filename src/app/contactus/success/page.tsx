import { tinos } from '../../fonts'


export default function Page() {
    return (
      <section className="mx-auto flex items-center justify-center w-full h-screen bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div className="bg-white p-8 rounded shadow-md max-w-md mx-4">
                <h1 className={`${tinos.className} text-2xl font-bold mb-4 text-black`}>Mensaje enviado con éxito</h1>
        <p className={`${tinos.className} text-gray-700 text-lg`}>Estaremos en contacto pronto. ¡Gracias por ponerte en contacto!</p>
      </div>
            </section>
)
}
