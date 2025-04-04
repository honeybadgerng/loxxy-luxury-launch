
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')" }}
      id="home"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Lola <span className="gold-gradient">"its_loxxy"</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 font-light tracking-wide">
            Model | Brand Influencer | Lifestyle Muse
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Book Lola
            </a>
            <a href="#portfolio" className="btn-secondary w-full sm:w-auto">
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-sm mb-2 text-white/80">Scroll</span>
        <div className="w-0.5 h-8 bg-gold"></div>
      </div>
    </section>
  );
};

export default Hero;
