
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  category: string;
  result: string;
  index: number;
}

const CaseStudyCard = ({ title, description, image, category, result, index }: CaseStudyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
        <motion.div 
          className="h-48 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </motion.div>
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-sm text-mindexa-blue font-medium mb-2">{category}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <motion.div 
              className="p-3 bg-gray-50 rounded-lg mb-4"
              whileHover={{ backgroundColor: 'rgba(138, 43, 226, 0.05)' }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-medium">Result: <span className="text-mindexa-purple">{result}</span></p>
            </motion.div>
            <Button variant="ghost" className="group">
              View Case Study 
              <motion.span
                className="ml-2 inline-flex"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "How we transformed a small business's entire presence",
      description: "Helping a local business go digital with custom AI solutions and automation.",
      image: "/placeholder.svg",
      category: "Small Business",
      result: "40% increase in operational efficiency"
    },
    {
      title: "Enterprise AI Implementation",
      description: "Implementing AI solutions for a Fortune 500 company to streamline operations.",
      image: "/placeholder.svg",
      category: "Enterprise",
      result: "65% reduction in process time"
    },
    {
      title: "Healthcare Innovation Platform",
      description: "Building an AI-powered platform for patient data analysis and treatment recommendations.",
      image: "/placeholder.svg",
      category: "Healthcare",
      result: "89% accuracy in diagnostics prediction"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Studies</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results with our AI solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              description={study.description}
              image={study.image}
              category={study.category}
              result={study.result}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
