import Nav from '@/components/nav';
import Hero from '@/components/hero';
import About from '@/components/about';
import SkillsScroll from '@/components/SkillsScroll';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import BackToTop from '@/components/BackToTop';
import Projects from '@/components/Projects';
import Certificaes from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Nav />
      <Hero />
      <About />
      <SkillsScroll />
      <Experience />
      <Education />
      <Projects />
      <Certificaes />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}