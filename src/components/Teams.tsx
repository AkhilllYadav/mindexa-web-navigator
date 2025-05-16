
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <div className="flex items-center space-x-4 mb-3">
      <Avatar className="h-10 w-10 border border-gray-200">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="bg-gradient-to-r from-mindexa-purple/20 to-mindexa-blue/20 text-mindexa-purple font-medium">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-medium text-sm">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
};

interface TeamDepartmentProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  members: Array<{
    name: string;
    role: string;
    image: string;
  }>;
  color: string;
  bgColor: string;
}

const TeamDepartment = ({ name, description, icon, members, color, bgColor }: TeamDepartmentProps) => {
  return (
    <Card className="border-none rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className={`mr-3 p-2 rounded-lg ${bgColor} ${color}`}>
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <Badge variant="outline" className="text-xs mt-1 bg-gray-50 font-normal">
              {members.length} team members
            </Badge>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-6">{description}</p>
        
        <div className="border-t pt-4 mb-4">
          {members.map((member, index) => (
            <TeamMember 
              key={index} 
              name={member.name} 
              role={member.role} 
              image={member.image} 
            />
          ))}
        </div>
        
        <Button 
          size="sm" 
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-mindexa-blue to-mindexa-purple text-white hover:opacity-90"
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
      members: [
        {
          name: "Jennifer Smith",
          role: "Automation Lead",
          image: "/placeholder.svg"
        },
        {
          name: "Robert Chen",
          role: "Process Engineer",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      name: "Mindexa AI/ML",
      description: "Experts in artificial intelligence and machine learning model development.",
      icon: <Rocket size={22} />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      members: [
        {
          name: "Sarah Johnson",
          role: "Head of AI Research",
          image: "/placeholder.svg"
        },
        {
          name: "Michael Lee",
          role: "ML Engineer",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      name: "Mindexa Analytics",
      description: "Specialized in data analytics, visualization, and business intelligence.",
      icon: <BarChart size={22} />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      members: [
        {
          name: "Emily Rodriguez",
          role: "Data Scientist",
          image: "/placeholder.svg"
        },
        {
          name: "Alex Wong",
          role: "Analytics Specialist",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      name: "Mindexa Dev",
      description: "Custom software development team building solutions for clients.",
      icon: <Code size={22} />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      members: [
        {
          name: "Michael Chen",
          role: "Lead Developer",
          image: "/placeholder.svg"
        },
        {
          name: "Sophia Park",
          role: "Frontend Developer",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      name: "Mindexa Integrate",
      description: "Specialists in systems integration and enterprise software solutions.",
      icon: <Database size={22} />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      members: [
        {
          name: "David Kim",
          role: "Integration Specialist",
          image: "/placeholder.svg"
        },
        {
          name: "Lisa Johnson",
          role: "Systems Architect",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      name: "Mindexa Cloud",
      description: "Cloud infrastructure and SaaS product development specialists.",
      icon: <Cloud size={22} />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      members: [
        {
          name: "James Wilson",
          role: "Cloud Architect",
          image: "/placeholder.svg"
        },
        {
          name: "Nina Patel",
          role: "SaaS Specialist",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      name: "Mindexa Growth",
      description: "Marketing, customer success, and business development team.",
      icon: <Users size={22} />,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      members: [
        {
          name: "Thomas Garcia",
          role: "Marketing Director",
          image: "/placeholder.svg"
        },
        {
          name: "Rebecca Taylor",
          role: "Customer Success Lead",
          image: "/placeholder.svg"
        }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-mindexa-blue to-mindexa-purple bg-clip-text text-transparent">
            Meet the creative minds behind Mindexa
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Mindexa, we organize our talent into specialized teams to deliver cutting-edge solutions across every aspect of digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamDepartments.map((department, index) => (
            <TeamDepartment
              key={index}
              name={department.name}
              description={department.description}
              icon={department.icon}
              members={department.members}
              color={department.color}
              bgColor={department.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
