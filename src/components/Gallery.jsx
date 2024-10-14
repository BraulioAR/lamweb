import GalleryItem from "./GalleryItem";
import { tinos } from '../app/fonts'

 /* eslint-disable @next/next/no-img-element */
function Gallery() {
  return (
     <section id='inspiracion' className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-white h-full'>
          <div className='flex justify-center items-center py-12 mx-auto'>
            <h1 className={`${tinos.className} text-center text-black text-5xl lg:text-[5rem]`}>Por si necesitas <br/>inspiración para tu <br/> contenido...</h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 h-[275vh] w-full pl-5 lg:px-5">
       <GalleryItem img="bg-insp"/>
       <GalleryItem img="bg-insp2"/>
       <GalleryItem img="bg-insp3"/>
       <GalleryItem img="bg-insp4"/>
       <GalleryItem img="bg-insp5"/>
       <GalleryItem img="bg-insp6"/>
       <GalleryItem img="bg-insp7"/>
       <GalleryItem img="bg-insp8"/>
       <GalleryItem img="bg-insp9"/>
          </div>
  </section>
  );
}

export default Gallery;