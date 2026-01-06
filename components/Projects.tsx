import React from 'react';
import { PROJECTS } from '../constants';
import {  ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background dark:bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16 text-center text-text">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-surface dark:bg-surface rounded-3xl overflow-hidden border border-text/10 hover:border-text/20 transition-all duration-300 flex flex-col h-full shadow-xl shadow-black/5"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-text/5 text-indigo-600 dark:text-indigo-300 text-xs font-medium rounded border border-text/5">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-textMuted mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mb-8 flex-1">
                   <h4 className="text-xs font-bold text-text/50 uppercase tracking-widest mb-3">Key Features</h4>
                   <ul className="grid grid-cols-1 gap-2">
                     {project.features.map((feature, idx) => (
                       <li key={idx} className="flex items-center gap-2 text-sm text-textMuted/80">
                         <CheckCircle2 size={14} className="text-emerald-500/70" />
                         {feature}
                       </li>
                     ))}
                   </ul>
                </div>

                {project.links.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-text/5 mt-auto">
                    <div className="text-xs font-semibold text-text uppercase tracking-wider">Live Deployments</div>
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, i) => (
                        <a 
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-text/5 hover:bg-text/10 rounded-lg text-xs text-text transition-colors border border-text/5"
                        >
                          {new URL(link).hostname.replace('www.', '')}
                          <ArrowUpRight className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;