
import React from 'react';
import { Phone, MapPin, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Creative Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & Software</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-mindexa-purple" />
                <a href="tel:+918948890610" className="hover:text-white transition-colors">
                  +91 8948890610
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-mindexa-purple" />
                <span>Lucknow, UP, India</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-mindexa-purple" />
                <span className="text-gray-400">GST: Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Mindexa. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.017 0C8.396 0 7.999.016 6.79.08 5.588.144 4.729.29 3.994.55c-.764.287-1.369.673-1.996 1.3-.627.627-1.013 1.232-1.3 1.996C.29 4.581.144 5.44.08 6.642.016 7.85 0 8.247 0 11.868c0 3.621.016 4.018.08 5.227.064 1.202.21 2.061.47 2.826.287.764.673 1.369 1.3 1.996.627.627 1.232 1.013 1.996 1.3.765.26 1.624.406 2.826.47 1.209.064 1.606.08 5.227.08 3.621 0 4.018-.016 5.227-.08 1.202-.064 2.061-.21 2.826-.47.764-.287 1.369-.673 1.996-1.3.627-.627 1.013-1.232 1.3-1.996.26-.765.406-1.624.47-2.826.064-1.209.08-1.606.08-5.227 0-3.621-.016-4.018-.08-5.227-.064-1.202-.21-2.061-.47-2.826C22.747 2.77 22.361 2.165 21.734 1.538 21.107.911 20.502.525 19.738.238 18.973-.022 18.114-.168 16.912-.232 15.704-.296 15.307-.312 11.686-.312h.331zm-.331 1.613c3.573 0 4 .013 5.404.076 1.31.06 2.02.264 2.49.44.627.244 1.074.537 1.544 1.006.469.47.762.917 1.006 1.544.176.47.38 1.18.44 2.49.063 1.404.076 1.831.076 5.404 0 3.573-.013 4-.076 5.404-.06 1.31-.264 2.02-.44 2.49-.244.627-.537 1.074-1.006 1.544-.47.469-.917.762-1.544 1.006-.47.176-1.18.38-2.49.44-1.404.063-1.831.076-5.404.076-3.573 0-4-.013-5.404-.076-1.31-.06-2.02-.264-2.49-.44-.627-.244-1.074-.537-1.544-1.006-.469-.47-.762-.917-1.006-1.544-.176-.47-.38-1.18-.44-2.49C1.625 15.686 1.612 15.259 1.612 11.686c0-3.573.013-4 .076-5.404.06-1.31.264-2.02.44-2.49.244-.627.537-1.074 1.006-1.544.47-.469.917-.762 1.544-1.006.47-.176 1.18-.38 2.49-.44 1.404-.063 1.831-.076 5.404-.076z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
