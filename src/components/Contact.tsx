
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" placeholder="john@example.com" type="email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-1 text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-mindexa-blue to-mindexa-purple text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
