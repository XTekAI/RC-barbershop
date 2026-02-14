import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-16 pb-8 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Scissors className="w-6 h-6 text-gold" />
            <span className="text-2xl font-bold text-white tracking-widest">RC <span className="text-gold text-base">BARBERSHOP</span></span>
          </div>

          {/* Links */}
          <div className="flex gap-8 mb-6 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">Home</a>
            <a href="#services" className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">Services</a>
            <a href="#about" className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">About</a>
            <a href="#contact" className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs uppercase tracking-wider">
          <p>&copy; 2024 RC Barbershop. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;