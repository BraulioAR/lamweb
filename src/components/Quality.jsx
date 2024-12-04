/* eslint-disable @next/next/no-img-element */
import { tinos } from '../app/fonts'
function Quality({number,title}) {
  return (
    <div className=' flex flex-col justify-start items-start'>
          <h1 className={`${tinos.className} text-indigo-100 text-[3rem]`}>{number}</h1>
          <h3 className={`${tinos.className} text-white text-[1.25rem]`}>{title}</h3>
        <div className="h-[3px] w-full bg-white mt-6"></div>
    </div>
  );
}

export default Quality;