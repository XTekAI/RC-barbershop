import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLang } from '../lib/i18n';
import { BUSINESS } from '../lib/business';

const reviews = [
  { author: 'Matt Wyszynski', when: '2 years ago', text: "Rafi and Chicho have been cutting my hair for years and I would never consider going anywhere else. Their teams attention to detail is second to none. They always take their time to make sure I leave looking fresh!" },
  { author: 'Lamar Hicks', when: '2 years ago', text: "This establishment has an awesome team of barbers. I have a preferred barber, but if busy would feel comfortable with any of the available barbers 😊." },
  { author: 'H K', when: 'a month ago', text: "Bro I'm From Philly & I think. Trenton has the best Barbers Amazing 💯 💯 👌" },
  { author: 'Julio Cesar Castillo del Cid', when: '3 months ago', text: "Es la mejor." },
];

const Reviews: React.FC = () => {
  const { t } = useLang();
  return (
  <section id="reviews" className="py-24 bg-zinc-950">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-2">{t('reviews_eyebrow')}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">{t('reviews_title')}</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="relative bg-black border border-zinc-800 hover:border-gold transition-colors duration-500 p-8"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
            <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="w-4 h-4 fill-current text-gold" />
              ))}
            </div>
            <blockquote className="text-gray-300 leading-relaxed mb-6">“{r.text}”</blockquote>
            <figcaption className="flex justify-between text-sm">
              <span className="text-white font-semibold">{r.author}</span>
              <span className="text-gray-500">{r.when}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-gold text-gold text-sm font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all"
        >
          {t('all_reviews')}
        </a>
      </div>
    </div>
  </section>
  );
};

export default Reviews;
