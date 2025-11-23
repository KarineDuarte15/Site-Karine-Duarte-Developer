'use client';

import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t, language } = useLanguage();

  // Dados dos projetos separados por idioma
  const projectsDataMap = {
    pt: [
      {
        title: 'Sistema de Automação de Relatórios Contábeis',
        description: 'Sistema completo para automação, com extração e processamento de dados a partir de PDFs, gerando relatórios inteligentes com gráficos e envio automático para clientes.',
        technologies: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'Docker', 'API Integration'],
        githubUrl: 'https://github.com/KarineDuarte15/LUCID-COUNT',
        demoUrl: null,
      },
      {
        title: 'Website Lumen Consultoria',
        description: 'Site institucional para a Lumen Consultoria, uma empresa especializada em soluções contábeis e financeiras. O site apresenta os serviços oferecidos, equipe e informações de contato.',
        technologies: ['Vite', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Docker', 'typed.js'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteLumenConsultoria',
        demoUrl: 'https://www.lumenconsultoriabrasil.com.br/',
      },
      {
        title: 'Projeto Site TaxMed',
        description: 'Website institucional para a empresa TaxMed, especializada em soluções fiscais para o setor de saúde. O site apresenta os serviços oferecidos, equipe e informações de contato.',
        technologies: ['Python', 'Pandas', 'Jupyter', 'JavaScript', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteTexMed',
        demoUrl: 'https://www.taxmed.com.br/',
      },
      {
        title: 'Website de Portfólio Pessoal',
        description: 'Este próprio site! Desenvolvido com as tecnologias mais modernas de front-end para criar uma experiência de usuário fluida e responsiva.',
        technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        githubUrl: 'https://github.com/KarineDuarte15/Site-Karine-Duarte-Developer',
        demoUrl: 'https://site-karine-duarte-developer.vercel.app',
      },
      {
        title: 'Website Imóveis Zeferino',
        description: 'Website institucional para Imóveis Zeferino, corretora focada em oferecer as melhores opções de imóveis residenciais e comerciais. O site apresenta os imóveis disponíveis e serviços.',
        technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteZeferinoOficial',
        demoUrl: 'https://imoveiszeferino.com.br/',
      },
      {
        title: 'CRM para Gestão de Clientes',
        description: 'A aplicação para o CRM de Gestão de Clientes, uma solução para otimização de processos de atendimento e relacionamento com clientes.',
        technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Docker'],
        githubUrl: 'https://github.com/KarineDuarte15/CRM-Customers',
        demoUrl: null,
      },
    ],
    en: [
      {
        title: 'Accounting Reports Automation System',
        description: 'Complete automation system with data extraction and processing from PDFs, generating intelligent reports with charts and automatic dispatch to clients.',
        technologies: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'Docker', 'API Integration'],
        githubUrl: 'https://github.com/KarineDuarte15/LUCID-COUNT',
        demoUrl: null,
      },
      {
        title: 'Lumen Consultoria Website',
        description: 'Institutional website for Lumen Consultoria, a company specializing in accounting and financial solutions. Showcases services, team, and contact info.',
        technologies: ['Vite', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Docker', 'typed.js'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteLumenConsultoria',
        demoUrl: 'https://www.lumenconsultoriabrasil.com.br/',
      },
      {
        title: 'TaxMed Website Project',
        description: 'Institutional website for TaxMed, specializing in tax solutions for the healthcare sector. Presents services, team, and contact information.',
        technologies: ['Python', 'Pandas', 'Jupyter', 'JavaScript', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteTexMed',
        demoUrl: 'https://www.taxmed.com.br/',
      },
      {
        title: 'Personal Portfolio Website',
        description: 'This very website! Developed with modern front-end technologies to create a fluid and responsive user experience.',
        technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        githubUrl: 'https://github.com/KarineDuarte15/Site-Karine-Duarte-Developer',
        demoUrl: 'https://site-karine-duarte-developer.vercel.app',
      },
      {
        title: 'Imóveis Zeferino Website',
        description: 'Institutional website for Imóveis Zeferino, a real estate agency focused on residential and commercial properties. Displays available properties and services.',
        technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteZeferinoOficial',
        demoUrl: 'https://imoveiszeferino.com.br/',
      },
      {
        title: 'Customer Management CRM',
        description: 'Application for Customer Management CRM, a solution for optimizing customer service and relationship processes.',
        technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Docker'],
        githubUrl: 'https://github.com/KarineDuarte15/CRM-Customers',
        demoUrl: null,
      },
    ],
    de: [
      {
        title: 'Automatisierungssystem für Buchhaltungsberichte',
        description: 'Komplettes System zur Automatisierung mit Datenextraktion und -verarbeitung aus PDFs, Erstellung intelligenter Berichte und automatischem Versand.',
        technologies: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'Docker', 'API Integration'],
        githubUrl: 'https://github.com/KarineDuarte15/LUCID-COUNT',
        demoUrl: null,
      },
      {
        title: 'Lumen Consultoria Website',
        description: 'Unternehmenswebsite für Lumen Consultoria, spezialisiert auf buchhalterische und finanzielle Lösungen. Zeigt Dienstleistungen, Team und Kontaktinfos.',
        technologies: ['Vite', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Docker', 'typed.js'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteLumenConsultoria',
        demoUrl: 'https://www.lumenconsultoriabrasil.com.br/',
      },
      {
        title: 'TaxMed Website Projekt',
        description: 'Unternehmenswebsite für TaxMed, spezialisiert auf Steuerlösungen für den Gesundheitssektor. Präsentiert Dienstleistungen und Kontaktinformationen.',
        technologies: ['Python', 'Pandas', 'Jupyter', 'JavaScript', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteTexMed',
        demoUrl: 'https://www.taxmed.com.br/',
      },
      {
        title: 'Persönliches Portfolio Website',
        description: 'Diese Website! Entwickelt mit modernen Front-End-Technologien für eine flüssige und reaktionsschnelle Benutzererfahrung.',
        technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        githubUrl: 'https://github.com/KarineDuarte15/Site-Karine-Duarte-Developer',
        demoUrl: 'https://site-karine-duarte-developer.vercel.app',
      },
      {
        title: 'Imóveis Zeferino Website',
        description: 'Unternehmenswebsite für Imóveis Zeferino, Immobilienmakler für Wohn- und Gewerbeimmobilien. Zeigt verfügbare Immobilien und Dienstleistungen.',
        technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteZeferinoOficial',
        demoUrl: 'https://imoveiszeferino.com.br/',
      },
      {
        title: 'CRM für Kundenmanagement',
        description: 'Anwendung für CRM-Kundenmanagement, eine Lösung zur Optimierung von Kundenservice- und Beziehungsprozessen.',
        technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Docker'],
        githubUrl: 'https://github.com/KarineDuarte15/CRM-Customers',
        demoUrl: null,
      },
    ],
  };

  const currentProjects = projectsDataMap[language] || projectsDataMap['pt'];

  return (
    <section id="projects">
      <ParticlesBackground id="particles-projects">
        <div className="container mx-auto px-6 py-24">
          
          <RevealOnScroll>
            {/* Título */}
            <h2 className="text-4xl font-bold text-center mb-12 font-heading text-[#F4C542]">
              {t.projectsTitle}
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                
                {/* AQUI ESTÁ A CORREÇÃO:
                   bg-[#1B263B] fixo (não muda com o tema)
                   border-transparent (original) com hover amarelo
                */}
                <div className="bg-[#1B263B] rounded-lg shadow-lg overflow-hidden flex flex-col border border-transparent hover:border-[#F4C542] transition-all duration-300 h-full group hover:-translate-y-2">
                  <div className="p-6 flex-grow flex flex-col">
                    
                    <div className="flex justify-end items-center space-x-4 mb-4">
                      {/* Ícones brancos (cor original) */}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F4C542] transition-colors">
                        <FaGithub size={22} />
                      </a>
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F4C542] transition-colors">
                          <FiExternalLink size={22} />
                        </a>
                      )}
                    </div>

                    {/* Título branco fixo */}
                    <h3 className="text-2xl text-white font-bold mb-3 font-heading group-hover:text-[#F4C542] transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Descrição cinza claro fixo */}
                    <p className="text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-[#0D1B2A] text-[#F4C542] text-xs font-semibold px-3 py-1 rounded-full border border-[#F4C542]/20">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </ParticlesBackground>
    </section>
  );
}