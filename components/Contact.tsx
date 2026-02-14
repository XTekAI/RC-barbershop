import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
       {/* Decorative Gold Line */}
       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Visit Us</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Stop by for a fresh cut or a consultation. Walk-ins are welcome, 
              but appointments are recommended to minimize wait times.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-gold transition-colors duration-300">
                  <MapPin className="text-gold group-hover:text-black w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-gray-400">798 Chamber St, Trenton, NJ 08611</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-gold transition-colors duration-300">
                  <Phone className="text-gold group-hover:text-black w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-gray-400">(609) 213-1253</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-gold transition-colors duration-300">
                  <Mail className="text-gold group-hover:text-black w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-gray-400">info@rcbarbershop.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-gold transition-colors duration-300">
                  <Clock className="text-gold group-hover:text-black w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Hours</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>9am - 8pm</span></li>
                    <li className="flex justify-between w-48"><span>Saturday:</span> <span>10am - 6pm</span></li>
                    <li className="flex justify-between w-48"><span>Sunday:</span> <span className="text-gold">Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <Button className="w-full md:w-auto">Get Directions</Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-full min-h-[400px] w-full bg-zinc-900 rounded-lg overflow-hidden relative">
             <div className="absolute inset-0 opacity-50">
               <img 
                 src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Map"
                 className="w-full h-full object-cover grayscale"
               />
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-black/80 p-6 rounded-lg border border-gold backdrop-blur-sm text-center">
                 <MapPin className="text-gold w-10 h-10 mx-auto mb-3" />
                 <p className="text-white font-bold">Find us on Google Maps</p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;