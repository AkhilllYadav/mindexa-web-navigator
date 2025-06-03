
import React from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMode } from '@/contexts/ModeContext';

const ModeToggle = () => {
  const { mode, setMode } = useMode();

  return (
    <motion.div 
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-md rounded-full p-1 shadow-lg border"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-1">
        <Button
          variant={mode === 'creative' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setMode('creative')}
          className={`rounded-full px-4 py-2 text-sm transition-all ${
            mode === 'creative' 
              ? 'bg-mindexa-purple text-white' 
              : 'text-gray-600 hover:text-mindexa-purple'
          }`}
        >
          <Palette className="h-4 w-4 mr-1" />
          Creative
        </Button>
        <Button
          variant={mode === 'ai' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setMode('ai')}
          className={`rounded-full px-4 py-2 text-sm transition-all ${
            mode === 'ai' 
              ? 'bg-mindexa-blue text-white' 
              : 'text-gray-600 hover:text-mindexa-blue'
          }`}
        >
          <Code className="h-4 w-4 mr-1" />
          AI & Software
        </Button>
      </div>
    </motion.div>
  );
};

export default ModeToggle;
