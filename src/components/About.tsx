
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and technology."
    },
    {
      title: "Excellence",
      description: "We're committed to delivering the highest quality solutions to our clients."
    },
    {
      title: "Integrity",
      description: "We operate with transparency and ethical principles in all our endeavors."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Mindexa</h2>
            <p className="text-lg text-gray-700 mb-6">
              Mindexa is a forward-thinking technology company specializing in AI-driven solutions that help businesses transform their operations.
              We deliver innovative artificial intelligence and machine learning solutions that drive efficiency, 
              insight, and growth for organizations of all sizes across multiple industries.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experts combines deep technical knowledge with strategic business acumen to develop
              custom-tailored solutions that address your unique challenges and opportunities.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="w-20 h-1 bg-mindexa-purple mr-4"></div>
              <p className="text-xl font-medium">Our Core Values</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="bg-white border-none shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-mindexa-blue mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Mindexa Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-1/2 aspect-square bg-mindexa-purple/10 rounded-lg z-[-1]"></div>
            <div className="absolute -top-6 -right-6 w-1/2 aspect-square bg-mindexa-blue/10 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
