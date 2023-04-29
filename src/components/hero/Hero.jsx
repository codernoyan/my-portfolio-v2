import authorImage from 'assets/images/Noayn_Dey.jpg';
import { useEffect, useState } from 'react';
import { BlurhashCanvas } from "react-blurhash";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = authorImage;
  }, [])
  return (
    <section className="flex justify-center mt-4">
      <div>
        {/* image */}
        <div>
          <div className="bg-cyan-200 rounded-full p-2 flex">
            {/* <img src={authorImage} alt="author" className="h-32 rounded-full" loading="lazy" /> */}
            <>
              {/* blurhash image */}
              {
                !imageLoaded && (
                  <BlurhashCanvas
                    hash="LfPZlsWY_Na#i[ocxuoeXUWWVsWD"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    className="rounded-full"
                  />
                )
              }
              {
                imageLoaded && (
                  <img src={authorImage} alt="author" className="h-32 rounded-full" loading="lazy" />
                )
              }
            </>
          </div>
        </div>
        {/* designation */}
        <div>
          <h1>Hello! I am Noyan</h1>
        </div>
        {/* objective */}
        <div>

        </div>
        {/* links */}
        <div>

        </div>
      </div>
    </section>
  )
}