import React from 'react';
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-slate-800 font-thai">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-gold p-1.5 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-brand-dark" />
              </div>
              <div className="font-thai font-bold text-xl tracking-tight">
                <span className="text-brand-gold">S&P</span> INTER GUARD
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-thai">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors">{t.nav.home}</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">{t.nav.services}</a></li>
              <li><a href="#why-us" className="hover:text-brand-gold transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-thai">{t.footer.ourServices}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {t.services.items.slice(0, 5).map((item, idx) => (
                 <li key={idx}><a href="#" className="hover:text-brand-gold transition-colors">{item.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-thai">{t.footer.stayUpdated}</h4>
            <p className="text-slate-400 text-sm mb-4">{t.footer.subscribeDesc}</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder={t.contact.placeholders.email}
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-gold hover:bg-yellow-400 text-brand-dark font-bold py-2 rounded transition-colors">
                {t.footer.subscribeBtn}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} S&P INTER GUARD. {t.footer.rights}</p>
          <div className="mt-4 md:mt-0">
            <span className="block md:inline">Bangkok, Thailand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;