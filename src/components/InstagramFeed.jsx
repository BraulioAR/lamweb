import { useState, useEffect } from "react";
import { tinos } from "../app/fonts";

function InstagramFeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=9&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
        );
        const json = await response.json();

        if (json?.data) {
          setData(json.data);
        } else {
          console.error("Error fetching Instagram data:", json);
        }
      } catch (error) {
        console.error("Error fetching Instagram API:", error);
      }
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
						<figcaption className='flex justify-center items-center overflow-visible'>
                    <p className={`${tinos.className} text-black font-bold text-lg text-center hidden lg:block `}>{caption}</p>
                    <a href={permalink} target="_blank" rel="noopener noreferrer"></a>
						</figcaption>			
              </figure>
              </div>
              
          </article>
        );
      })}
    </div>
  );
}

export default InstagramFeed;