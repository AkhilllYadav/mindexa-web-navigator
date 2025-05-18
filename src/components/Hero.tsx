
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-hero py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Building Intelligent Solutions with <span className="text-mindexa-purple italic">Human-Centered AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From automation to analytics – Mindexa empowers startups & enterprises with future-ready AI
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-mindexa-purple hover:bg-mindexa-indigo text-white px-8 py-6 group transition-all duration-300"
              onClick={() => window.open("https://tally.so/r/3xBQvr", "_blank")}
            >
              Get Started
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 group hover:bg-gray-100 transition-colors"
              onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
            >
              <Play className="mr-1" /> Watch Demo
            </Button>
          </div>

          {/* Client Logos */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <img 
                src="https://via.placeholder.com/120x40?text=TechCrunch" 
                alt="TechCrunch" 
                className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="https://via.placeholder.com/120x40?text=YourStory" 
                alt="YourStory" 
                className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="https://via.placeholder.com/120x40?text=Forbes" 
                alt="Forbes" 
                className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="https://via.placeholder.com/120x40?text=StartupHub" 
                alt="StartupHub" 
                className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 justify-center items-center mt-12 pt-8 border-t border-gray-100">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-mindexa-blue">$40K+</p>
              <p className="text-gray-600">Average ROI</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-mindexa-purple">15+</p>
              <p className="text-gray-600">Expert Team</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-mindexa-indigo">12+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
