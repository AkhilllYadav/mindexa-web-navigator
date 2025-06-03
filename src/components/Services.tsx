
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Brain, BarChart3, Code, RefreshCw, Cloud, Palette, Smartphone, Megaphone, Globe, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMode } from '@/contexts/ModeContext';

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
  const { mode } = useMode();

  const creativeServices = [
    {
      title: "Branding & Identity Design",
      description: "We create logos, brand systems, and visual identities that stand out.",
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-100"
    },
    {
      title: "UI/UX Design for Web & Mobile",
      description: "User-focused, beautiful interfaces that are intuitive and impactful.",
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-100"
    },
    {
      title: "Creative Strategy & Campaigns",
      description: "Messaging, visuals, and digital campaigns that resonate and convert.",
      icon: <Megaphone className="h-8 w-8 text-pink-600" />,
      color: "bg-pink-100"
    },
    {
      title: "Website Design & Development",
      description: "Fully responsive, visually rich websites with seamless performance.",
      icon: <Globe className="h-8 w-8 text-green-600" />,
      color: "bg-green-100"
    },
    {
      title: "Content & Visual Production",
      description: "Copywriting, motion graphics, animations, and video storytelling.",
      icon: <Camera className="h-8 w-8 text-orange-600" />,
      color: "bg-orange-100"
    }
  ];

  const aiServices = [
    {
      title: "AI & Automation",
      description: "Automate tasks and streamline workflows using intelligent automation.",
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-100"
    },
    {
      title: "AI/ML Development",
      description: "Custom machine learning models tailored for real business challenges.",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-100"
    },
    {
      title: "Data Analytics & Dashboards",
      description: "Real-time insights, predictive analytics, and performance tracking.",
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      color: "bg-green-100"
    },
    {
      title: "Custom Software Development",
      description: "Scalable web and mobile applications for startups and enterprises.",
      icon: <Code className="h-8 w-8 text-yellow-600" />,
      color: "bg-yellow-100"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "Secure, scalable, and optimized deployment for modern businesses.",
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      color: "bg-indigo-100"
    }
  ];

  const services = mode === 'creative' ? creativeServices : aiServices;
  const sectionTitle = mode === 'creative' ? 'Creative Services' : 'AI & Software Solutions';

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
            key={mode}
            className={`font-semibold text-sm uppercase tracking-wider mb-2 inline-block ${
              mode === 'creative' ? 'text-mindexa-purple' : 'text-mindexa-blue'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{sectionTitle}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {mode === 'creative' 
              ? 'We create visual experiences and brand strategies that captivate audiences and drive meaningful connections.'
              : 'We offer cutting-edge AI and technology services to help your business innovate and scale in today\'s digital landscape.'
            }
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={`${mode}-${index}`}
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
