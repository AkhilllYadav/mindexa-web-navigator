
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Declare the global Tally object to fix TypeScript errors
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    }
  }
}

const Contact = () => {
  const faqs = [
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary based on the complexity of the solution and your existing infrastructure. Typically, our projects range from 4-12 weeks for initial deployment."
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer: "Yes, we provide comprehensive support and maintenance packages to ensure your AI solutions continue to perform optimally and evolve with your business needs."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have experience across multiple industries including healthcare, finance, retail, manufacturing, and education, with specialized expertise in each sector."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, our solutions are designed to integrate seamlessly with your existing tech stack. We'll conduct a thorough assessment before implementation to ensure compatibility."
    }
  ];

  React.useEffect(() => {
    // Initialize Tally form
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    script.onload = () => {
      if (window.Tally !== undefined) {
        window.Tally.loadEmbeds();
      } else {
        // Use type assertion to safely access properties
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
          const iframe = e as HTMLIFrameElement;
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    };
    
    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Got questions?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            We've got answers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* FAQ Section */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Form - Tally.so Embed */}
          <div>
            <Card>
              <CardContent className="p-6">
                <iframe 
                  data-tally-src="https://tally.so/embed/3xBQvr?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height={927} 
                  frameBorder="0" 
                  title="Contact form"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
