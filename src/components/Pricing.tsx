
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Check } from 'lucide-react';

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
              <Check className="w-5 h-5 mr-2 text-green-500" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pick the plan that fits your needs</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer flexible pricing options to accommodate businesses of all sizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingPlan
            title="Starter"
            price="$40"
            description="Perfect for small businesses just getting started"
            features={[
              "AI Consultation",
              "Basic Automation",
              "Data Analysis",
              "1 Custom AI Solution",
              "Technical Support"
            ]}
            buttonText="Get Started"
            buttonVariant="outline"
          />
          
          <PricingPlan
            title="Professional"
            price="$15"
            description="Ideal for growing businesses with specific needs"
            features={[
              "Everything in Starter",
              "Advanced AI Integration",
              "Custom ML Models",
              "3 Custom Solutions",
              "Priority Support",
              "Quarterly Strategy Reviews"
            ]}
            isPopular={true}
            buttonText="Choose Plan"
            buttonVariant="default"
            className="border-mindexa-purple"
          />
          
          <PricingPlan
            title="Enterprise"
            price="$12"
            description="Complete solution for businesses ready to fully embrace AI"
            features={[
              "Everything in Professional",
              "Full AI Ecosystem",
              "Unlimited Solutions",
              "24/7 Premium Support",
              "Dedicated AI Consultant",
              "Monthly Strategy Reviews"
            ]}
            buttonText="Contact Us"
            buttonVariant="outline"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
