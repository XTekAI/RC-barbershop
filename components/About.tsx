import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../lib/i18n';


const About: React.FC = () => {
  const { t } = useLang();
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
              alt="Barber giving a precision haircut at R&C Barbershop in Trenton, NJ" loading="lazy" 
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
              {t('about_eyebrow')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about_title_1')} <br/> {t('about_title_2')}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {t('about_p1')}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('about_p2')}
            </p>
            
            <div className="flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">5k+</span>
                <span className="text-gold text-xs uppercase tracking-wider">{t('happy_clients')}</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">10+</span>
                <span className="text-gold text-xs uppercase tracking-wider">{t('years_exp')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;