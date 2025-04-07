
import { useState, useEffect } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { Instagram, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-playfair font-bold">
          <span className="gold-gradient">its_loxxy</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <div className="ml-4 flex items-center space-x-2">
            <a href="https://instagram.com/its_loxxy" target="_blank" rel="noreferrer" className="p-2 hover:text-gold">
              <Instagram size={20} />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-1">
                <div className="w-6 flex flex-col items-end space-y-1.5">
                  <span className="block h-0.5 bg-foreground w-6"></span>
                  <span className="block h-0.5 bg-foreground w-4"></span>
                  <span className="block h-0.5 bg-foreground w-5"></span>
                </div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 flex flex-col justify-center">
              <div className="flex flex-col items-center space-y-8">
                <a
                  href="#about"
                  className="text-2xl font-playfair"
                >
                  About
                </a>
                <a
                  href="#portfolio"
                  className="text-2xl font-playfair"
                >
                  Portfolio
                </a>
                <a
                  href="#services"
                  className="text-2xl font-playfair"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-2xl font-playfair"
                >
                  Contact
                </a>
                <a
                  href="https://instagram.com/its_loxxy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl font-playfair flex items-center gap-2"
                >
                  <Instagram /> Instagram
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
