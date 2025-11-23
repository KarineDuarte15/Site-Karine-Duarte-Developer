// src/components/Projects.tsx
'use client';


import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';

const projectsData = [
  {
    title: 'Sistema de Automação de Relatórios Contábeis',
    description: 'Sistema completo para automação, com extração e processamento de dados a partir de PDFs, gerando relatórios inteligentes com gráficos e envio automático para clientes.',
    technologies: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'Docker', 'API Integration'],
    githubUrl: 'https://github.com/KarineDuarte15/LUCID-COUNT',
    demoUrl: null,
  },
 {
    title: 'website Lumen Consultoria',
    description: 'Site institucional para a Lumen Consultoria, uma empresa especializada em soluções contábeis e financeiras. O site apresenta os serviços oferecidos, equipe e informações de contato.',
    technologies: ['vite', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion','Docker', 'typed.js'],
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
    description: 'Website institucional para Imóveis Zeferino, Corretora focada em oferecer as melhores opções de imóveis residenciais e comerciais. O site apresenta os imóveis disponíveis, serviços oferecidos e informações de contato.',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    githubUrl: 'https://github.com/KarineDuarte15/ProjetoSiteZeferinoOficial',
    demoUrl: 'https://imoveiszeferino.com.br/',
  },
   {
    title: 'CRM para Gestão de Clientes',
    description: 'A aplicação para o CRM de Gestão de Clientes, uma solução para otimização de processos de atendimento e relacionamento com clientes.',
    technologies: ['java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/KarineDuarte15/CRM-Customers',
    demoUrl: '#',
  },

];

export default function Projects() {
  return (
    <section id="projects">
      <ParticlesBackground id="particles-projects">
        <div className="container mx-auto px-6 py-24">
          
          <RevealOnScroll>
            <h2 className="text-4xl font-bold text-center mb-12 font-heading text-[#F4C542]">
              Meus Projetos
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="bg-[#1B263B] rounded-lg shadow-lg overflow-hidden flex flex-col border border-transparent hover:border-[#F4C542] transition-all duration-300 h-full group hover:-translate-y-2">
                  <div className="p-6 flex-grow flex flex-col">
                    
                    <div className="flex justify-end items-center space-x-4 mb-4">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F4C542] transition-colors">
                        <FaGithub size={22} />
                      </a>
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F4C542] transition-colors">
                          <FiExternalLink size={22} />
                        </a>
                      )}
                    </div>

                    <h3 className="text-2xl text-white font-bold mb-3 font-heading group-hover:text-[#F4C542] transition-colors">
                      {project.title}
                    </h3>
                    
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