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
    heroRole1: 'Desenvolvedora Back-end',
    heroRole2: 'Analista de Dados',
    heroRole3: 'Analista de BI',
    heroRole4: 'Apaixonada por Tecnologia',
    heroRole5: 'Sempre Aprendendo',

    // Sobre
    aboutTitle: 'Sobre Mim',
    aboutText1: 'Engenheira de Dados e Desenvolvedora Back-end, focada em transformar dados complexos em sistemas inteligentes e decisões estratégicas. Combino experiência em automação, infraestrutura e arquitetura de dados para entregar soluções escaláveis de alto impacto.',
    aboutText2: 'Transformo dados em decisões e sistemas em soluções. Atuo na intersecção entre o desenvolvimento back-end e a engenharia de dados, criando automações e arquiteturas que garantem inteligência e performance. Com uma visão técnica de ponta a ponta — do pipeline de dados à entrega do dashboard — meu objetivo é simplificar o complexo e gerar valor tangível através de tecnologia bem estruturada.',
    techSkills: 'Habilidades Técnicas',
    downloadCv: 'Download CV',
    coverLetter: 'Carta de Apresentação',

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
    heroRole1: 'Back-end Developer',
    heroRole2: 'Data Analyst',
    heroRole3: 'BI Analyst',
    heroRole4: 'Tech Enthusiast',
    heroRole5: 'Lifelong Learner',

    aboutTitle: 'About Me',
    aboutText1: 'engineer and Back-end Developer, focused on transforming complex data into intelligent systems and strategic decisions. I combine experience in automation, infrastructure, and data architecture to deliver scalable, high-impact solutions.',
    aboutText2: 'I work at the intersection of back-end development and data engineering, creating automations and architectures that ensure intelligence and performance. With a holistic technical perspective—from data pipelines to dashboard delivery—my goal is to simplify complexity and generate tangible value through well-structured technology.',
    techSkills: 'Technical Skills',
    downloadCv: 'Download CV',
    coverLetter: 'Cover Letter',

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
    heroRole1: 'Back-end Entwickler',
    heroRole2: 'Datenanalyst',
    heroRole3: 'BI-Analyst',
    heroRole4: 'Technikbegeistert',
    heroRole5: 'Lebenslanges Lernen',

    aboutTitle: 'Über Mich',
    aboutText1: 'Ich bin Ingenieurin und Back-End-Entwicklerin, spezialisiert darauf, komplexe Daten in intelligente Systeme und strategische Entscheidungen zu verwandeln. Ich kombiniere Erfahrung in Automatisierung, Infrastruktur und Datenarchitektur, um skalierbare, wirkungsvolle Lösungen zu liefern.',
    aboutText2: 'Ich arbeite an der Schnittstelle zwischen Back-End-Entwicklung und Datenengineering, um Automatisierungen und Architekturen zu schaffen, die Intelligenz und Leistung gewährleisten. Mit einer ganzheitlichen technischen Perspektive — von Datenpipelines bis zur Dashboard-Lieferung — zielt mein Ziel darauf ab, Komplexität zu vereinfachen und durch gut strukturierte Technologie messbaren Wert zu generieren.',
    techSkills: 'Technische Fähigkeiten',
    downloadCv: 'Lebenslauf Herunterladen',
    coverLetter: 'Anschreiben',

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