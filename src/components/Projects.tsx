// src/components/Projects.tsx
'use client';

import { useState, useRef } from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';
// Mudança: Usar 'react-icons' que já tens instalado para evitar erros de imagem/ícone
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiTerminal, FiCode } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
// Nota: Não importamos 'swiper/css/navigation' para evitar carregar estilos das setas antigas

// Tipos
type ProjectCategory = 'Todos' | 'Full Stack' | 'Front-end' | 'Back-end' | 'Lógica & Java';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
  category: ProjectCategory;
  highlight?: boolean;
}

export default function Projects() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const swiperRef = useRef<SwiperType | null>(null);

  const categories: ProjectCategory[] = ['Todos', 'Full Stack', 'Front-end', 'Back-end', 'Lógica & Java'];

  // --- DADOS DOS PROJETOS COMPLETOS (PT, EN, DE) ---
  const projectsDataMap: Record<string, Project[]> = {
    pt: [
      {
        title: 'TaxMed - Sistema Fiscal',
        description: 'Aplicação Web completa para emissão de notas fiscais e gestão fiscal. Destaque pela complexidade de regras de negócio.',
        technologies: ['Node.js', 'PostgreSQL', 'API Rest', 'Back-end'],
        githubUrl: 'https://github.com/Tax-Med/Taxmede-backend',
        demoUrl: 'https://www.taxmed.com.br/',
        category: 'Full Stack',
        highlight: true,
      },
      {
        title: 'Experiência 3D Web',
        description: 'Site imersivo explorando tecnologias 3D na web. Uma demonstração de capacidade gráfica e interatividade.',
        technologies: ['Three.js', 'React', 'WebGL'],
        githubUrl: 'https://github.com/KarineDuarte15/Site-com-experiencia3d',
        demoUrl: 'https://site-com-experiencia3d.vercel.app/',
        category: 'Front-end',
      },
      {
        title: 'Barbearia Vue.js',
        description: 'Interface moderna para agendamentos de barbearia, desenvolvida para explorar a reatividade do Vue.js.',
        technologies: ['Vue.js', 'JavaScript', 'CSS3'],
        githubUrl: 'https://github.com/KarineDuarte15/barbearia-front-version-vue',
        demoUrl: null,
        category: 'Front-end',
      },
      {
        title: 'TechFix Assistência',
        description: 'Landing page e sistema de gestão para assistência técnica de equipamentos eletrônicos.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        githubUrl: 'https://github.com/KarineDuarte15/Site-techfix',
        demoUrl: null,
        category: 'Front-end',
      },
      {
        title: 'Automação Contábil',
        description: 'Extração e processamento de dados a partir de PDFs, gerando relatórios inteligentes com gráficos.',
        technologies: ['Python', 'FastAPI', 'Pandas'],
        githubUrl: 'https://github.com/KarineDuarte15/LUCID-COUNT',
        demoUrl: null,
        category: 'Back-end',
      },
      {
        title: 'Conta Bancária Java',
        description: 'Simulação completa de operações bancárias aplicando conceitos de Orientação a Objetos.',
        technologies: ['Java', 'POO', 'Estrutura de Dados'],
        githubUrl: 'https://github.com/KarineDuarte15/ContaBancaria',
        demoUrl: null,
        category: 'Lógica & Java',
      },
      {
        title: 'Conversor Bin2Dec',
        description: 'Desafio de lógica: conversor de binário para decimal sem usar funções nativas.',
        technologies: ['JavaScript', 'Algoritmos'],
        githubUrl: 'https://github.com/KarineDuarte15/Bin2Dec-Conversor-Bin-rio-para-Decimal',
        demoUrl: null,
        category: 'Lógica & Java',
      },
      {
        title: 'Amigo Secreto',
        description: 'Aplicação para sorteio de amigo secreto, focada em manipulação de arrays e aleatoriedade.',
        technologies: ['JavaScript', 'Lógica', 'DOM'],
        githubUrl: 'https://github.com/KarineDuarte15/AmigoSecretochallenge',
        demoUrl: null,
        category: 'Lógica & Java',
      },
      {
        title: 'Lumen Consultoria',
        description: 'Site institucional especializado em soluções contábeis e financeiras.',
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteLumenConsultoria',
        demoUrl: 'https://www.lumenconsultoriabrasil.com.br/',
        category: 'Front-end',
      },
      {
        title: 'Imóveis Zeferino',
        description: 'Plataforma para imobiliária com listagem e filtragem de imóveis.',
        technologies: ['Next.js', 'React', 'TailwindCSS'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteZeferinoOficial',
        demoUrl: 'https://imoveiszeferino.com.br/',
        category: 'Front-end',
      },
    ],
    en: [
      {
        title: 'TaxMed - Tax System',
        description: 'Complete Web Application for invoice issuance and tax management. Highlighted for business logic complexity.',
        technologies: ['Node.js', 'PostgreSQL', 'API Rest', 'Back-end'],
        githubUrl: 'https://github.com/Tax-Med/Taxmede-backend',
        demoUrl: null,
        category: 'Full Stack',
        highlight: true,
      },
      {
        title: '3D Web Experience',
        description: 'Immersive website exploring 3D web technologies. A demonstration of graphics capacity and interactivity.',
        technologies: ['Three.js', 'React', 'WebGL'],
        githubUrl: 'https://github.com/KarineDuarte15/Site-com-experiencia3d',
        demoUrl: 'https://site-com-experiencia3d.vercel.app/',
        category: 'Front-end',
      },
      {
        title: 'Barber Shop Vue.js',
        description: 'Modern interface for barber shop appointments, developed to explore Vue.js reactivity.',
        technologies: ['Vue.js', 'JavaScript', 'CSS3'],
        githubUrl: 'https://github.com/KarineDuarte15/barbearia-front-version-vue',
        demoUrl: null,
        category: 'Front-end',
      },
      {
        title: 'TechFix Assistance',
        description: 'Landing page and management system for electronic equipment technical support.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        githubUrl: 'https://github.com/KarineDuarte15/Site-techfix',
        demoUrl: null,
        category: 'Front-end',
      },
      {
        title: 'Accounting Automation',
        description: 'Data extraction and processing from PDFs, generating intelligent reports with charts.',
        technologies: ['Python', 'FastAPI', 'Pandas'],
        githubUrl: 'https://github.com/KarineDuarte15/LUCID-COUNT',
        demoUrl: null,
        category: 'Back-end',
      },
      {
        title: 'Java Bank Account',
        description: 'Complete simulation of banking operations applying Object-Oriented concepts.',
        technologies: ['Java', 'OOP', 'Data Structures'],
        githubUrl: 'https://github.com/KarineDuarte15/ContaBancaria',
        demoUrl: null,
        category: 'Lógica & Java',
      },
      {
        title: 'Bin2Dec Converter',
        description: 'Logic challenge: binary to decimal converter without using native functions.',
        technologies: ['JavaScript', 'Algorithms'],
        githubUrl: 'https://github.com/KarineDuarte15/Bin2Dec-Conversor-Bin-rio-para-Decimal',
        demoUrl: null,
        category: 'Lógica & Java',
      },
      {
        title: 'Secret Santa',
        description: 'Application for Secret Santa drawing, focused on array manipulation and randomness.',
        technologies: ['JavaScript', 'Logic', 'DOM'],
        githubUrl: 'https://github.com/KarineDuarte15/AmigoSecretochallenge',
        demoUrl: null,
        category: 'Lógica & Java',
      },
      {
        title: 'Lumen Consultoria',
        description: 'Institutional website specialized in accounting and financial solutions.',
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteLumenConsultoria',
        demoUrl: 'https://www.lumenconsultoriabrasil.com.br/',
        category: 'Front-end',
      },
      {
        title: 'Imóveis Zeferino',
        description: 'Real estate platform with property listing and filtering.',
        technologies: ['Next.js', 'React', 'TailwindCSS'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteZeferinoOficial',
        demoUrl: 'https://imoveiszeferino.com.br/',
        category: 'Front-end',
      },
    ],
    de: [
      {
        title: 'TaxMed - Steuersystem',
        description: 'Komplette Webanwendung für Rechnungsstellung und Steuerverwaltung. Hervorgehoben für komplexe Geschäftslogik.',
        technologies: ['Node.js', 'PostgreSQL', 'API Rest', 'Back-end'],
        githubUrl: 'https://github.com/Tax-Med/Taxmede-backend',
        demoUrl: null,
        category: 'Full Stack',
        highlight: true,
      },
      {
        title: '3D-Web-Erlebnis',
        description: 'Immersive Website, die 3D-Webtechnologien erforscht. Eine Demonstration von Grafikleistung und Interaktivität.',
        technologies: ['Three.js', 'React', 'WebGL'],
        githubUrl: 'https://github.com/KarineDuarte15/Site-com-experiencia3d',
        demoUrl: 'https://site-com-experiencia3d.vercel.app/',
        category: 'Front-end',
      },
      {
        title: 'Barbershop Vue.js',
        description: 'Moderne Schnittstelle für Friseurtermine, entwickelt, um die Reaktivität von Vue.js zu erforschen.',
        technologies: ['Vue.js', 'JavaScript', 'CSS3'],
        githubUrl: 'https://github.com/KarineDuarte15/barbearia-front-version-vue',
        demoUrl: null,
        category: 'Front-end',
      },
      {
        title: 'TechFix Support',
        description: 'Landingpage und Verwaltungssystem für den technischen Support elektronischer Geräte.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        githubUrl: 'https://github.com/KarineDuarte15/Site-techfix',
        demoUrl: null,
        category: 'Front-end',
      },
      {
        title: 'Buchhaltungsautomatisierung',
        description: 'Datenextraktion und -verarbeitung aus PDFs, Erstellung intelligenter Berichte mit Diagrammen.',
        technologies: ['Python', 'FastAPI', 'Pandas'],
        githubUrl: 'https://github.com/KarineDuarte15/LUCID-COUNT',
        demoUrl: null,
        category: 'Back-end',
      },
      {
        title: 'Java-Bankkonto',
        description: 'Vollständige Simulation von Bankgeschäften unter Anwendung objektorientierter Konzepte.',
        technologies: ['Java', 'OOP', 'Datenstrukturen'],
        githubUrl: 'https://github.com/KarineDuarte15/ContaBancaria',
        demoUrl: null,
        category: 'Lógica & Java',
      },
      {
        title: 'Bin2Dec-Konverter',
        description: 'Logik-Herausforderung: Binär-zu-Dezimal-Konverter ohne Verwendung nativer Funktionen.',
        technologies: ['JavaScript', 'Algorithmen'],
        githubUrl: 'https://github.com/KarineDuarte15/Bin2Dec-Conversor-Bin-rio-para-Decimal',
        demoUrl: null,
        category: 'Lógica & Java',
      },
      {
        title: 'Wichteln (Secret Santa)',
        description: 'Anwendung für die Wichtelauslosung, konzentriert auf Array-Manipulation und Zufälligkeit.',
        technologies: ['JavaScript', 'Logik', 'DOM'],
        githubUrl: 'https://github.com/KarineDuarte15/AmigoSecretochallenge',
        demoUrl: null,
        category: 'Lógica & Java',
      },
      {
        title: 'Lumen Consultoria',
        description: 'Unternehmenswebsite spezialisiert auf buchhalterische und finanzielle Lösungen.',
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteLumenConsultoria',
        demoUrl: 'https://www.lumenconsultoriabrasil.com.br/',
        category: 'Front-end',
      },
      {
        title: 'Imóveis Zeferino',
        description: 'Immobilienplattform mit Auflistung und Filterung von Immobilien.',
        technologies: ['Next.js', 'React', 'TailwindCSS'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteZeferinoOficial',
        demoUrl: 'https://imoveiszeferino.com.br/',
        category: 'Front-end',
      },
    ]
  };

  const allProjects = projectsDataMap[language] && projectsDataMap[language].length > 0
    ? projectsDataMap[language]
    : projectsDataMap['pt'];

  const filteredProjects = activeCategory === 'Todos'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  const sortedProjects = [...filteredProjects].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0));

  return (
    <section id="projects" className="relative overflow-hidden">
      <ParticlesBackground id="particles-projects">
        <div className="container mx-auto px-6 py-24 relative z-10">

          <RevealOnScroll>
            <div className="flex items-center justify-center gap-3 mb-8">
              <FiTerminal className="text-[#F4C542]" size={32} />
              <h2 className="text-4xl font-bold text-center font-heading text-[#F4C542]">
                {t.projectsTitle}
              </h2>
            </div>
          </RevealOnScroll>

          {/* FILTRO */}
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    font-mono text-sm px-4 py-2 rounded transition-all duration-300 border-b-2
                    ${activeCategory === cat
                      ? 'text-[#F4C542] border-[#F4C542] bg-[#F4C542]/10'
                      : 'text-gray-500 border-transparent hover:text-gray-300 hover:border-gray-600'
                    }
                  `}
                >
                  {`> ${cat}`}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            {/* CONTAINER COM PADDING LATERAL PARA OS BOTÕES */}
            <div className="relative group/slider px-4 md:px-14">

              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={24} // Espaço entre os cards
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 6000, disableOnInteraction: true }}
                // BREAKPOINTS EXATOS: 1, 2 ou 3
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1280: { slidesPerView: 3 }, // Ajustei para 1280px para garantir que 3 cabem folgados
                }}
                // Padding dentro do swiper para a sombra não cortar, mas overflow hidden fora
                className="pb-14 !px-4"
              >
                {sortedProjects.map((project, index) => (
                  <SwiperSlide key={index} className="h-auto py-4">

                    {/* CARD ULTRA MODERNO */}
                    <div className={`
                      relative rounded-xl overflow-hidden flex flex-col h-full 
                      bg-[#112240]/90 backdrop-blur-sm
                      border border-slate-700/50 
                      transition-all duration-500 ease-out
                      hover:-translate-y-2 
                      hover:border-cyan-500/50 
                      hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                      group/card
                    `}>

                      {/* Linha Topo */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                      <div className="p-6 flex-grow flex flex-col relative z-10">

                        <div className="flex justify-between items-start mb-6">
                          <div className="p-2 bg-slate-800/50 rounded-lg text-cyan-500 group-hover/card:text-[#F4C542] transition-colors">
                            <FiCode size={20} />
                          </div>

                          <div className="flex gap-3">
                            <a href={project.githubUrl} target="_blank" className="text-slate-400 hover:text-white hover:scale-110 transition-all p-1">
                              <FaGithub size={20} />
                            </a>
                            {project.demoUrl && (
                              <a href={project.demoUrl} target="_blank" className="text-slate-400 hover:text-[#F4C542] hover:scale-110 transition-all p-1">
                                <FiExternalLink size={20} />
                              </a>
                            )}
                          </div>
                        </div>

                        <h3 className="text-xl text-white font-bold mb-3 font-heading tracking-tight group-hover/card:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>

                        <div className="mb-4">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#F4C542]/80 font-mono">
                             //{project.category}
                          </span>
                        </div>

                        <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow font-sans border-l-2 border-slate-700 pl-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-[10px] rounded bg-slate-800/80 text-cyan-300/80 font-mono border border-cyan-900/30 group-hover/card:border-cyan-500/30 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.highlight && (
                        <div className="absolute top-4 right-4 animate-pulse">
                          <FaStar className="text-[#F4C542]" size={12} />
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* CONTROLES - Bem posicionados nas laterais */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 -left-2 md:-left-4 z-20 -translate-y-1/2 p-3 text-cyan-500 hover:text-[#F4C542] transition-all bg-[#0D1B2A] border border-slate-700 hover:border-[#F4C542] rounded-full shadow-lg hidden md:flex items-center justify-center group/btn"
                aria-label="Anterior"
              >
                <FiChevronLeft size={24} className="group-hover/btn:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 -right-2 md:-right-4 z-20 -translate-y-1/2 p-3 text-cyan-500 hover:text-[#F4C542] transition-all bg-[#0D1B2A] border border-slate-700 hover:border-[#F4C542] rounded-full shadow-lg hidden md:flex items-center justify-center group/btn"
                aria-label="Próximo"
              >
                <FiChevronRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

            </div>
          </RevealOnScroll>
        </div>
      </ParticlesBackground>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          display: none !important;
        }
        .swiper-pagination-bullet {
          background: #334155 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #06b6d4 !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
        /* Importante: Removemos o overflow: visible global do Swiper para evitar cortes feios */
        .swiper {
          padding-left: 4px; 
          padding-right: 4px;
        }
        .swiper-wrapper {
            align-items: stretch;
        }
      `}</style>
    </section>
  );
}