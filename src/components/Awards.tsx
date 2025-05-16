
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Awards = () => {
  const awards = [
    {
      title: "Best AI Innovation",
      year: "2024",
      organization: "Tech Excellence Awards",
      icon: "🏆"
    },
    {
      title: "Top ML Solution Provider",
      year: "2023",
      organization: "AI Business Journal",
      icon: "🥇"
    },
    {
      title: "Emerging Tech Leader",
      year: "2023",
      organization: "Digital Transformation Forum",
      icon: "⭐"
    },
    {
      title: "Best SaaS Platform",
      year: "2022",
      organization: "Cloud Computing Awards",
      icon: "☁️"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our commitment to excellence and innovation has been recognized by leading industry organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="font-bold text-xl mb-2">{award.title}</h3>
                <p className="text-mindexa-purple font-semibold mb-1">{award.year}</p>
                <p className="text-gray-600 text-sm">{award.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
