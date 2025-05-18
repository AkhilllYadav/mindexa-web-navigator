
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  // Track the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home', 'about', 'services', 'teams', 
        'case-studies', 'testimonials', 'awards', 'contact'
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
    { id: 'teams', label: 'Teams' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection('home'); 
              }} 
              className="flex items-center"
            >
              <img 
                src="/lovable-uploads/e469623c-9926-493b-9978-9ff0be2be4c0.png" 
                alt="Mindexa Logo" 
                className="h-10 mr-2" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => { 
                  e.preventDefault(); 
                  scrollToSection(link.id); 
                }} 
                className={`text-gray-600 hover:text-gray-900 font-medium transition-colors relative ${
                  activeSection === link.id 
                    ? 'text-gray-900 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-mindexa-purple after:rounded-full' 
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-mindexa-blue to-mindexa-indigo text-white hover:shadow-md transition-all"
              onClick={() => window.open("https://tally.so/r/3xBQvr", "_blank")}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              {navLinks.map(link => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    scrollToSection(link.id); 
                  }} 
                  className={`text-gray-600 hover:text-gray-900 font-medium ${
                    activeSection === link.id ? 'text-gray-900 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                className="bg-gradient-to-r from-mindexa-blue to-mindexa-indigo text-white w-full"
                onClick={() => window.open("https://tally.so/r/3xBQvr", "_blank")}
              >
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
