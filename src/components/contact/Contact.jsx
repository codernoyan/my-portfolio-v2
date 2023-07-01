import Lottie from "lottie-react";
import mailAnimation from 'assets/mail.json';

export default function Contact() {
  return (
    <section id="contact" className="my-20 scroll-mt-20">
      <div className="mb-16">
        <h2 className="relative text-3xl uppercase font-bold text-center -mb-14">Contact</h2>
        <h1 className="text-7xl lg:text-9xl uppercase font-bold text-center text-slate-100/90 select-none">Contact</h1>
      </div>
      {/* form */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
        <div className="lg:w-1/2">
          {/* lottie */}
          <Lottie className="aspect-video lg:w-1/2 lg:aspect-auto -mt-16 lg:mt-0" animationData={mailAnimation} loop={true} />
        </div>
        <div className="lg:w-1/2">
          <form action="https://formsubmit.co/noyandey88@gmail.com" method="POST">
            {/* for auto redirect to homepage */}
            <input type="hidden" name="_next" value="https://noyan.pages.dev" />
            {/* for avoid re-captcha */}
            <input type="hidden" name="_captcha" value="false"></input>
            {/* name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
              <input type="text" name="name" id="name" placeholder="Ex: William Smith" className="border border-gray-400 p-2 w-full" />
            </div>
            {/* email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
              <input type="email" name="email" id="email" placeholder="Ex: william@smith.com" className="border border-gray-400 p-2 w-full" />
            </div>
            {/* subject */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject:</label>
              <input type="text" name="subject" id="subject" placeholder="Ex: Want to discuss about a project" className="border border-gray-400 p-2 w-full" />
            </div>
            {/* message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
              <textarea name="message" id="message" cols="30" rows="5" className="border border-gray-400 p-2 w-full" placeholder="Write your message here..."></textarea>
            </div>
            <div>
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-800 w-full p-2 text-white font-semibold transition-colors duration-300">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}