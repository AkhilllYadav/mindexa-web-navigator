
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

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
  const testimonials = [
    {
      videoId: "dQw4w9WgXcQ",
      quote: "Mindexa's AI solutions have transformed how we operate, increasing our efficiency by 40% and helping us make better data-driven decisions.",
      name: "Emily Chen",
      role: "CTO, Tech Innovations Inc."
    },
    {
      videoId: "C0DPdy98e4c",
      quote: "Mindexa Design Agency brought our ideas to life with exceptional creativity and precision.",
      name: "Michael Johnson",
      role: "Marketing Director, Global Solutions Ltd"
    },
    {
      videoId: "jNQXAC9IVRw",
      quote: "Working with Mindexa has been transformational for our business processes and customer experience.",
      name: "Sarah Williams",
      role: "COO, Future Technologies"
    },
  ];
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-mindexa-blue to-mindexa-purple bg-clip-text text-transparent">
            What our satisfied customers are saying about us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Hear directly from our clients about their experience working with Mindexa
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-5xl mx-auto px-10">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <Card className="bg-white border-none shadow-sm">
                    <CardContent className="p-6">
                      <YouTubeEmbed videoId={testimonial.videoId} />
                      <div className="mt-4">
                        <p className="text-gray-700 text-lg italic">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-3">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="lg:-left-12" />
            <CarouselNext className="lg:-right-12" />
          </Carousel>
        </div>
        
        {/* Stat Card */}
        <div className="mt-12">
          <Card className="bg-mindexa-yellow/10 border-none max-w-md mx-auto">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-mindexa-orange mb-2">91%</p>
                <p className="text-gray-700">
                  of our clients report exceeding their expected ROI within the first year
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
