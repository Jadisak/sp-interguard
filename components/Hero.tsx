import React, { useEffect, useRef } from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const q = gsap.utils.selector(heroRef.current);

      // Timeline for coordinated animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.to(q(".gsap-reveal"), {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        delay: 0.3
      });

      // Subtle background zoom effect
      gsap.to(q(".hero-bg"), {
        scale: 1,
        duration: 3,
        ease: "power2.out"
      });
    }
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pics/academy-06.png"
          alt="Security Guard Background"
          className="hero-bg w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/75 to-indigo-900/15"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="gsap-reveal translate-y-8 inline-flex items-center space-x-2 bg-brand-blue/30 border border-brand-blue/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-100 tracking-wide uppercase font-thai">{t.hero.badge}</span>
          </div>

          <h1 className="gsap-reveal translate-y-8 text-4xl md:text-7xl font-extrabold text-white leading-tight font-thai mb-6">
            {t.hero.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="gsap-reveal translate-y-8 text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl font-thai">
            {t.hero.description}
          </p>

          <div className="gsap-reveal translate-y-8 flex flex-col sm:flex-row gap-4 font-thai">
            <a
              href="#contact"
              className="group bg-brand-gold hover:bg-yellow-400 text-brand-dark font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-gold/20"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-4 px-8 rounded-lg backdrop-blur-sm transition-all flex items-center justify-center space-x-2"
            >
              <Shield className="h-5 w-5" />
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          <div className="gsap-reveal translate-y-8 mt-12 flex items-center gap-3 text-gray-400 text-sm font-medium font-thai">
            <div className="flex items-center gap-2 group">
              <div className="text-2xl font-bold text-white font-sans group-hover:text-brand-gold transition-colors">500+</div>
              <div className="leading-tight">{t.hero.statGuards}</div>
            </div>
            <div className="w-px h-10 bg-gray-700"></div>
            <div className="flex items-center gap-2 group">
              <div className="text-2xl font-bold text-white font-sans group-hover:text-brand-gold transition-colors">98%</div>
              <div className="leading-tight">{t.hero.statRetention}</div>
            </div>
            <div className="w-px h-10 bg-gray-700"></div>
            <div className="flex items-center gap-2 group">
              <div className="text-2xl font-bold text-white font-sans group-hover:text-brand-gold transition-colors">24h</div>
              <div className="leading-tight">{t.hero.statResponse}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;