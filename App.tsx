import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';
import { Menu, X, Home, Briefcase, Code, Layers, GraduationCap, Zap, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      // Default to dark as per user preference
      return 'dark';
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'Services', href: '#services', id: 'services', icon: Zap },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Code },
    { name: 'Projects', href: '#projects', id: 'projects', icon: Layers },
    { name: 'Education', href: '#education', id: 'education', icon: GraduationCap },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <div className="min-h-screen bg-background text-text overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* Floating Pill Navigation - Desktop */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl shadow-black/10 dark:shadow-black/50 backdrop-blur-xl border-text/10">
           {navLinks.map((link) => {
             const isActive = activeSection === link.id;
             return (
              <a 
                key={link.name}
                href={link.href}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive ? 'text-text' : 'text-textMuted hover:text-text hover:bg-text/5'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-text/10 rounded-full border border-text/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
             )
           })}
           <div className="w-px h-6 bg-text/10 mx-2" />
           <button 
             onClick={toggleTheme}
             className="p-2 rounded-full hover:bg-text/5 text-textMuted hover:text-text transition-all duration-300"
             aria-label="Toggle Theme"
           >
             {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
           </button>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 glass border-b-0 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-xl">
        <span className="font-serif font-bold text-xl tracking-tight">Dhanusha.</span>
        <div className="flex items-center gap-3">
          <button 
             onClick={toggleTheme}
             className="p-2 rounded-lg bg-text/5 border border-text/10"
             aria-label="Toggle Theme"
           >
             {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
           </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-text/5 border border-text/10"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-4 text-lg font-medium p-4 rounded-xl border transition-colors
                    ${activeSection === link.id 
                      ? 'bg-indigo-600/10 border-indigo-500/30 text-indigo-500 dark:text-indigo-400' 
                      : 'border-transparent text-textMuted hover:bg-text/5 hover:text-text'}
                  `}
                >
                  <link.icon className={`w-5 h-5 ${activeSection === link.id ? 'text-indigo-500 dark:text-indigo-400' : 'text-text/30'}`} />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative">
        {/* Global ambient background glow */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 dark:bg-indigo-900/10 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 dark:bg-purple-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-900/10 dark:bg-blue-900/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
        </div>

        <Hero />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;