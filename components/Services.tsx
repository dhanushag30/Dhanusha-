import React from 'react';
import { SERVICES } from '../constants';
import { Layout, ShoppingCart, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: any = {
  "Layout": Layout,
  "ShoppingCart": ShoppingCart,
  "Zap": Zap,
  "ShieldCheck": ShieldCheck
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-background/50 dark:bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">What I Do</h2>
          <p className="text-textMuted max-w-2xl mx-auto">Helping businesses succeed online with a comprehensive range of digital services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface dark:bg-surface border border-text/10 p-6 rounded-2xl hover:bg-text/5 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-textMuted leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;