import React from 'react';
import { LangProvider } from './lib/i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Reviews from './components/Reviews';
import CallFab from './components/CallFab';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LangProvider>
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <CallFab />
    </div>
    </LangProvider>
  );
}

export default App;