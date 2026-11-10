import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import Button from './Button';
import { bookHref } from '../lib/business';


const services = [
  { name: 'Regular Haircut', es: 'Corte regular', price: '$35', time: '30 min' },
  { name: 'Fade', es: 'Desvanecido', price: '$30', time: '35 min' },
  { name: 'Fade & Blowout', es: 'Fade y blowout', price: '$30', time: '30 min' },
  { name: 'Haircut + Beard', es: 'Corte + barba', price: '$40', time: '40 min' },
  { name: 'Haircut + Eyebrows', es: 'Corte + cejas', price: '$40', time: '40 min' },
  { name: 'Hair + Beard + Eyebrows', es: 'Cabello + barba + cejas', price: '$45', time: '45 min' },
  { name: 'Kids Cut (10 & under)', es: 'Niños (10 años o menos)', price: '$30', time: '35 min' },
  { name: 'Veteran & Senior (62+)', es: 'Veterano y senior (62+)', price: '$25', time: '30 min' },
  { name: 'Beard Trim', es: 'Barba', price: '$20', time: '30 min' },
  { name: 'Shape Up', es: 'Forma', price: '$20', time: '15 min' },
  { name: 'Beard Tint', es: 'Tinte de barba', price: '$15', time: '15 min' },
  { name: 'Eyebrows', es: 'Cejas', price: '$10', time: '20 min' },
  { name: 'Designs', es: 'Diseños', price: 'From $10', time: '30 min' },
];

const Services: React.FC = () => {
  const { t, lang } = useLang();
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
            {t('services_eyebrow')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            {t('services_title')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={bookHref()}
              aria-label={`${t('book_now')}: ${lang === 'es' ? service.es : service.name}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.05, duration: 0.5 }}
              className="group block cursor-pointer"
            >
              <div className="flex justify-between items-baseline mb-2 border-b border-zinc-800 pb-2 group-hover:border-gold transition-colors duration-500">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white group-hover:text-gold transition-colors duration-300">
                  {lang === 'es' ? service.es : service.name}
                </h3>
                <span className="text-xl font-bold text-gold">{service.price.replace('From', t('from'))}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span className="italic">{lang === 'es' ? service.name : service.es}</span>
                <span>{service.time}</span>
              </div>
              <span className="inline-block mt-3 text-xs font-bold uppercase tracking-widest text-gold opacity-70 group-hover:opacity-100 transition-opacity">
                {t('book_now')} →
              </span>
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button href={bookHref()}>{t('book_now')}</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;