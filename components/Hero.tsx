import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS, SUMMARY } from '../constants';
import { motion } from 'framer-motion';
import TechMarquee from './TechMarquee';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-background"
    >
      {/* Abstract Background Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 dark:bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl flex-grow flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-text/5 border border-text/10 backdrop-blur-md mb-8 hover:bg-text/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-600 dark:text-emerald-300 font-bold tracking-wider text-xs uppercase">Available for Hire</span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-serif font-bold tracking-tighter leading-[1.1] mb-6">
              <span className="block text-text">Hello, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Dhanusha.
              </span>
            </h1>

            <p className="text-lg text-textMuted max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
               {SUMMARY}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-text text-background font-bold rounded-full hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-text/10"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-2">
                 <SocialLink href={`tel:${SOCIAL_LINKS.phone}`} icon={<Phone size={20} />} />
                 <SocialLink href={`mailto:${SOCIAL_LINKS.email}`} icon={<Mail size={20} />} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Visual - Gyroscope Concept */}
        <div className="flex-1 w-full flex justify-center items-center h-[500px] perspective-1000 relative">
           
           {/* Center Piece */}
           <motion.div 
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1, type: "spring" }}
             className="relative z-10 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(79,70,229,0.3)] dark:shadow-[0_0_60px_rgba(79,70,229,0.5)]"
           >
             <span className="font-serif text-4xl font-bold text-white">D</span>
           </motion.div>

           {/* Ring 1 */}
           <motion.div
             animate={{ rotateX: 360, rotateY: 360, rotateZ: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute w-64 h-64 border border-indigo-500/20 dark:border-indigo-500/30 rounded-full border-t-indigo-400 dark:border-t-indigo-400 border-l-transparent"
             style={{ transformStyle: "preserve-3d" }}
           />

           {/* Ring 2 */}
           <motion.div
             animate={{ rotateX: -360, rotateY: 180, rotateZ: -90 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute w-80 h-80 border border-purple-500/20 dark:border-purple-500/30 rounded-full border-b-purple-400 dark:border-b-purple-400 border-r-transparent"
             style={{ transformStyle: "preserve-3d" }}
           />

           {/* Ring 3 */}
           <motion.div
             animate={{ rotateX: 180, rotateY: -360, rotateZ: 45 }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute w-[450px] h-[450px] border border-pink-500/10 dark:border-pink-500/20 rounded-full border-l-pink-400 dark:border-l-pink-400 border-t-transparent"
             style={{ transformStyle: "preserve-3d" }}
           />
           
           <FloatingIcon x={-100} y={-100} delay={0} icon="WP" />
           <FloatingIcon x={-80} y={120} delay={2} icon="TS" />
           <FloatingIcon x={100} y={100} delay={3} icon="< />" />

        </div>

      </div>

      <div className="mt-auto z-20">
        <TechMarquee />
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-text/5 border border-text/10 rounded-full text-textMuted hover:text-text hover:bg-text/10 transition-colors"
  >
    {icon}
  </a>
);

const FloatingIcon = ({ x, y, delay, icon }: { x: number, y: number, delay: number, icon: string }) => (
    <motion.div
        animate={{ y: [y, y - 20, y] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        className="absolute bg-text/5 backdrop-blur-md border border-text/10 p-3 rounded-lg text-xs font-bold text-text/70 shadow-lg"
        style={{ x, y }}
    >
        {icon}
    </motion.div>
);

export default Hero;