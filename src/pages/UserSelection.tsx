
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMode } from '@/contexts/ModeContext';
import { useNavigate } from 'react-router-dom';

const UserSelection = () => {
  const { setMode } = useMode();
  const navigate = useNavigate();

  const handleModeSelection = (selectedMode: 'creative' | 'ai') => {
    setMode(selectedMode);
    navigate('/dashboard');
  };

  const userTypes = [
    {
      id: 'creative',
      title: 'Creative Professional',
      subtitle: 'Designer, Marketer, Brand Builder',
      description: 'I need stunning visuals, brand identity, and creative campaigns that captivate audiences.',
      icon: <Palette className="h-12 w-12 text-mindexa-purple" />,
      color: 'from-mindexa-purple to-mindexa-pink',
      bgColor: 'bg-purple-50',
      borderColor: 'border-mindexa-purple',
      features: [
        'Branding & Identity Design',
        'UI/UX Design',
        'Creative Campaigns',
        'Visual Content Production'
      ]
    },
    {
      id: 'ai',
      title: 'Tech Innovator',
      subtitle: 'Developer, Entrepreneur, Business Owner',
      description: 'I need custom software, AI solutions, and technology that scales my business.',
      icon: <Code className="h-12 w-12 text-mindexa-blue" />,
      color: 'from-mindexa-blue to-mindexa-indigo',
      bgColor: 'bg-blue-50',
      borderColor: 'border-mindexa-blue',
      features: [
        'Custom Software Development',
        'AI & Machine Learning',
        'Data Analytics',
        'Cloud Infrastructure'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img 
            src="/lovable-uploads/e469623c-9926-493b-9978-9ff0be2be4c0.png" 
            alt="Mindexa Logo" 
            className="h-16 w-auto mx-auto mb-6" 
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to Mindexa
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us what brings you here so we can tailor your experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {userTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className={`${type.bgColor} border-2 ${type.borderColor} hover:shadow-xl transition-all duration-300 h-full cursor-pointer`}>
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="inline-block mb-4"
                    >
                      {type.icon}
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{type.title}</h2>
                    <p className="text-gray-600 font-medium">{type.subtitle}</p>
                  </div>

                  <p className="text-gray-700 text-center mb-6 flex-grow">
                    {type.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-center">What we offer:</h3>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-current rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => handleModeSelection(type.id as 'creative' | 'ai')}
                    className={`w-full bg-gradient-to-r ${type.color} text-white hover:shadow-lg transition-all group py-6 text-lg font-semibold`}
                  >
                    <motion.span
                      className="inline-flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Choose This Path
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            Don't worry - you can always switch between modes later
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default UserSelection;
