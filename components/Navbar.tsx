import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Instagram } from 'lucide-react';
import { useLang, LangToggle, Key } from '../lib/i18n';
import { BUSINESS, bookHref, hasBooking } from '../lib/business';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'nav_home', href: '#home' },
  { name: 'nav_services', href: '#services' },
  { name: 'nav_team', href: '#team' },
  { name: 'nav_gallery', href: '#gallery' },
  { name: 'nav_reviews', href: '#reviews' },
  { name: 'nav_about', href: '#about' },
  { name: 'nav_contact', href: '#contact' },
] as { name: Key; href: string }[];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 border border-gold rounded-full group-hover:bg-gold transition-colors duration-300">
            <Scissors className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-white leading-none">R&amp;C</span>
            <span className="text-[10px] tracking-[0.2em] text-gold uppercase">Barbershop</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-gold transition-colors tracking-wide uppercase relative group"
            >
              {t(link.name)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="px-6 py-2 border border-gold text-gold text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
          >
            {t('call')} {BUSINESS.phoneDisplay}
          </a>
          {hasBooking() && (
            <a href={bookHref()} className="px-6 py-2 bg-gold text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
              {t('book_now')}
            </a>
          )}
          <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-gold transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <LangToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
        <LangToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-gold transition-colors"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-t border-zinc-800 absolute w-full"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-gold transition-colors uppercase"
                >
                  {t(link.name)}
                </a>
              ))}
              <a
                href={bookHref()}
                onClick={() => setIsOpen(false)}
                className="mt-4 text-center py-3 bg-gold text-black font-bold uppercase tracking-widest"
              >
                {t(hasBooking() ? 'book_now' : 'call_to_book')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;