import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-text/10 py-12 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        <div className="flex gap-6 mb-8">
            <a 
              href={`tel:${SOCIAL_LINKS.phone}`} 
              className="text-textMuted hover:text-text transition-colors p-2 glass rounded-full" 
              aria-label="Call"
            >
                <Phone size={20} />
            </a>
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`} 
              className="text-textMuted hover:text-text transition-colors p-2 glass rounded-full" 
              aria-label="Email"
            >
                <Mail size={20} />
            </a>
        </div>

        <div className="text-center text-textMuted">
            <p className="font-serif italic text-lg mb-2 text-text/80">"Building the web, one pixel at a time."</p>
            <p className="text-xs opacity-50">&copy; 2025 Dhanusha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;