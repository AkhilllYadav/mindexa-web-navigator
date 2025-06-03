
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  // Track the active section on scroll and header shadow
  useEffect(() => {
    const handleScroll = () => {
      // Header shadow
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Active section tracking
      const sections = [
        'home', 'about', 'services', 'stats', 
        'testimonials', 'awards', 'contact'
      ];
      
      // Find the current section
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'stats', label: 'Stats' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'awards', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-lg' : 'border-b border-gray-100'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection('home'); 
              }} 
              className="flex items-center"
            >
              <motion.img 
                src="/lovable-uploads/e469623c-9926-493b-9978-9ff0be2be4c0.png" 
                alt="Mindexa Logo" 
                className="h-8 sm:h-10 w-auto" 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => { 
                  e.preventDefault(); 
                  scrollToSection(link.id); 
                }} 
                className={`text-sm font-medium transition-colors relative px-2 py-1 ${
                  activeSection === link.id 
                    ? 'text-mindexa-purple after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-mindexa-purple after:rounded-full' 
                    : 'text-gray-600 hover:text-mindexa-purple'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              className="bg-gradient-to-r from-mindexa-blue to-mindexa-indigo text-white hover:shadow-lg transition-all px-6 py-2"
              onClick={() => window.open("https://tally.so/r/3xBQvr", "_blank")}
            >
              <motion.span
                whileHover={{ x: 2 }}
                className="flex items-center"
              >
                Contact Us
              </motion.span>
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-mindexa-purple"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a 
                    key={link.id}
                    href={`#${link.id}`} 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      scrollToSection(link.id); 
                    }} 
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeSection === link.id 
                        ? 'text-mindexa-purple bg-purple-50 font-semibold' 
                        : 'text-gray-600 hover:text-mindexa-purple hover:bg-gray-50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-mindexa-blue to-mindexa-indigo text-white w-full"
                    onClick={() => {
                      window.open("https://tally.so/r/3xBQvr", "_blank");
                      setIsMenuOpen(false);
                    }}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
