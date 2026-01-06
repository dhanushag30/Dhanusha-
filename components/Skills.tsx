import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { Code2, PenTool, Users } from 'lucide-react';

const icons = {
  "Development": Code2,
  "Technical & Tools": PenTool,
  "Soft Skills": Users
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Technical Arsenal</h2>
           <p className="text-textMuted">Tools and technologies I use to build digital products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => {
            const Icon = icons[category.category as keyof typeof icons] || Code2;
            return (
              <motion.div 
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass p-8 rounded-3xl flex flex-col hover:bg-white/5 transition-all duration-300 group ${idx === 1 ? 'md:bg-white/5' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-sm text-textMuted hover:text-white hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;