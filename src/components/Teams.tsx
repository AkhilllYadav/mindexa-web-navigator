
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  department: string;
}

const TeamMember = ({ name, role, image, department }: TeamMemberProps) => {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{role}</p>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-mindexa-purple/10 text-mindexa-purple">
          {department}
        </span>
      </CardContent>
    </Card>
  );
};

const Teams = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Head of AI Research",
      image: "/placeholder.svg",
      department: "Mindexa AI/ML"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/placeholder.svg",
      department: "Mindexa Dev"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      image: "/placeholder.svg",
      department: "Mindexa Analytics"
    },
    {
      name: "David Kim",
      role: "Integration Specialist",
      image: "/placeholder.svg",
      department: "Mindexa Integrate"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our diverse team of professionals brings expertise from various fields to deliver cutting-edge AI solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              department={member.department}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
