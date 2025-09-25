import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectsGrid from '../components/ProjectsGrid';
import CertificatesGrid from '../components/CertificatesGrid';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <ProjectsGrid />
        <CertificatesGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
