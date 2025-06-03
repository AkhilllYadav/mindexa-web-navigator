
import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      value: "$40K+",
      label: "Average ROI Delivered",
      color: "text-mindexa-blue"
    },
    {
      value: "15+",
      label: "Expert Team Members", 
      color: "text-mindexa-purple"
    },
    {
      value: "12+",
      label: "Years of Experience",
      color: "text-mindexa-indigo"
    }
  ];

  return (
    <section id="stats" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Stats That Matter</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Numbers that reflect our commitment to delivering exceptional results for our clients.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className={`text-3xl sm:text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
