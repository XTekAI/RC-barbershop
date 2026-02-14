import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Waves from './Waves';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Waves */}
      <div className="absolute inset-0 z-0">
        <Waves 
          strokeColor="#D4AF37" 
          backgroundColor="#000000" 
          className="opacity-50"
        />
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center pointer-events-none">
        <div className="pointer-events-auto inline-block">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <span className="block text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-semibold">
                Established 2024
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Precision <span className="text-gold">&</span> <br />
                Style
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
                Experience the art of traditional grooming with a modern touch. 
                At RC Barbershop, we don't just cut hair; we cultivate confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Book Appointment</Button>
                <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                View Services
                </Button>
            </div>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;