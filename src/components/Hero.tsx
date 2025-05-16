
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building bold brands with <span className="text-mindexa-purple italic">thoughtful</span> design
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Crafting exceptional, well-engineered & technology
            driven strategies to drive impactful results
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-mindexa-purple hover:bg-mindexa-indigo text-white px-8 py-6">
              Get a Demo
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6">
              Our Services
            </Button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 justify-center items-center">
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
