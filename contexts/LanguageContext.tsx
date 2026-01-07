import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../translations';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('th');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'th' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};