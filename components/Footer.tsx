import React from 'react';
import { Scissors, MapPin, Phone, Instagram } from 'lucide-react';
import { useLang, Key } from '../lib/i18n';
import { BUSINESS } from '../lib/business';

const links = ['home', 'services', 'team', 'reviews', 'contact'];

const Footer: React.FC = () => {
  const { t } = useLang();
  return (
  <footer className="bg-zinc-950 pt-16 pb-24 md:pb-8 border-t border-zinc-900">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-2">
          <Scissors className="w-6 h-6 text-gold" />
          <span className="text-2xl font-bold text-white tracking-widest">R&amp;C <span className="text-gold text-base">BARBERSHOP</span></span>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">{t(`nav_${l}` as Key)}</a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm">
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors">
            <MapPin className="w-4 h-4 text-gold" /> {BUSINESS.address}
          </a>
          <a href={BUSINESS.phoneHref} className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors">
            <Phone className="w-4 h-4 text-gold" /> {BUSINESS.phoneDisplay}
          </a>
          <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors">
            <Instagram className="w-4 h-4 text-gold" /> {BUSINESS.instagramHandle}
          </a>
        </div>
      </div>

      <div className="border-t border-zinc-900 pt-8 text-center text-gray-500 text-xs uppercase tracking-wider">
        <p>&copy; {new Date().getFullYear()} R&amp;C Barbershop · Trenton, NJ</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
