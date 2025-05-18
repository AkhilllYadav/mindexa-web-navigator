
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
        title="Client Testimonial"
      />
    </AspectRatio>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-mindexa-blue to-mindexa-purple bg-clip-text text-transparent">
            What our satisfied customers are saying about us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Hear directly from our clients about their experience working with Mindexa
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Testimonial with Video */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-white border-none shadow-sm">
              <CardContent className="p-6">
                <YouTubeEmbed videoId="dQw4w9WgXcQ" />
                <div className="mt-4">
                  <p className="text-gray-700 text-lg italic">
                    "Mindexa's AI solutions have transformed how we operate, increasing our efficiency by 40% and 
                    helping us make better data-driven decisions."
                  </p>
                  <div className="mt-3">
                    <p className="font-semibold">Emily Chen</p>
                    <p className="text-gray-500">CTO, Tech Innovations Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Stat Card */}
          <div>
            <Card className="h-full bg-mindexa-yellow/10 border-none">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-5xl font-bold text-mindexa-orange mb-2">91%</p>
                  <p className="text-gray-700">
                    of our clients report exceeding their expected ROI within the first year
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second row - Split into two videos */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video Testimonial 1 */}
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <YouTubeEmbed videoId="C0DPdy98e4c" />
                  <div className="mt-4">
                    <p className="text-gray-700">
                      "Mindexa Design Agency brought our ideas to life with exceptional creativity and precision."
                    </p>
                    <div className="mt-3">
                      <p className="font-semibold">Michael Johnson</p>
                      <p className="text-gray-500">Marketing Director, Global Solutions Ltd</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Video Testimonial 2 */}
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <YouTubeEmbed videoId="jNQXAC9IVRw" />
                  <div className="mt-4">
                    <p className="text-gray-700">
                      "Working with Mindexa has been transformational for our business processes and customer experience."
                    </p>
                    <div className="mt-3">
                      <p className="font-semibold">Sarah Williams</p>
                      <p className="text-gray-500">COO, Future Technologies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
