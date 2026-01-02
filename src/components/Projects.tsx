'use client';

import { useState } from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

  const categories: ProjectCategory[] = ['Todos', 'Full Stack', 'Front-end', 'Back-end', 'Lógica & Java'];

  // --- DADOS DOS PROJETOS COMPLETOS (PT, EN, DE) ---
  const projectsDataMap: Record<string, Project[]> = {
    pt: [
      {
        title: 'TaxMed - Sistema Fiscal',
        description: 'Aplicação Web completa para emissão de notas fiscais e gestão fiscal. Destaque pela complexidade de regras de negócio.',
        technologies: ['Node.js', 'PostgreSQL', 'API Rest', 'Back-end'],
        githubUrl: 'https://github.com/Tax-Med/Taxmede-backend',
        demoUrl: null,
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

  const allProjects = projectsDataMap[language] || projectsDataMap['pt'];

  // Filtro
  const filteredProjects = activeCategory === 'Todos'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory || (activeCategory === 'Full Stack' && project.highlight));

  const sortedProjects = [...filteredProjects].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0));

  return (
    <section id="projects">
      <ParticlesBackground id="particles-projects">
        <div className="container mx-auto px-6 py-24">

          <RevealOnScroll>
            <h2 className="text-4xl font-bold text-center mb-8 font-heading text-[#F4C542]">
              {t.projectsTitle}
            </h2>
          </RevealOnScroll>

          {/* --- FILTRO DE CATEGORIAS (Visual Novo e Elegante - Pílulas Finas) --- */}
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border
                    ${activeCategory === cat
                      ? 'bg-[#F4C542] text-[#0D1B2A] border-[#F4C542] shadow-md transform scale-105'
                      : 'bg-transparent text-gray-400 border-gray-600 hover:border-[#F4C542] hover:text-[#F4C542]'
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 6000, disableOnInteraction: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-14 px-4"
            >
              {sortedProjects.map((project, index) => (
                <SwiperSlide key={index} className="h-auto">

                  {/* CARD DO PROJETO */}
                  <div className={`
                    relative bg-[#1B263B] rounded-xl overflow-hidden flex flex-col h-full group transition-all duration-300
                    border border-white/5 hover:border-[#F4C542] hover:-translate-y-1 hover:shadow-2xl
                    ${project.highlight ? 'ring-1 ring-[#F4C542]/50' : ''}
                  `}>

                    {/* Badge Destaque (Se houver) */}
                    {project.highlight && (
                      <div className="absolute top-0 left-0 bg-[#F4C542] text-[#0D1B2A] text-[10px] font-bold px-3 py-1 rounded-br-lg z-20 shadow-md flex items-center gap-1">
                        <FaStar size={10} /> Destaque
                      </div>
                    )}

                    <div className="p-6 flex-grow flex flex-col">

                      {/* --- CABEÇALHO COM CATEGORIA E LINKS --- */}
                      <div className="flex justify-between items-start mb-4 mt-2">
                        {/* Categoria */}
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#F4C542] bg-[#F4C542]/10 px-2 py-1 rounded border border-[#F4C542]/20">
                          {project.category}
                        </span>

                        {/* ÍCONES DE LINK (GitHub e Site) - Estilo Clássico Restaurado */}
                        <div className="flex gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
                            title="Ver Código no GitHub"
                          >
                            <FaGithub size={20} />
                          </a>

                          {project.demoUrl ? (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-[#F4C542] transition-colors hover:scale-110 transform"
                              title="Visitar Site"
                            >
                              <FiExternalLink size={20} />
                            </a>
                          ) : (
                            // Espaço reservado para manter alinhamento
                            <div className="w-[20px]"></div>
                          )}
                        </div>
                      </div>

                      {/* Título */}
                      <h3 className="text-lg text-white font-bold mb-3 font-heading group-hover:text-[#F4C542] transition-colors line-clamp-2 min-h-[3.5rem]">
                        {project.title}
                      </h3>

                      {/* Descrição */}
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Tecnologias */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-gray-300 text-[10px] bg-[#0D1B2A] px-2 py-1 rounded border border-white/10">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-gray-500 text-[10px] self-center">+{project.technologies.length - 3}</span>
                        )}
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </RevealOnScroll>
        </div>
      </ParticlesBackground>

      {/* --- ESTILOS DO SWIPER --- */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #F4C542 !important;
          background: rgba(13, 27, 42, 0.6);
          backdrop-filter: blur(4px);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(244, 197, 66, 0.3);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #F4C542;
          color: #0D1B2A !important;
          border-color: #F4C542;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 12px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: #4B5563 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #F4C542 !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
        @media (max-width: 640px) {
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}