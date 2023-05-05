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
            <a href="https://github.com/codernoyan/task-management-client" className="absolute top-[40%] left-[50%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl p-[0.15rem]" />
            </a>
            <a href="https://task-management-41fea.web.app/" className="absolute top-[40%] left-[35%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
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
            <a href="https://github.com/codernoyan/joldikino-used-products-resale-client" target="_blank" rel="noreferrer" className="absolute top-[40%] left-[50%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out">
              <FaGithub className="text-2xl p-[0.15rem]" />
            </a>
            <a href="https://joldikino-assignment.web.app/" className="absolute top-[40%] left-[35%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
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
            <a href="https://github.com/codernoyan/shamus-kitchen-client" className="absolute top-[40%] left-[50%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl p-[0.15rem]" />
            </a>
            <a href="https://cloud-kitchen-assignment.web.app/" className="absolute top-[40%] left-[35%] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 transition-opacity duration-500 ease-in-out" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
          {/* text content */}
          <div className="mt-3">
            <h2 className="font-bold">Shamu's Kitchen</h2>
            <p className="text-slate-500">Cloud Kitchen Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}