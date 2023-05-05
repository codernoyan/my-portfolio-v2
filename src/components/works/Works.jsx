import projectOne from 'assets/images/project-1.png';
import projectTwo from 'assets/images/project-2.png';
import projectThree from 'assets/images/project-3.png';

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
        <div className="w-full bg-slate-50 p-2 rounded-md">
          {/* image */}
          <div>
            <img src={projectOne} alt="projectOne" className="aspect-video object-cover" />
          </div>
          {/* text content */}
          <div className="mt-3">
            <h2 className="font-bold">Task Writer</h2>
            <p className="text-slate-500">To do Application</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full bg-slate-50 p-2 rounded-md">
          {/* image */}
          <div>
            <img src={projectTwo} alt="projectTwo" className="aspect-video w-full object-cover" />
          </div>
          {/* text content */}
          <div className="mt-3">
            <h2 className="font-bold">Joldikino</h2>
            <p className="text-slate-500">Used Camera Resale</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full bg-slate-50 p-2 rounded-md">
          {/* image */}
          <div>
            <img src={projectThree} alt="projectThree" className="aspect-video object-cover" />
          </div>
          {/* text content */}
          <div className="mt-3">
            <h2 className="font-bold">Shamu's Kitchen</h2>
            <p className="text-slate-500">Cloud Kitchen Service</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="h-40 w-60 object-cover bg-black" ></div>
        <div className="h-40 w-60 object-cover bg-indigo-100" ></div>
      </div>
    </section>
  )
}