
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const CaseStudyCard = ({ title, description, image, category }: CaseStudyProps) => {
  return (
    <Card className="overflow-hidden h-full">
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
        <Button variant="outline" className="mt-2">
          View Case Study
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
      category: "Small Business"
    },
    {
      title: "Enterprise AI Implementation",
      description: "Implementing AI solutions for a Fortune 500 company to streamline operations.",
      image: "/placeholder.svg",
      category: "Enterprise"
    },
    {
      title: "Healthcare Innovation Platform",
      description: "Building an AI-powered platform for patient data analysis and treatment recommendations.",
      image: "/placeholder.svg",
      category: "Healthcare"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
