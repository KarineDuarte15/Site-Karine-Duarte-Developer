'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

const translations = {
  pt: {
    // Menu & Seções
    about: 'Sobre mim',
    skills: 'Habilidades',
    journey: 'Jornada',
    projects: 'Projetos',
    blog: 'Blog',
    contact: 'Contato',
    
    // Hero
    heroGreeting: 'Olá, eu sou',
    heroRole1: 'Desenvolvedora Full-Stack',
    heroRole2: 'Analista de Dados',
    heroRole3: 'Analista de BI',
    heroRole4: 'Apaixonada por Tecnologia',
    heroRole5: 'Sempre Aprendendo',

    // Sobre
    aboutTitle: 'Sobre Mim',
    aboutText1: 'Minha jornada na tecnologia começou com a curiosidade, mas se transformou em uma carreira focada em criar soluções. Com formação em Análise e Desenvolvimento de Sistemas, hoje eu conecto o poder do back-end com a inteligência da análise de dados para gerar impacto real.',
    aboutText2: 'Atuo como Desenvolvedora Full-Stack e Analista de Dados, utilizando um arsenal de tecnologias para construir sistemas eficientes, automatizar processos e transformar dados brutos em insights valiosos que impulsionam decisões.',
    techSkills: 'Habilidades Técnicas',
    downloadCv: 'Download CV',

    // Seções (Títulos)
    journeyTitle: 'Minha Jornada',
    projectsTitle: 'Meus Projetos',
    eventsTitle: 'Momentos da Carreira',
    blogTitle: 'Blog',
    contactTitle: 'Entre em Contato',

    // Contato
    contactSubtitle: 'Tem uma pergunta, proposta ou apenas quer dizer um "oi"? Ficarei feliz em ouvir de você. Preencha o formulário abaixo.',
    labelName: 'Nome',
    labelEmail: 'Email',
    labelMessage: 'Mensagem',
    btnSend: 'Enviar Mensagem',
    msgSending: 'Enviando...',
    msgSuccess: 'Mensagem enviada com sucesso!',
    msgError: 'Erro ao enviar. Tente novamente.',

    // Blog Cards
    readMore: 'Ler mais →',

    // Footer
    backToTop: 'Voltar ao Topo',
    rights: 'Todos os direitos reservados.',
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
    
    aboutTitle: 'About Me',
    aboutText1: 'My journey in technology started with curiosity but turned into a career focused on creating solutions. With a degree in Systems Analysis and Development, today I connect the power of back-end with the intelligence of data analysis to generate real impact.',
    aboutText2: 'I work as a Full-Stack Developer and Data Analyst, using an arsenal of technologies to build efficient systems, automate processes, and transform raw data into valuable insights that drive decisions.',
    techSkills: 'Technical Skills',
    downloadCv: 'Download CV',

    journeyTitle: 'My Journey',
    projectsTitle: 'My Projects',
    eventsTitle: 'Career Moments',
    blogTitle: 'Blog',
    contactTitle: 'Get in Touch',

    contactSubtitle: 'Have a question, proposal, or just want to say "hi"? I’d be happy to hear from you. Fill out the form below.',
    labelName: 'Name',
    labelEmail: 'Email',
    labelMessage: 'Message',
    btnSend: 'Send Message',
    msgSending: 'Sending...',
    msgSuccess: 'Message sent successfully!',
    msgError: 'Error sending. Try again.',

    readMore: 'Read more →',

    backToTop: 'Back to Top',
    rights: 'All rights reserved.',
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

    aboutTitle: 'Über Mich',
    aboutText1: 'Meine Reise in die Technologie begann mit Neugier, entwickelte sich aber zu einer Karriere, die sich auf die Entwicklung von Lösungen konzentriert. Mit einem Abschluss in Systemanalyse verbinde ich heute die Kraft des Back-Ends mit der Intelligenz der Datenanalyse, um echte Wirkung zu erzielen.',
    aboutText2: 'Ich arbeite als Full-Stack-Entwickler und Datenanalyst und nutze ein Arsenal an Technologien, um effiziente Systeme zu bauen, Prozesse zu automatisieren und Rohdaten in wertvolle Erkenntnisse umzuwandeln, die Entscheidungen vorantreiben.',
    techSkills: 'Technische Fähigkeiten',
    downloadCv: 'Lebenslauf Herunterladen',

    journeyTitle: 'Meine Reise',
    projectsTitle: 'Meine Projekte',
    eventsTitle: 'Karrieremomente',
    blogTitle: 'Blog',
    contactTitle: 'Kontaktieren Sie mich',

    contactSubtitle: 'Haben Sie eine Frage, einen Vorschlag oder möchten Sie einfach nur "Hallo" sagen? Ich freue mich, von Ihnen zu hören. Füllen Sie das Formular unten aus.',
    labelName: 'Name',
    labelEmail: 'E-Mail',
    labelMessage: 'Nachricht',
    btnSend: 'Nachricht Senden',
    msgSending: 'Senden...',
    msgSuccess: 'Nachricht erfolgreich gesendet!',
    msgError: 'Fehler beim Senden. Versuchen Sie es erneut.',

    readMore: 'Mehr lesen →',

    backToTop: 'Zurück nach oben',
    rights: 'Alle Rechte vorbehalten.',
  }
};

type Language = 'pt' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['pt'];
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