import Nav from '@/components/nav';
import Hero from '@/components/hero';
import About from '@/components/about';
import SkillsScroll from '@/components/SkillsScroll';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Nav />
      <Hero />
      <About />
      <SkillsScroll />
      <Experience />
      <Education />
      <BackToTop />
    </main>
  );
}