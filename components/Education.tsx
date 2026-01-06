import React from 'react';
import { EDUCATION } from '../constants';


const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-center">Education</h2>
        
        <div className="grid gap-6">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="glass rounded-2xl p-8 border border-white/5 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-lg text-indigo-400 mt-1">{edu.institution}</p>
                </div>
                <div className="self-start md:self-center px-4 py-1.5 bg-white/5 rounded-full text-sm text-textMuted border border-white/10">
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;