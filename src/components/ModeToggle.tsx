
import React from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMode } from '@/contexts/ModeContext';

const ModeToggle = () => {
  const { mode, setMode } = useMode();

  return (
    <motion.div 
      className="fixed top-20 sm:top-24 lg:top-28 right-2 sm:right-4 z-40 bg-white/95 backdrop-blur-md rounded-full p-1 shadow-lg border"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-1">
        <Button
          variant={mode === 'creative' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setMode('creative')}
          className={`rounded-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition-all ${
            mode === 'creative' 
              ? 'bg-mindexa-purple text-white' 
              : 'text-gray-600 hover:text-mindexa-purple'
          }`}
        >
          <Palette className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
          <span className="hidden sm:inline">Creative</span>
        </Button>
        <Button
          variant={mode === 'ai' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setMode('ai')}
          className={`rounded-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition-all ${
            mode === 'ai' 
              ? 'bg-mindexa-blue text-white' 
              : 'text-gray-600 hover:text-mindexa-blue'
          }`}
        >
          <Code className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
          <span className="hidden sm:inline">AI & Software</span>
        </Button>
      </div>
    </motion.div>
  );
};

export default ModeToggle;
