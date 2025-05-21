
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Awards = () => {
  const awards = [
    {
      title: "Best Enterprise AI Innovation",
      year: "2024",
      organization: "Tech Excellence Awards",
      icon: "🏆"
    },
    {
      title: "Top Enterprise ML Solution Provider",
      year: "2023",
      organization: "AI Business Journal",
      icon: "🥇"
    },
    {
      title: "Enterprise Tech Leader",
      year: "2023",
      organization: "Digital Transformation Forum",
      icon: "⭐"
    },
    {
      title: "Best Enterprise SaaS Platform",
      year: "2022",
      organization: "Cloud Computing Awards",
      icon: "☁️"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="awards" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-mindexa-purple font-semibold text-sm uppercase tracking-wider mb-2 inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Industry Recognition
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Awards & Recognition</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our commitment to excellence and innovation has been recognized by leading industry organizations and enterprise partners.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-all h-full bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <motion.div 
                    className="text-4xl mb-4 bg-gradient-to-r from-mindexa-blue to-mindexa-purple p-4 rounded-full"
                    whileHover={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {award.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl mb-2">{award.title}</h3>
                  <p className="text-mindexa-purple font-semibold mb-1">{award.year}</p>
                  <p className="text-gray-600 text-sm">{award.organization}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
