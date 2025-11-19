// src/components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

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
    title: 'Website do Projeto Leão Tech',
    description: 'Website estático para o Projeto Leão Tech, uma iniciativa educacional focada em tecnologia. O site apresenta informações sobre o projeto, equipe e formas de participação.',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    githubUrl: 'https://github.com/KarineDuarte15/ProjetoLeaoTechFinal',
    demoUrl: '#',
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
    // Definimos um fundo escuro para a seção inteira
    <section id="projects" className="py-24 bg-[#E5E5E5]">
      
      <div className="container bg-[#E5E5E5] mx-auto px-6 py-16 rounded-lg">
        {/* 2. CORREÇÃO DO TÍTULO:
          Colocamos o texto "Meus Projetos" de volta e ajustamos a cor para escuro.
        */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 font-heading text-[#0D1B2A]"
        >
          Meus Projetos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[color:var(--background)] rounded-lg shadow-lg overflow-hidden flex flex-col border border-transparent hover:border-yellow-500 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-end items-center space-x-4 mb-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-background hover:text-yellow-500 transition-colors" aria-label="GitHub repository">
                    <FaGithub size={22} />
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-yellow-500 transition-colors" aria-label="Live demo">
                      <FiExternalLink size={22} />
                    </a>
                  )}
                </div>
                <h3 className="text-2xl text-background font-bold mb-3 font-heading">{project.title}</h3>
                <p className="text-background/80 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-background/20">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-card text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}