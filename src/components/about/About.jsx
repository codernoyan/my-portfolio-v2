import noyanImage from 'assets/images/Noayn_Dey.jpg';

export default function About() {
  return (
    <section id="about" className="my-20 scroll-mt-20">
      <div className="mb-16">
        <h2 className="relative text-3xl uppercase font-bold text-center -mb-16">About</h2>
        <h1 className="text-8xl lg:text-9xl uppercase font-bold text-center text-slate-100/90 select-none">About</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center">
        {/* image */}
        <div className="md:w-auto lg:w-full">
          <div className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            <span className="absolute inset-0 translate-x-1 translate-y-1 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block border border-current bg-white">
              <img src={noyanImage} alt="noyan" />
            </span>
          </div>
        </div>
        {/* description */}
        <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-0 justify-evenly items-center lg:items-baseline">
          <h1 className="text-xl font-bold">Noyan Dey</h1>
          <p className="bg-indigo-50 p-1 rounded-md text-indigo-600 font-medium">MERN Stack Developer</p>
          <p className="text-center md:text-justify font-medium text-slate-600">
            I am Noyan. I have an unwavering passion for writing code that fuels my creativity and ignites my soul. I have always been curious and passionate about technology since my childhood. Initially, I started with graphic design but jumped over the web development train to fulfill my dream. I prioritize user-centric design, focusing on intuitive and seamless experiences. Collaboration and continuous learning are integral to my work, as I thrive in dynamic environments and stay updated with the latest trends. Check out my portfolio to see my projects and let's build something amazing together.
          </p>
          {/* resume download button */}
          <a href="https://drive.google.com/file/d/1cv10ivFfWX_6W3qBOSkhaTYZ7A07h1vE/view?usp=drive_link" download="Noyan_Dey.pdf" target="_blank" rel="noreferrer" className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block border border-current bg-white font-bold px-8 py-3">
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}