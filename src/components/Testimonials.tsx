
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
import { motion } from 'framer-motion';

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="max-w-md mx-auto w-full">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
          title="Client Testimonial"
        />
      </AspectRatio>
    </div>
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
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-mindexa-blue to-mindexa-purple bg-clip-text text-transparent">
            What our satisfied customers are saying about us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Hear directly from our clients about their experience working with Mindexa
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <YouTubeEmbed videoId={testimonial.videoId} />
                      <motion.div 
                        className="mt-4 text-center sm:text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-gray-700 text-base sm:text-lg italic">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-3">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex lg:-left-12" />
            <CarouselNext className="hidden sm:flex lg:-right-12" />
          </Carousel>
        </motion.div>
        
        {/* Stat Card */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-mindexa-yellow/10 border-none max-w-md mx-auto hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="text-center">
                <motion.p 
                  className="text-5xl font-bold text-mindexa-orange mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  91%
                </motion.p>
                <p className="text-gray-700">
                  of our clients report exceeding their expected ROI within the first year
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
