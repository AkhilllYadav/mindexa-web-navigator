
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Brain, BarChart3, Code, RefreshCw, Cloud } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "AI & Automation",
      description: "Automate repetitive tasks and workflows with our intelligent automation solutions.",
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-100"
    },
    {
      title: "AI/ML Development",
      description: "Custom AI and machine learning models tailored to your specific business needs.",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-100"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      color: "bg-green-100"
    },
    {
      title: "Custom Software",
      description: "Bespoke software solutions designed to address your unique challenges.",
      icon: <Code className="h-8 w-8 text-yellow-600" />,
      color: "bg-yellow-100"
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      icon: <RefreshCw className="h-8 w-8 text-red-600" />,
      color: "bg-red-100"
    },
    {
      title: "SaaS Products",
      description: "Cloud-based software solutions that scale with your business needs.",
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      color: "bg-indigo-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer a comprehensive range of AI and technology services to help your business innovate and grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
