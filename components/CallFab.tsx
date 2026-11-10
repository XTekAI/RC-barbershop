import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../lib/business';

// Floating call button, mobile only.
const CallFab: React.FC = () => (
  <a
    href={BUSINESS.phoneHref}
    aria-label={`Call ${BUSINESS.name}`}
    className="md:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-gold text-black flex items-center justify-center shadow-lg shadow-black/60"
  >
    <Phone className="w-6 h-6" />
  </a>
);

export default CallFab;
