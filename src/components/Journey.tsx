'use client';

import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Journey() {
  const { t, language } = useLanguage();

  // Dados da Jornada separados por idioma
  const journeyDataMap = {
    pt: [
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
  };

  // Seleciona a lista baseada no idioma atual (fallback para pt)
  const selectedData = journeyDataMap[language] || journeyDataMap['pt'];

  // Duplicamos a lista para garantir o loop infinito suave na animação
  const journeyDisplayData = [...selectedData, ...selectedData];

  return (
    <section id="journey">
      <ParticlesBackground id="particles-journey">
        <div className="py-20 overflow-hidden">
          
          {/* Título com Animação e Tradução */}
          <div className="container mx-auto px-20">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-center mb-16 font-heading text-[#F4C542]">
                {t.journeyTitle}
              </h2>
            </RevealOnScroll>
          </div>

          {/* Animação da Linha do Tempo */}
          <RevealOnScroll delay={0.2}>
            <div className="group relative w-full overflow-hidden">
              <div className="relative inline-flex animate-marquee">
                
                {/* Linha do tempo central */}
                <div className="absolute top-1/2 left-0 h-0.5 w-full bg-[#F4C542] -translate-y-1/2 z-0"></div>
                
                {journeyDisplayData.map((item, index) => (
                  <div key={index} className="relative flex-shrink-0 w-[600px] h-[700px] flex items-center justify-center mx-4">
                    
                    {/* Ícone central */}
                    <div className="absolute top-1/2 -translate-y-1/2 z-20 left-1/2 -translate-x-1/2">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#F4C542] bg-[#0D1B2A] text-white">
                        <div className="text-[#F4C542] text-xl">{item.icon}</div>
                      </div>
                    </div>

                    {/* Card de Conteúdo */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 w-80 p-6 rounded-lg shadow-xl border border-[#F4C542]/30 z-10 hover:scale-105 transition-transform duration-300 bg-[#1B263B]
                      ${index % 2 === 0 ? 'bottom-[60%] mb-4' : 'top-[60%] mt-4'}`}
                    >
                      {/* Seta indicativa */}
                      <div 
                        className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent
                        ${index % 2 === 0 
                          ? 'bottom-[-10px] border-t-[10px] border-t-[#1B263B]' 
                          : 'top-[-10px] border-b-[10px] border-b-[#1B263B]'
                        }`}
                      ></div>

                      <time className="text-xs font-bold text-[#F4C542] uppercase tracking-wider">{item.year}</time>
                      <div className="text-xs text-gray-400 mb-2">{item.company}</div>
                      <h3 className="text-lg font-bold mb-2 font-heading text-white leading-tight">{item.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
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