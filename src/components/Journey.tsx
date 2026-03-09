// src/components/Journey.tsx
'use client';

import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Journey() {
  const { t, language } = useLanguage();

  const journeyDataMap = {
    pt: [
      {
        icon: <FaBriefcase />,
        year: '2026',
        title: 'Pós graduacão em Engenharia de Software',
        company: 'Unifor',
        description: 'Pós-graduação em Engenharia de Software com foco em arquitetura de software, desenvolvimento escalável e melhores práticas de engenharia.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2026',
        title: 'Graduação em Ciência da Computação',
        company: 'Unifor',
        description: 'Graduação com foco em desenvolvimento de software, algoritmos, estrutura de dados e fundamentos da computação.',
      },
      {
        icon: <FaBriefcase />,
        year: '2025',
        title: 'Desenvolvedora Full Stack',
        company: 'ACI Contabilidade',
        description: 'Desenvolvimento de um sistema de automação para relatórios contábeis, com extração de dados, processamento e geração de relatórios inteligentes.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2025',
        title: 'Formação em Desenvolvimento Back-end',
        company: 'Oracle Next Education',
        description: 'Focado em desenvolvimento back-end, incluindo Java, Spring Boot, bancos de dados Oracle, e práticas de DevOps.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2023 - 2025',
        title: 'Análise e Desenvolvimento de Sistemas',
        company: 'Unifor',
        description: 'Graduação com foco no desenvolvimento e análise de sistemas de software.',
      },
      {
        icon: <FaBriefcase />,
        year: '2024',
        title: 'Professora de Robótica e Programação',
        company: 'Centro Educacional São Sebastião',
        description: 'Gerenciamento do departamento de tecnologia e ensino de programação e tecnologia para turmas de anos iniciais.',
      },
      {
        icon: <FaBriefcase />,
        year: '2025',
        title: 'Estagiária de TI',
        company: 'Pronutrir - Suporte Nutricional',
        description: 'Atuação com suporte à infraestrutura de TI, administração de usuários no Active Directory e monitoramento de rede.',
      },
      {
        icon: <FaBriefcase />,
        year: '2024',
        title: 'Professora de Tecnologia',
        company: 'Tree House Fortaleza',
        description: 'Gerenciamento do departamento de tecnologia e ensino de programação e tecnologia para turmas de anos iniciais.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2023',
        title: 'Programador de Sistemas',
        company: 'Senac',
        description: 'Formação técnica para programação de sistemas.',
      },
    ],
    en: [
      {
        icon: <FaBriefcase />,
        year: '2026',
        title: 'Postgraduate in Software Engineering',
        company: 'Unifor',
        description: 'Postgraduate in Software Engineering with focus on software architecture, scalable development and best engineering practices.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2026',
        title: 'Degree in Computer Science',
        company: 'Unifor',
        description: 'Degree focused on software development, algorithms, data structures, and computer fundamentals.',
      },
      {
        icon: <FaBriefcase />,
        year: '2025',
        title: 'Full Stack Developer',
        company: 'ACI Contabilidade',
        description: 'Development of an automation system for accounting reports, with data extraction, processing, and intelligent report generation.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2025',
        title: 'Back-end Development Training',
        company: 'Oracle Next Education',
        description: 'Focused on back-end development, including Java, Spring Boot, Oracle databases, and DevOps practices.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2023 - 2025',
        title: 'Systems Analysis and Development',
        company: 'Unifor',
        description: 'Degree focused on the development and analysis of software systems.',
      },
      {
        icon: <FaBriefcase />,
        year: '2024',
        title: 'Robotics and Programming Teacher',
        company: 'Centro Educacional São Sebastião',
        description: 'Management of the technology department and teaching of programming and technology for early years classes.',
      },
      {
        icon: <FaBriefcase />,
        year: '2025',
        title: 'IT Intern',
        company: 'Pronutrir - Suporte Nutricional',
        description: 'IT infrastructure support, user administration in Active Directory, and network monitoring.',
      },
      {
        icon: <FaBriefcase />,
        year: '2024',
        title: 'Technology Teacher',
        company: 'Tree House Fortaleza',
        description: 'Management of the technology department and teaching of programming and technology for early years classes.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2023',
        title: 'Systems Programmer',
        company: 'Senac',
        description: 'Technical training for systems programming.',
      },
    ],
    de: [
      {
        icon: <FaBriefcase />,
        year: '2026',
        title: 'Postgraduiertenstudium in Softwareentwicklung',
        company: 'Unifor',
        description: 'Postgraduiertenstudium im Bereich Softwareentwicklung mit Schwerpunkt auf Softwarearchitektur, skalierbarer Entwicklung und bewährten Entwicklungsmethoden.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2026',
        title: 'Studium der Informatik',
        company: 'Unifor',
        description: 'Studium mit Schwerpunkt auf Softwareentwicklung, Algorithmen, Datenstrukturen und Grundlagen der Informatik.',
      },
      {
        icon: <FaBriefcase />,
        year: '2025',
        title: 'Full-Stack-Entwickler',
        company: 'ACI Contabilidade',
        description: 'Entwicklung eines Automatisierungssystems für Buchhaltungsberichte mit Datenextraktion, -verarbeitung und intelligenter Berichterstellung.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2025',
        title: 'Back-End-Entwicklungsausbildung',
        company: 'Oracle Next Education',
        description: 'Fokus auf Back-End-Entwicklung, einschließlich Java, Spring Boot, Oracle-Datenbanken und DevOps-Praktiken.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2023 - 2025',
        title: 'Systemanalyse und -entwicklung',
        company: 'Unifor',
        description: 'Studium mit Schwerpunkt auf Entwicklung und Analyse von Softwaresystemen.',
      },
      {
        icon: <FaBriefcase />,
        year: '2024',
        title: 'Lehrerin für Robotik und Programmierung',
        company: 'Centro Educacional São Sebastião',
        description: 'Leitung der Technologieabteilung und Unterricht in Programmierung und Technologie für die unteren Klassen.',
      },
      {
        icon: <FaBriefcase />,
        year: '2025',
        title: 'IT-Praktikant',
        company: 'Pronutrir - Suporte Nutricional',
        description: 'IT-Infrastruktur-Support, Benutzerverwaltung im Active Directory und Netzwerküberwachung.',
      },
      {
        icon: <FaBriefcase />,
        year: '2024',
        title: 'Technologielehrerin',
        company: 'Tree House Fortaleza',
        description: 'Leitung der Technologieabteilung und Unterricht in Programmierung und Technologie für die unteren Klassen.',
      },
      {
        icon: <FaGraduationCap />,
        year: '2023',
        title: 'Systemprogrammierer',
        company: 'Senac',
        description: 'Technische Ausbildung zur Systemprogrammierung.',
      },
    ],
  }

  const selectedData = journeyDataMap[language] && journeyDataMap[language].length > 0
    ? journeyDataMap[language]
    : journeyDataMap['pt'];

  const journeyDisplayData = [...selectedData, ...selectedData];

  return (
    <section id="journey" className="relative overflow-hidden">
      <ParticlesBackground id="particles-journey">
        <div className="py-24 relative z-10">

          <div className="container mx-auto px-6 mb-16">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-center font-heading text-[#F4C542]">
                {t.journeyTitle}
              </h2>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>

            <div className="group relative w-full overflow-hidden py-20">

              <div className="relative inline-flex animate-marquee hover:[animation-play-state:paused]">

                <div className="absolute top-1/2 left-0 h-[2px] w-full bg-slate-800 -translate-y-1/2 z-0"></div>
                <div className="absolute top-1/2 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#F4C542] to-transparent -translate-y-1/2 z-0 opacity-50 blur-sm"></div>

                {journeyDisplayData.map((item, index) => (
                  <div key={index} className="relative flex-shrink-0 w-[500px] h-[500px] flex items-center justify-center mx-8">

                    <div className="absolute top-1/2 -translate-y-1/2 z-20 left-1/2 -translate-x-1/2">
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0D1B2A] border-2 border-[#F4C542] shadow-[0_0_15px_rgba(244,197,66,0.3)] z-20 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-[#F4C542] text-xl relative z-10">{item.icon}</div>
                        <div className="absolute inset-0 rounded-full bg-[#F4C542] opacity-20 animate-ping"></div>
                      </div>
                    </div>

                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-96 p-6 rounded-xl 
                      bg-[#112240]/90 backdrop-blur-md border border-slate-700/50
                      hover:border-[#F4C542]/50 hover:shadow-[0_0_30px_rgba(244,197,66,0.1)]
                      transition-all duration-300 z-10 group/card
                      ${index % 2 === 0 ? 'bottom-[60%] mb-8' : 'top-[60%] mt-8'}`}
                    >
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#F4C542]/50 to-transparent h-8
                        ${index % 2 === 0
                            ? 'bottom-[-34px] rotate-180'
                            : 'top-[-34px]'
                          }`}
                      ></div>

                      <div className="flex justify-between items-start mb-2">
                        <time className="text-sm font-mono font-bold text-[#F4C542] bg-[#F4C542]/10 px-2 py-1 rounded">
                          {item.year}
                        </time>
                      </div>

                      <div className="text-xs font-mono text-cyan-500 mb-3 border-b border-slate-700 pb-2">
                        {`@ ${item.company}`}
                      </div>

                      <h3 className="text-lg font-bold mb-2 font-heading text-white group-hover/card:text-[#F4C542] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-400 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </ParticlesBackground>
    </section>
  );
}