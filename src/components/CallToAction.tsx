
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-mindexa-blue to-mindexa-purple">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Whether you're dreaming up a bold new brand or building tomorrow's AI solutions—let's make it real.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-white text-mindexa-purple hover:bg-gray-100 px-8 py-6 transition-all duration-300"
              onClick={() => window.open("https://tally.so/r/3xBQvr", "_blank")}
            >
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get Started
              </motion.span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-mindexa-purple px-8 py-6 transition-all duration-300"
              onClick={() => window.open("https://tally.so/r/3xBQvr", "_blank")}
            >
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Talk to Us
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
