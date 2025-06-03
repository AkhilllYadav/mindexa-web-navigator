
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible."
    },
    {
      title: "Excellence", 
      description: "We strive to deliver exceptional results every time."
    },
    {
      title: "Integrity",
      description: "Transparency and ethics are at the heart of what we do."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Mindexa</h2>
            <p className="text-lg text-gray-700 mb-6">
              Mindexa is a multidisciplinary studio where artistry meets technology. Whether you're building a brand or a breakthrough product, we bring vision, innovation, and strategy to the table.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-mindexa-blue mb-3">Vision</h3>
              <p className="text-gray-700 mb-4">
                To empower businesses with design and technology that scales.
              </p>
              
              <h3 className="text-xl font-bold text-mindexa-purple mb-3">Mission</h3>
              <p className="text-gray-700 mb-6">
                To merge creativity and intelligence in everything we build.
              </p>
            </div>
            
            <div className="flex items-center mb-6">
              <motion.div 
                className="w-20 h-1 bg-mindexa-purple mr-4"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="text-xl font-medium">Core Values</p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-mindexa-blue mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Mindexa Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -left-6 w-1/2 aspect-square bg-mindexa-purple/10 rounded-lg z-[-1]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div 
              className="absolute -top-6 -right-6 w-1/2 aspect-square bg-mindexa-blue/10 rounded-lg z-[-1]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
