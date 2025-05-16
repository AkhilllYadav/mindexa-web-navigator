
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  category: string;
  result: string;
}

const CaseStudyCard = ({ title, description, image, category, result }: CaseStudyProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-mindexa-blue font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="p-3 bg-gray-50 rounded-lg mb-4">
          <p className="font-medium">Result: <span className="text-mindexa-purple">{result}</span></p>
        </div>
        <Button variant="ghost" className="group">
          View Case Study 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Studies</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results with our AI solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              description={study.description}
              image={study.image}
              category={study.category}
              result={study.result}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
