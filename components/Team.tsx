import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import { bookHref } from '../lib/business';

// bookingUrl: the barber's own Square booking link (optional).
// Add a photo path (e.g. '/team/miguel.jpg' in /public/team) to show a photo instead of initials.
const barbers: { name: string; nickname?: string; owner?: boolean; bookingUrl?: string; photo?: string }[] = [
  { name: 'Raffy', owner: true },
  { name: 'Yoquelk', nickname: 'El Líder' },
  { name: 'Christopher' },
  { name: 'Julio' },
  { name: 'Miguel' },
  { name: 'Roger' },
  { name: 'Tito' },
];

const initials = (n: string) => n.slice(0, 2).toUpperCase();

const Team: React.FC = () => {
  const { t } = useLang();
  return (
  <section id="team" className="py-24 bg-black">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-2">{t('team_eyebrow')}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">{t('team_title')}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {barbers.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group bg-zinc-950 border border-zinc-800 hover:border-gold transition-colors duration-500 overflow-hidden"
          >
            <div className="aspect-[4/5] bg-zinc-900 flex items-center justify-center overflow-hidden">
              {b.photo ? (
                <img src={b.photo} alt={b.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <span className="text-6xl font-serif text-zinc-700 group-hover:text-gold transition-colors duration-500">{initials(b.name)}</span>
              )}
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">{b.name}</h3>
              {b.nickname && <p className="text-sm italic text-gold/80">"{b.nickname}"</p>}
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-1">{b.owner ? t('owner') : t('barber')}</p>
              <a href={bookHref(b.bookingUrl)} className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-gold border-b border-transparent hover:border-gold">
                {t('book_with')} {b.name}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Team;
