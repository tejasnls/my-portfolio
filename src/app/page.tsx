import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { HashDetails } from "@/components/HashDetails";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1 pt-20 scroll-mt-20">
        <Hero />
        <Experience />
        <Projects />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <HashDetails />
    </div>
  );
}
