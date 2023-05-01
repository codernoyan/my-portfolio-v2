import noyanImage from 'assets/images/Noayn_Dey.jpg';

export default function About() {
  return (
    <section id="about" className="my-20">
      <div>
        <h2 className="text-2xl uppercase font-bold text-center mb-16">About</h2>
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
        <div className="col-span-3 flex flex-col gap-4 lg:gap-0 justify-evenly items-center lg:items-baseline">
          <p className="text-center md:text-justify font-medium text-slate-600">
            I am Noyan. Love to write code with a passion. From my childhood, I had a dream to become a web developer. Today that dream has been fulfilled through hard work, dedication, and sacrifice. I am self-motivated and skilled in web technologies. I am an expert in building applications with the JavaScript UI library React, Redux, Node.js, Express.js, and CRUD operations with MongoDB Database.I am passionate about programming, especially building web applications. When I write code, motivation comes from within myself, which helps me to complete a task perfectly.
          </p>
          <a href="/" download="Noyan_Dey.pdf" className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
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