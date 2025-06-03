
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMode } from '@/contexts/ModeContext';

const Hero = () => {
  const { mode, setMode } = useMode();

  const content = {
    creative: {
      headline: "Designs that Inspire. Ideas that Connect.",
      subheadline: "We craft stunning visuals, bold brands, and digital experiences that move people.",
      primaryCta: "Explore Creative",
      primaryAction: () => setMode('creative'),
      gradient: "from-mindexa-purple to-mindexa-pink"
    },
    ai: {
      headline: "Code the Future. Build with Intelligence.",
      subheadline: "From custom software to smart AI solutions, we help businesses level up.",
      primaryCta: "Explore Software & AI", 
      primaryAction: () => setMode('ai'),
      gradient: "from-mindexa-blue to-mindexa-indigo"
    }
  };

  const currentContent = content[mode];

  return (
    <section id="home" className="pt-16 lg:pt-20 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-12 sm:py-16 lg:py-20">
          <motion.h1 
            key={mode}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {currentContent.headline}
          </motion.h1>
          
          <motion.p 
            key={`${mode}-sub`}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {currentContent.subheadline}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className={`bg-gradient-to-r ${currentContent.gradient} text-white px-6 sm:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base group transition-all duration-300 w-full sm:w-auto`}
              onClick={currentContent.primaryAction}
            >
              <motion.span
                className="inline-flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {currentContent.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </motion.span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="px-6 sm:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base group hover:bg-gray-100 transition-colors w-full sm:w-auto"
              onClick={() => window.open("https://tally.so/r/3xBQvr", "_blank")}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-flex items-center"
              >
                Talk to Us
              </motion.span>
            </Button>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="w-full"
          >
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">
              Trusted by forward-thinking brands
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
              {[
                { name: 'FresherTalents.in', logo: 'FresherTalents' },
                { name: 'SalonifyPro', logo: 'SalonifyPro' },
                { name: 'InflueAIty', logo: 'InflueAIty' }
              ].map((client, index) => (
                <motion.div
                  key={client.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center justify-center"
                >
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {client.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
