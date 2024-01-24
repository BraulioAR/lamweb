import { useState, useEffect } from "react";
import { tinos } from 'C:/Users/admin/lamweb/src/app/fonts'


function InstagramFeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink,media_type&limit=9&access_token=IGQWRPV0UwV3d1bU1lT3ZAIVzJGdmFPUk9WWnZAnYmtBVXBrRkZAMQUtqUWVCbTVfZA0loVnV6U0toLUdMNjNZAb1RjSGk3TFdXRGZALcGV0ZAUlFZAVcxd05jX3lUVEVOMndpR1N1VFRiNVIwU3VkalI1eWtjRWpwaGJ1SUkZD"
      );
      const json = await response.json();
      
      setData(json?.data);
    };

    fetchData();
  }, []);

  return (
    <div className="feed">
      {data.map((p) => {
        const { id, media_url, caption, media_type, permalink } = p;

        return (
          <article key={id}>
          
            <div className="grid h-[25vh] lg:h-full">
					<figure className="effect-layla">
						{media_type === 'IMAGE' || media_type === 'CAROUSEL_ALBUM' ? (
             
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={media_url} alt="" className="object-cover" />
                      
            ) : media_type === 'VIDEO' ? (
              <video autoPlay muted loop playsInline className="pt-8 lg:pt-0 lg:h-[410px]">
                <source src={media_url} type="video/mp4"  />
                Your browser does not support the video tag.
              </video>
            ) : null}
						<figcaption className='flex justify-center items-center'>
                    <p className={`${tinos.className} text-black font-bold text-2xl text-center hidden lg:block`}>{caption}</p>
                    <a href={permalink} target="_blank" rel="noopener noreferrer"></a>
						</figcaption>			
              </figure>
              </div>
              
          </article>
        );
      })}
      <div></div>
    </div>
    
  );
}

export default InstagramFeed;

