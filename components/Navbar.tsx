import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.whyUs, href: '#why-us' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-thai ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-brand-gold p-1.5 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-brand-dark" />
            </div>
            <div className={`font-thai font-bold text-xl tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
              <span className="text-brand-gold">S&P</span> INTER GUARD
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-gold font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 text-white hover:text-brand-gold transition-colors px-2 py-1 rounded border border-white/20 hover:border-brand-gold/50"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-bold uppercase">{lang === 'en' ? 'EN' : 'TH'}</span>
            </button>

            <a
              href="#contact"
              className="bg-brand-gold hover:bg-yellow-400 text-brand-dark font-bold py-2 px-5 rounded-full transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>{t.nav.quote}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 text-white hover:text-brand-gold transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-bold uppercase">{lang === 'en' ? 'EN' : 'TH'}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-gold focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl absolute w-full border-t border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-brand-gold hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-brand-gold text-brand-dark font-bold py-3 rounded-lg"
              >
                {t.nav.quote}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;