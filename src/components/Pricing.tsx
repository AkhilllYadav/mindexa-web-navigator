
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "default" | "outline";
  className?: string;
}

const PricingPlan = ({
  title,
  price,
  description,
  features,
  isPopular,
  buttonText,
  buttonVariant,
  className,
}: PricingPlanProps) => {
  return (
    <Card className={`relative ${className}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-mindexa-purple text-white py-1 px-4 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500 ml-2">/month</span>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pick the plan that fits your skill up</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingPlan
            title="Standard Plan"
            price="$2500"
            description="Perfect for small businesses just getting started with AI"
            features={[
              "AI Consultation",
              "Basic Automation",
              "Data Analysis",
              "1 Custom AI Solution",
              "Technical Support"
            ]}
            buttonText="Get Started"
            buttonVariant="outline"
            className="bg-mindexa-yellow/10"
          />
          
          <PricingPlan
            title="Enterprise Plan"
            price="$5000"
            description="Complete solution for businesses ready to fully embrace AI"
            features={[
              "Everything in Standard",
              "Advanced AI Integration",
              "Custom ML Models",
              "Unlimited Solutions",
              "24/7 Priority Support",
              "Dedicated AI Consultant"
            ]}
            isPopular={true}
            buttonText="Contact Us"
            buttonVariant="default"
            className="bg-mindexa-purple text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
