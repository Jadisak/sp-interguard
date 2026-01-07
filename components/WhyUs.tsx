import React from 'react';
import { Award, Clock, Smartphone, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const iconList = [Award, Smartphone, Clock, ShieldCheck];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-80 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-blue rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-brand-gold font-bold text-lg uppercase tracking-widest mb-2 font-thai">{t.whyUs.eyebrow}</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-thai mb-6 leading-tight">
              {t.whyUs.titleLine1} <br /> {t.whyUs.titleLine2}
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
            <div className="grid grid-cols-2 gap-2 md:gap-8">
              <img
                src="/pics/check-01.png"
                alt="Guard on duty"
                className="rounded-2xl h-56 w-full object-cover shadow-2xl border-4 border-slate-600"
              />
              <img
                src="/pics/sale.png"
                alt="CCTV Monitoring"
                className="rounded-2xl h-56 w-full object-cover shadow-2xl border-4 border-slate-600 transform md:translate-y-20 md:-translate-x-16"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;