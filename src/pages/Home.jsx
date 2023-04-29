import About from "components/about/About";
import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="container mx-auto px-2 md:px-0 font-radio">
        <About />
      </section>
    </main>
  )
}