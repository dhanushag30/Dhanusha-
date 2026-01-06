import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "WooCommerce", 
  "SEO", "Python", "FlutterFlow", "React", "PHP", "MySQL"
];

const TechMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden border-t border-text/5 bg-text/5 py-4 backdrop-blur-sm relative z-10 transition-colors duration-300">
      <div className="flex">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span className="text-lg font-serif italic text-text/40 dark:text-white/50">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;