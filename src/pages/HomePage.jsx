import CosmicBackground from '@/components/CosmicBackground';
import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      
      {/* Dark and Light Theme Toggle */}
      <ThemeToggle />

      {/* Cosmic Background Animation Effects */}
      <CosmicBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>


      {/* Footer */}
      <Footer />

    </div>
  )
}

export default HomePage
