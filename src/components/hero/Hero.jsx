import authorImage from 'assets/images/Noayn_Dey.jpg';
import { useEffect, useState } from 'react';
import { BlurhashCanvas } from "react-blurhash";
import { FaFacebookF, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

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
    <section className="mt-6 md:mt-10">
      <div className="space-y-5">
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
          <h1 className="text-center text-5xl text-indigo-500 font-bold selection:bg-indigo-500 selection:text-white">Hello! <span className="block md:inline">I am Noyan</span></h1>
        </div>
        {/* objective */}
        <div className="flex justify-center selection:bg-indigo-500 selection:text-white">
          <p className="text-center text-lg md:w-3/4 font-medium text-slate-600">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
        </div>
        {/* social links */}
        <div className="flex justify-center gap-4 items-center">
          <div className="border-2 border-indigo-500 p-1 rounded-sm cursor-pointer hover:bg-indigo-500 hover:text-white transition-colors duration-500">
            <FaFacebookF className="text-2xl p-[0.15rem]" />
          </div>
          <div className="border-2 border-indigo-500 p-1 rounded-sm cursor-pointer hover:bg-indigo-500 hover:text-white transition-colors duration-500">
            <FaGithub className="text-2xl p-[0.15rem]" />
          </div>
          <div className="border-2 border-indigo-500 p-1 rounded-sm cursor-pointer hover:bg-indigo-500 hover:text-white transition-colors duration-500">
            <FaLinkedin className="text-2xl p-[0.15rem]" />
          </div>
          <div className="border-2 border-indigo-500 p-1 rounded-sm cursor-pointer hover:bg-indigo-500 hover:text-white transition-colors duration-500">
            <FaInstagram className="text-2xl p-[0.15rem]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center animate-bounce mt-10 md:mt-20">
        <AiOutlineArrowDown className="text-2xl" />
      </div>
    </section>
  )
}