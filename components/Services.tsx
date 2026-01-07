import React from 'react';
import { UserCheck, Cctv, Building2, Car, HardHat, Radio } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [
  <UserCheck className="h-8 w-8" />,
  <Cctv className="h-8 w-8" />,
  <Building2 className="h-8 w-8" />,
  <Car className="h-8 w-8" />,
  <HardHat className="h-8 w-8" />,
  <Radio className="h-8 w-8" />
];

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-bold text-lg uppercase tracking-widest mb-2 font-thai">{t.services.eyebrow}</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-thai mb-6">{t.services.title}</h3>
          <p className="text-slate-600 text-lg font-thai">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-gold/50 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
              
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                {icons[index]}
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-thai group-hover:text-brand-blue transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-thai">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;