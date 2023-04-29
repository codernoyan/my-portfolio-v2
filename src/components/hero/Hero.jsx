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
    <section className="mt-8">
      <div className="space-y-4">
        {/* image */}
        <div className="flex justify-center">
          <div className="bg-indigo-200 rounded-full p-2 flex">
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
          <h1 className="text-center text-4xl text-indigo-500 font-bold">Hello! I am Noyan</h1>
        </div>
        {/* objective */}
        <div className="flex justify-center">
          <p className="text-center text-lg w-3/4 font-medium">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
        </div>
        {/* links */}
        <div>

        </div>
      </div>
    </section>
  )
}