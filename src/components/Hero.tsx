
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-hero py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Building Intelligent Solutions with <span className="text-mindexa-purple italic">Human-Centered AI</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            From automation to analytics – Mindexa empowers startups & enterprises with future-ready AI
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="bg-mindexa-purple hover:bg-mindexa-indigo text-white px-8 py-6 group transition-all duration-300"
              onClick={() => window.open("https://tally.so/r/3xBQvr", "_blank")}
            >
              Get Started
              <motion.span
                className="inline-block"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="ml-1" />
              </motion.span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 group hover:bg-gray-100 transition-colors"
              onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
            >
              <Play className="mr-1" /> Watch Demo
            </Button>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['TechCrunch', 'YourStory', 'Forbes', 'StartupHub'].map((logo, index) => (
                <motion.img 
                  key={logo}
                  src={`https://via.placeholder.com/120x40?text=${logo}`}
                  alt={logo}
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 md:grid-cols-3 gap-8 justify-center items-center mt-12 pt-8 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.p 
                className="text-3xl md:text-4xl font-bold text-mindexa-blue"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, type: "spring" }}
              >
                $40K+
              </motion.p>
              <p className="text-gray-600">Average ROI</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.p 
                className="text-3xl md:text-4xl font-bold text-mindexa-purple"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
              >
                15+
              </motion.p>
              <p className="text-gray-600">Expert Team</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.p 
                className="text-3xl md:text-4xl font-bold text-mindexa-indigo"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                12+
              </motion.p>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
