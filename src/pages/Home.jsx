import About from "components/about/About";
import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";
import Skills from "components/skills/Skills";

export default function Home() {
  return (
    <main className="font-radio">
      <Navbar />
      <Hero />
      <section className="container mx-auto px-2 lg:px-0">
        <About />
        <Skills />
      </section>
    </main>
  )
}