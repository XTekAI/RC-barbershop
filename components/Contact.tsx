import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import Button from './Button';
import { useLang, DAYS } from '../lib/i18n';
import { BUSINESS } from '../lib/business';

const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

const Contact: React.FC = () => {
  const { t, lang } = useLang();
  return (
  <section id="contact" className="py-24 bg-black relative">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></div>
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">{t('visit_us')}</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            {t('visit_text')}
          </p>
          <div className="space-y-6">
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-gold transition-colors duration-300">
                <MapPin className="text-gold group-hover:text-black w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">{t('location')}</h4>
                <p className="text-gray-400 group-hover:text-gold group-hover:underline underline-offset-4 transition-colors">{BUSINESS.address}</p>
              </div>
            </a>
            <a href={BUSINESS.phoneHref} className="flex items-start gap-4 group">
              <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-gold transition-colors duration-300">
                <Phone className="text-gold group-hover:text-black w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">{t('phone')}</h4>
                <p className="text-gray-400 group-hover:text-gold transition-colors">{BUSINESS.phoneDisplay}</p>
              </div>
            </a>
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-gold transition-colors duration-300">
                <Instagram className="text-gold group-hover:text-black w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">Instagram</h4>
                <p className="text-gray-400 group-hover:text-gold transition-colors">{BUSINESS.instagramHandle}</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-900 rounded-lg">
                <Clock className="text-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">{t('hours')}</h4>
                <ul className="text-gray-400 space-y-1">
                  {BUSINESS.hours.map((h) => (
                    <li key={h.day} className={`flex justify-between w-60 ${h.day === today ? 'text-gold font-semibold' : ''}`}>
                      <span>{lang === 'es' ? DAYS[h.day] : h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button href={BUSINESS.phoneHref}><Phone className="w-4 h-4" /> {t('call_now')}</Button>
            <Button href={BUSINESS.directionsUrl} external variant="outline"><MapPin className="w-4 h-4" /> {t('directions')}</Button>
          </div>
        </div>

        <div className="h-full min-h-[400px] w-full bg-zinc-900 rounded-lg overflow-hidden relative border border-zinc-800">
          <iframe
            title="R&C Barbershop on Google Maps"
            src={BUSINESS.mapEmbedUrl}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 bg-black/85 border border-gold px-4 py-2 text-sm text-white hover:bg-gold hover:text-black transition-colors"
          >
            {t('open_maps')}
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
