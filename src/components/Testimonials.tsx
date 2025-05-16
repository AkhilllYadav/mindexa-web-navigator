
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What our satisfied customers are saying about us</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Testimonial */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-gray-900 text-white">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <p className="text-gray-300 mb-6 text-lg italic">
                    "Mindexa's AI solutions have transformed how we operate, increasing our efficiency by 40% and 
                    helping us make better data-driven decisions. Their team's expertise and support were exceptional throughout the project."
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold">Emily Chen</p>
                    <p className="text-gray-400">CTO, Tech Innovations Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Stat Card */}
          <div>
            <Card className="h-full bg-mindexa-yellow/10">
              <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-5xl font-bold text-mindexa-orange mb-2">91%</p>
                  <p className="text-gray-700">
                    of our clients report exceeding their expected ROI within the first year
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second row */}
          <div className="lg:col-span-3">
            <Card className="bg-white border border-gray-100">
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  "Mindexa Design Agency brought our ideas to life with exceptional creativity and precision, exceeding 
                  expectations."
                </p>
                <div>
                  <p className="font-semibold">Michael Johnson</p>
                  <p className="text-gray-500">Marketing Director, Global Solutions Ltd</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
