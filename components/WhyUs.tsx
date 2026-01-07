import React from 'react';
import { Award, Clock, Smartphone, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyUs: React.FC = () => {
  const { t } = useLanguage();
  
  const iconList = [Award, Smartphone, Clock, ShieldCheck];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-blue rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-brand-gold font-bold text-lg uppercase tracking-widest mb-2 font-thai">{t.whyUs.eyebrow}</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-thai mb-6 leading-tight">
              {t.whyUs.titleLine1} <br/> {t.whyUs.titleLine2}
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-thai">
              {t.whyUs.description}
            </p>
            
            <ul className="space-y-6">
              {t.whyUs.items.map((item, idx) => {
                const Icon = iconList[idx];
                return (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-gold mr-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-thai">{item.title}</h4>
                      <p className="text-gray-400 mt-1 font-thai">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Image Grid */}
          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://picsum.photos/400/500?grayscale" 
                  alt="Guard on duty" 
                  className="rounded-2xl transform translate-y-12 shadow-2xl border-4 border-slate-800"
                />
                <img 
                  src="https://picsum.photos/400/500?blur=2" 
                  alt="CCTV Monitoring" 
                  className="rounded-2xl shadow-2xl border-4 border-slate-800"
                />
             </div>
             {/* Floating Badge */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-dark p-6 rounded-full shadow-xl text-center font-bold font-thai w-32 h-32 flex items-center justify-center border-4 border-slate-900 z-20">
               <div>
                 <span className="text-3xl block font-sans">15+</span>
                 <span className="text-xs uppercase">{t.whyUs.expBadge}</span>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;