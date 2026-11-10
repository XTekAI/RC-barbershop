import React, { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'es';

const dict = {
  en: {
    nav_home: 'Home', nav_services: 'Services', nav_team: 'Team', nav_gallery: 'Gallery',
    nav_reviews: 'Reviews', nav_about: 'About', nav_contact: 'Contact',
    call: 'Call', call_to_book: 'Call to Book', book_now: 'Book Now', call_now: 'Call Now',
    hero_eyebrow: 'Barbershop · Trenton, NJ',
    hero_title_1: 'Precision', hero_title_2: 'Style',
    hero_text: "Experience the art of traditional grooming with a modern touch. At R&C Barbershop, we don't just cut hair; we cultivate confidence.",
    view_services: 'View Services', scroll: 'Scroll',
    about_eyebrow: 'The Story', about_title_1: 'More Than Just', about_title_2: 'A Haircut',
    about_p1: 'R&C Barbershop was founded on the principles of quality, community, and consistency. We believe that a haircut is a ritual, a moment to pause, relax, and reset.',
    about_p2: 'Our barbers are masters of their craft, blending traditional techniques with modern styles to ensure every client walks out looking and feeling their absolute best.',
    happy_clients: 'Happy Clients', years_exp: 'Years Experience',
    services_eyebrow: 'Our Menu', services_title: 'Services & Prices', from: 'From',
    team_eyebrow: 'Our Barbers', team_title: 'Meet the Team', owner: 'Owner', barber: 'Barber', book_with: 'Book with',
    gallery_eyebrow: 'Portfolio', gallery_title: 'Our Masterpieces',
    reviews_eyebrow: 'Google Reviews', reviews_title: 'What Clients Say', all_reviews: 'See all reviews on Google',
    visit_us: 'Visit Us', visit_text: 'Stop by for a fresh cut. Walk-ins are welcome — call ahead to check the wait.',
    location: 'Location', phone: 'Phone', hours: 'Hours', directions: 'Get Directions', open_maps: 'Open in Google Maps',
    rights: 'Trenton, NJ',
  },
  es: {
    nav_home: 'Inicio', nav_services: 'Servicios', nav_team: 'Equipo', nav_gallery: 'Galería',
    nav_reviews: 'Reseñas', nav_about: 'Nosotros', nav_contact: 'Contacto',
    call: 'Llamar', call_to_book: 'Llama para tu cita', book_now: 'Reservar cita', call_now: 'Llamar ahora',
    hero_eyebrow: 'Barbería · Trenton, NJ',
    hero_title_1: 'Precisión', hero_title_2: 'Estilo',
    hero_text: 'Vive el arte de la barbería tradicional con un toque moderno. En R&C Barbershop no solo cortamos pelo; creamos confianza.',
    view_services: 'Ver servicios', scroll: 'Desliza',
    about_eyebrow: 'Nuestra historia', about_title_1: 'Más que', about_title_2: 'un corte',
    about_p1: 'R&C Barbershop nació con tres principios: calidad, comunidad y constancia. Creemos que un corte es un ritual, un momento para hacer una pausa, relajarse y renovarse.',
    about_p2: 'Nuestros barberos dominan su oficio, combinando técnicas tradicionales con estilos modernos para que cada cliente salga luciendo y sintiéndose al máximo.',
    happy_clients: 'Clientes felices', years_exp: 'Años de experiencia',
    services_eyebrow: 'Nuestro menú', services_title: 'Servicios y precios', from: 'Desde',
    team_eyebrow: 'Nuestros barberos', team_title: 'Conoce al equipo', owner: 'Dueño', barber: 'Barbero', book_with: 'Cita con',
    gallery_eyebrow: 'Portafolio', gallery_title: 'Nuestros trabajos',
    reviews_eyebrow: 'Reseñas de Google', reviews_title: 'Lo que dicen los clientes', all_reviews: 'Ver todas las reseñas en Google',
    visit_us: 'Visítanos', visit_text: 'Pasa por un corte fresco. Aceptamos clientes sin cita — llama antes para saber la espera.',
    location: 'Dirección', phone: 'Teléfono', hours: 'Horario', directions: 'Cómo llegar', open_maps: 'Abrir en Google Maps',
    rights: 'Trenton, NJ',
  },
} as const;

export type Key = keyof typeof dict.en;

export const DAYS: Record<string, string> = {
  Monday: 'Lunes', Tuesday: 'Martes', Wednesday: 'Miércoles', Thursday: 'Jueves',
  Friday: 'Viernes', Saturday: 'Sábado', Sunday: 'Domingo',
};

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: 'en', setLang: () => {}, t: (k) => dict.en[k],
});

const initialLang = (): Lang => {
  const saved = localStorage.getItem('lang');
  if (saved === 'en' || saved === 'es') return saved;
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
};

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(initialLang);
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang, t: (k) => dict[lang][k] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

export const LangToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex border border-zinc-700 text-xs font-bold ${className}`} role="group" aria-label="Language">
      {(['en', 'es'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1.5 uppercase transition-colors ${lang === l ? 'bg-gold text-black' : 'text-gray-400 hover:text-gold'}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};
