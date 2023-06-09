import About from "components/about/About";
import Contact from "components/contact/Contact";
import Footer from "components/footer/Footer";
import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";
import Skills from "components/skills/Skills";
import Works from "components/works/Works";

export default function Home() {
  return (
    <main className="font-radio">
      <Navbar />
      <Hero />
      <section className="container mx-auto px-2 md:px-4 lg:px-4 xl:px-0">
        <About />
        <Skills />
        <Works />
        <Contact />
      </section>
      <Footer />
    </main>
  )
}