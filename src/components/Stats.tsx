
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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stats That Matter</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Numbers that reflect our commitment to delivering exceptional results for our clients.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className={`text-4xl md:text-5xl font-bold ${stat.color}`}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
