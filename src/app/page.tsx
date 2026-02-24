import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="theme-transition min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-20">
        <Hero />
        <Experience />
        <Projects />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
