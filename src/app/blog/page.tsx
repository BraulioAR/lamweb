import { tinos } from '../fonts'


export default function Page() {
    return (
        <section className='relative flex justify-center w-full h-screen items-center bg-gradient-to-b from-white via-gray-200 to-gray-300'>
            <video className='absolute top-0 left-0 w-full h-full object-cover z-0' autoPlay muted loop>
                <source src='/file.mp4' type='video/mp4'></source>
            </video>
            <div className='mx-auto max-w-7xl z-10'>
                <div className='flex justify-center items-center '>
                    <h1 className={`${tinos.className} text-7xl text-center text-white`}>Under construction...</h1>
                </div>
            </div>
        </section>
    )
}