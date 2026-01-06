import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center md:text-left mb-12 md:mb-16">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-text mb-4">Work History</h2>
           <p className="text-textMuted max-w-xl mx-auto md:mx-0">My professional journey, key roles, and the impact I've delivered.</p>
        </div>

        <div className="flex flex-col gap-6">
            {EXPERIENCE.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-surfaceHighlight/30 dark:bg-surfaceHighlight/30 border border-text/5 rounded-2xl md:rounded-3xl overflow-hidden hover:border-text/20 transition-all duration-300"
              >
                {/* Decorative Background Gradient */}
                <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-indigo-600/5 dark:bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative p-5 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8">
                   
                   {/* Left Column: Timeline & Company Info */}
                   <div className="w-full md:w-1/3 flex flex-col shrink-0">
                      <div className="flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-text/5 border border-text/10 text-xs font-medium text-indigo-600 dark:text-indigo-300 mb-3 md:mb-4">
                           <Calendar size={12} />
                           {job.period}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-text mb-1">{job.role}</h3>
                        <div className="text-base md:text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-2">{job.company}</div>
                        <div className="flex items-center gap-2 text-textMuted text-xs md:text-sm">
                           <MapPin size={14} />
                           {job.location}
                        </div>
                      </div>

                      {/* Large decorative letter for desktop aesthetics */}
                      <div className="hidden md:block mt-auto opacity-5 font-serif font-bold text-9xl leading-none select-none pointer-events-none text-text">
                        {job.company.charAt(0)}
                      </div>
                   </div>

                   {/* Right Column: Details & Points */}
                   <div className="w-full md:w-2/3 border-t border-text/5 pt-6 md:border-t-0 md:pt-0 md:border-l md:pl-8">
                      <div className="mb-6 md:mb-8">
                        <h4 className="text-xs md:text-sm font-bold text-text/70 dark:text-text/50 uppercase tracking-widest mb-4 flex items-center gap-2">
                          <Briefcase size={16} className="text-indigo-500" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                          {job.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-textMuted leading-relaxed">
                              <CheckCircle2 size={16} className="text-emerald-500/70 shrink-0 mt-[0.2rem] md:mt-1" />
                              <span className="text-sm md:text-base">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                         {job.tags.map(tag => (
                           <span key={tag} className="px-2.5 py-1 bg-text/5 border border-text/5 rounded-md text-xs font-medium text-indigo-600 dark:text-indigo-200/80">
                             {tag}
                           </span>
                         ))}
                      </div>
                   </div>

                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;