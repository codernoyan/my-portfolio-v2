import authorImage from 'assets/images/Noayn_Dey.jpg';
import { useEffect, useState } from 'react';
import { BlurhashCanvas } from "react-blurhash";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
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
    <main className="hero-pattern h-screen pt-4 md:pt-0 flex justify-center items-center">
      <section className="pt-6 md:pt-14 container mx-auto">
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
            {/* facebook */}
            <a className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="https://www.facebook.com/noyandey88" target="_blank" rel="noreferrer">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative block border border-current bg-white p-2">
                <FaFacebookF className="text-2xl p-[0.15rem]" />
              </span>
            </a>
            {/* linkedin */}
            <a className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="https://www.linkedin.com/in/noyandey88" target="_blank" rel="noreferrer">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative block border border-current bg-white p-2">
                <FaLinkedinIn className="text-2xl p-[0.15rem]" />
              </span>
            </a>
            {/* github */}
            <a className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="https://www.github.com/codernoyan" target="_blank" rel="noreferrer">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative block border border-current bg-white p-2">
                <FaGithub className="text-2xl p-[0.15rem]" />
              </span>
            </a>
            {/* instagram */}
            <a className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="https://www.instagram.com/noyandey1" target="_blank" rel="noreferrer">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative block border border-current bg-white p-2">
                <FaInstagram className="text-2xl p-[0.15rem]" />
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center animate-bounce mt-10 md:mt-20">
          <AiOutlineArrowDown className="text-2xl text-indigo-500" />
        </div>
      </section>
    </main>
  )
}