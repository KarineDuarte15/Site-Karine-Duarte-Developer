'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Dicionário de traduções
const translations = {
  pt: {
    about: 'Sobre mim',
    skills: 'Habilidades',
    journey: 'Jornada',
    projects: 'Projetos',
    blog: 'Blog',
    contact: 'Contato',
    heroGreeting: 'Olá, eu sou',
    heroRole1: 'Desenvolvedora Full-Stack',
    heroRole2: 'Analista de Dados',
    heroRole3: 'Analista de BI',
    heroRole4: 'Apaixonada por Tecnologia',
    heroRole5: 'Sempre Aprendendo',
  },
  en: {
    about: 'About me',
    skills: 'Skills',
    journey: 'Journey',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',
    heroGreeting: 'Hi, I am',
    heroRole1: 'Full-Stack Developer',
    heroRole2: 'Data Analyst',
    heroRole3: 'BI Analyst',
    heroRole4: 'Tech Enthusiast',
    heroRole5: 'Lifelong Learner',
  },
  de: {
    about: 'Über mich',
    skills: 'Fähigkeiten',
    journey: 'Reise',
    projects: 'Projekte',
    blog: 'Blog',
    contact: 'Kontakt',
    heroGreeting: 'Hallo, ich bin',
    heroRole1: 'Full-Stack Entwickler',
    heroRole2: 'Datenanalyst',
    heroRole3: 'BI-Analyst',
    heroRole4: 'Technikbegeistert',
    heroRole5: 'Lebenslanges Lernen',
  }
};

type Language = 'pt' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['pt']; // Tipo baseado no português
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}