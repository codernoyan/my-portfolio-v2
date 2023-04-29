import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-2 md:px-0 font-grotesk">
      <Navbar />
      <Hero />
    </div>
  )
}