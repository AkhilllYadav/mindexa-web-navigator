
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Layers, 
  Code, 
  BarChart, 
  Database, 
  Cloud, 
  Rocket, 
  Users,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

const TeamDepartment = ({ name, description, icon, color, bgColor, image }) => {
  return (
    <Card className="border-none rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className={`mr-3 p-2 rounded-lg ${bgColor} ${color}`}>
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <Badge variant="outline" className="text-xs mt-1 bg-gray-50 font-normal">
              Expert Team
            </Badge>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-6">{description}</p>
        
        <Button 
          size="sm" 
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-mindexa-blue to-mindexa-purple text-white hover:opacity-90"
          onClick={() => window.open("https://tally.so/r/3xBQvr", "_blank")}
        >
          <Calendar className="h-4 w-4" /> 
          Schedule Meeting
        </Button>
      </CardContent>
    </Card>
  );
};

const Teams = () => {
  const teamDepartments = [
    {
      name: "Mindexa Automate",
      description: "Specialists in automation solutions to streamline business operations and processes.",
      icon: <Layers size={22} />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Mindexa AI/ML",
      description: "Experts in artificial intelligence and machine learning model development.",
      icon: <Rocket size={22} />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Mindexa Analytics",
      description: "Specialized in data analytics, visualization, and business intelligence.",
      icon: <BarChart size={22} />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Mindexa Dev",
      description: "Custom software development team building solutions for clients.",
      icon: <Code size={22} />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Mindexa Integrate",
      description: "Specialists in systems integration and enterprise software solutions.",
      icon: <Database size={22} />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Mindexa Cloud",
      description: "Cloud infrastructure and SaaS product development specialists.",
      icon: <Cloud size={22} />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      image: "https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Mindexa Growth",
      description: "Marketing, customer success, and business development team.",
      icon: <Users size={22} />,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="teams" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-mindexa-blue to-mindexa-purple bg-clip-text text-transparent">
            Meet the creative minds behind Mindexa
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Mindexa, we organize our talent into specialized teams to deliver cutting-edge solutions across every aspect of digital transformation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamDepartments.map((department, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamDepartment
                name={department.name}
                description={department.description}
                icon={department.icon}
                color={department.color}
                bgColor={department.bgColor}
                image={department.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
