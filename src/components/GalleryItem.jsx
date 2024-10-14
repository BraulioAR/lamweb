/* eslint-disable @next/next/no-img-element */
function GalleryItem({img}) {
  return (
   <div className="col-span-1 relative overflow-hidden  ">
         <figure className="effect-layla">
              <div className={`absolute inset-0 bg-cover bg-center ${img}`}></div>   	
        </figure>
    </div>
  );
}

export default GalleryItem;