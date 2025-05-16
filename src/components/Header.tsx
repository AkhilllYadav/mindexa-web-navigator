
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              <span className="text-mindexa-blue">Mind</span>
              <span className="text-mindexa-purple">exa</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </a>
            <a href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
              Services
            </a>
            <a href="/teams" className="text-gray-600 hover:text-gray-900 font-medium">
              Teams
            </a>
            <a href="/case-studies" className="text-gray-600 hover:text-gray-900 font-medium">
              Case Studies
            </a>
            <a href="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
              Blog
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-mindexa-blue to-mindexa-indigo text-white">
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
              <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </a>
              <a href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                Services
              </a>
              <a href="/teams" className="text-gray-600 hover:text-gray-900 font-medium">
                Teams
              </a>
              <a href="/case-studies" className="text-gray-600 hover:text-gray-900 font-medium">
                Case Studies
              </a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
                Blog
              </a>
              <Button className="bg-gradient-to-r from-mindexa-blue to-mindexa-indigo text-white w-full">
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
