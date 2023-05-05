import projectOne from 'assets/images/project-1.png';
import projectTwo from 'assets/images/project-2.png';
import projectThree from 'assets/images/project-3.png';
import { FaGithub } from "react-icons/fa";

export default function Works() {
  return (
    <section id="works" className="my-20 scroll-mt-20">
      <div className="flex justify-center ">
        <div className="mb-16">
          <h2 className="relative text-3xl uppercase font-bold text-center -mb-16">Works</h2>
          <h1 className="text-9xl uppercase font-bold text-center text-slate-100/90 select-none">Works</h1>
        </div>
        <div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* card 1 */}
        <div className="w-full bg-slate-50 p-2 rounded-md cursor-pointer">
          {/* image */}
          <div className="relative font-medium text-indigo-600 before:absolute before:rounded-sm before:aspect-video before:w-full before:origin-left before:scale-x-0 before:backdrop-blur-lg hover:before:scale-100 duration-500 transition-all before:duration-700 before:transition-transform before:ease-in-out before:bg-black/25 group">
            <img src={projectOne} alt="projectOne" className="aspect-video object-cover" />
            <button className="absolute top-[40%] left-[50%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out">
              <FaGithub className="text-2xl p-[0.15rem]" />
            </button>
            <button className="absolute top-[40%] left-[35%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </button>
          </div>
          {/* text content */}
          <div className="mt-3">
            <h2 className="font-bold">Task Writer</h2>
            <p className="text-slate-500">To do Application</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full bg-slate-50 p-2 rounded-md cursor-pointer">
          {/* image */}
          <div className="relative font-medium text-indigo-600 before:absolute before:rounded-sm before:aspect-video before:w-full before:origin-left before:scale-x-0 before:backdrop-blur-lg hover:before:scale-100 before:duration-700 before:transition-transform before:ease-in-out before:bg-black/25 group">
            <img src={projectTwo} alt="projectTwo" className="aspect-video w-full object-cover" />
            <button className="absolute top-[40%] left-[50%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out">
              <FaGithub className="text-2xl p-[0.15rem]" />
            </button>
            <button className="absolute top-[40%] left-[35%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </button>
          </div>
          {/* text content */}
          <div className="mt-3">
            <h2 className="font-bold">Joldikino</h2>
            <p className="text-slate-500">Used Camera Resale</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full bg-slate-50 p-2 rounded-md cursor-pointer">
          {/* image */}
          <div className="relative font-medium before:absolute before:rounded-sm before:aspect-video before:w-full before:origin-left before:scale-x-0 before:backdrop-blur-lg hover:before:scale-100 before:duration-700 before:transition-transform before:ease-in-out before:bg-black/25 group">
            <img src={projectThree} alt="projectThree" className="aspect-video object-cover" />
            <button className="absolute top-[40%] left-[50%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out">
              <FaGithub className="text-2xl p-[0.15rem]" />
            </button>
            <button className="absolute top-[40%] left-[35%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </button>
          </div>
          {/* text content */}
          <div className="mt-3">
            <h2 className="font-bold">Shamu's Kitchen</h2>
            <p className="text-slate-500">Cloud Kitchen Service</p>
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <div className="h-40 w-60 object-cover bg-black" ></div>
        <div className="h-40 w-60 object-cover bg-indigo-100" ></div>
      </div> */}
      <div className="relative font-medium text-indigo-100 before:absolute before:-bottom-1 before:h-48 before:w-48 before:origin-left before:scale-x-0 before:backdrop-blur-md before:transition hover:before:scale-100 group">
        <img src={projectThree} alt="projectThree" className="h-48 w-48 object-cover" />
        {/* <h1 className="absolute top-6 opacity-0 group-hover:opacity-100">button github</h1> */}
        <button className="absolute top-6 opacity-0 group-hover:opacity-100">button github</button>
      </div>
      {/* testing code */}
      <div>
        {/* Border */}
        <div className="group relative inline-block rounded-full border border-current px-8 py-3 text-indigo-600">
          <span className="text-sm font-medium transition-opacity group-hover:opacity-0">
            Follow On Social
          </span>
          <ul className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
            <li>
              <a className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none" href="/twitter">
                <span className="sr-only"> Twitter </span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
            <li>
              <a className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none" href="/github">
                <span className="sr-only"> GitHub </span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none" href="/dribbble">
                <span className="sr-only"> Dribbble </span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}