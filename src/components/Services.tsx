
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "AI & Automation",
      description: "Automate repetitive tasks and workflows with our intelligent automation solutions.",
      icon: "🤖",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "AI/ML Development",
      description: "Custom AI and machine learning models tailored to your specific business needs.",
      icon: "🧠",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      icon: "📊",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Custom Software",
      description: "Bespoke software solutions designed to address your unique challenges.",
      icon: "💻",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      icon: "🔄",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "SaaS Products",
      description: "Cloud-based software solutions that scale with your business needs.",
      icon: "☁️",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
