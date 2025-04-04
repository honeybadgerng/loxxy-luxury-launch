
import { Instagram, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-playfair mb-4">Lola</h3>
            <p className="text-gray-300 mb-6">
              Model | Brand Influencer | Lifestyle Muse
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/its_loxxy" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@its-loxxy.com" className="hover:text-gold transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-playfair mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold transition-colors">About</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-gold transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-playfair mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Brand Ambassadorships</li>
              <li className="text-gray-300">Modeling</li>
              <li className="text-gray-300">Social Media Promotions</li>
              <li className="text-gray-300">Event Hosting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} its_loxxy. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with passion by <a href="#" className="text-gold hover:underline">RJB Xclusive</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
