import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { name: 'The Classic Cut', price: '$35', description: 'Precision scissor cut finished with a hot towel.' },
  { name: 'Skin Fade', price: '$40', description: 'Seamless fade with foil shaver finish.' },
  { name: 'Beard Sculpting', price: '$25', description: 'Trim, shape, and outline with razor finish.' },
  { name: 'The RC Experience', price: '$60', description: 'Haircut, beard trim, hot towel, and face massage.' },
  { name: 'Head Shave', price: '$30', description: 'Hot towel straight razor shave for a smooth finish.' },
  { name: 'Kids Cut', price: '$25', description: 'For the little gentlemen (under 12).' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-2"
          >
            Our Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Premium Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="flex justify-between items-baseline mb-2 border-b border-zinc-800 pb-2 group-hover:border-gold transition-colors duration-500">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white group-hover:text-gold transition-colors duration-300">
                  {service.name}
                </h3>
                <span className="text-xl font-bold text-gold">{service.price}</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;