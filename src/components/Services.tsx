
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Brain, BarChart3, Code, RefreshCw, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, color, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
    >
      <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 h-full">
        <CardContent className="p-6 flex flex-col items-center text-center h-full">
          <motion.div 
            className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${color}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "AI & Automation",
      description: "Automate repetitive tasks and workflows with our intelligent automation solutions designed for enterprise scale.",
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-100"
    },
    {
      title: "AI/ML Development",
      description: "Custom AI and machine learning models tailored to your specific business needs with enterprise-grade security.",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-100"
    },
    {
      title: "Data Analytics",
      description: "Transform your enterprise data into actionable insights with advanced analytics solutions and real-time dashboards.",
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      color: "bg-green-100"
    },
    {
      title: "Custom Software",
      description: "Bespoke enterprise software solutions designed to address your unique challenges with scalable architecture.",
      icon: <Code className="h-8 w-8 text-yellow-600" />,
      color: "bg-yellow-100"
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing enterprise systems with minimal disruption to workflows.",
      icon: <RefreshCw className="h-8 w-8 text-red-600" />,
      color: "bg-red-100"
    },
    {
      title: "SaaS Products",
      description: "Enterprise-ready cloud-based software solutions that scale with your business needs and comply with industry standards.",
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      color: "bg-indigo-100"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-mindexa-purple font-semibold text-sm uppercase tracking-wider mb-2 inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Solutions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer a comprehensive range of AI and technology services to help your enterprise innovate and grow in today's competitive landscape.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
