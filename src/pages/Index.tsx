
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Videos from '@/components/sections/Videos';
import Brands from '@/components/sections/Brands';
import MediaKit from '@/components/sections/MediaKit';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import { ThemeProvider } from '@/context/ThemeContext';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Portfolio />
          <Videos />
          <Brands />
          <MediaKit />
          <Services />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
