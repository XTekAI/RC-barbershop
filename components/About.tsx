import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold z-0 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold z-0 hidden md:block"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Barber working" 
              className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-2 block">
              The Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More Than Just <br/> A Haircut
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              RC Barbershop was founded on the principles of quality, community, and consistency. 
              We believe that a haircut is a ritual, a moment to pause, relax, and reset.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our barbers are masters of their craft, blending traditional techniques with modern styles 
              to ensure every client walks out looking and feeling their absolute best.
            </p>
            
            <div className="flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">5k+</span>
                <span className="text-gold text-xs uppercase tracking-wider">Happy Clients</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">10+</span>
                <span className="text-gold text-xs uppercase tracking-wider">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;