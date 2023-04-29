import noyanImage from 'assets/images/Noayn_Dey.jpg';

export default function About() {
  return (
    <section className="h-screen mt-8">
      <div>
        <h2 className="text-2xl uppercase font-bold text-center">About</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* image */}
        <div className="md:w-full">
          <div className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            <span className="absolute inset-0 translate-x-1 translate-y-1 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block border border-current bg-white">
              <img src={noyanImage} alt="noyan" />
            </span>
          </div>
        </div>
        {/* description */}
        <div>
          <p className="text-center md:text-justify font-medium text-slate-600">
            I am Noyan. Love to write code with a passion. From my childhood, I had a dream to become a web developer. Today that dream has been fulfilled through hard work, dedication, and sacrifice. I am self-motivated and skilled in web technologies. I am an expert in building applications with the JavaScript UI library React, Node.js, Express.js, and CRUD operations with MongoDB Database.I am passionate about programming, especially building web applications. When I write code, motivation comes from within myself, which helps me to complete a task perfectly.
          </p>
          <a href="/">Download Resume</a>
        </div>
      </div>
    </section>
  )
}