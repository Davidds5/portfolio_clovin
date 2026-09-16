import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-6">
          <Hero />
          <About />
          <Projects />
          <TechStack />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
