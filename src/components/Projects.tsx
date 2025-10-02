// src/components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { div, section } from 'framer-motion/client';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    title: 'Sistema de Automação de Relatórios Contábeis',
    description: 'Sistema completo para automação, com extração e processamento de dados a partir de PDFs, gerando relatórios inteligentes com gráficos e envio automático para clientes. [cite: 53, 7]',
    technologies: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'Docker', 'API Integration'],
    githubUrl: 'https://github.com/KarineDuarte15/LUCID-COUNT', // TODO: Substituir pelo link do seu repositório
    demoUrl: null, // Deixe null se não houver link para demo
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
    githubUrl: 'https://github.com/KarineDuarte15/Site-Karine-Duarte-Developer', // TODO: Link para o repositório deste portfólio
    demoUrl: 'https://site-karine-duarte-developer.vercel.app', // TODO: Link para o site no ar
  },
    {
    title: 'Website do Projeto Leão Tech',
    description: 'Website estático para o Projeto Leão Tech, uma iniciativa educacional focada em tecnologia. O site apresenta informações sobre o projeto, equipe e formas de participação.',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    githubUrl: 'https://github.com/KarineDuarte15/ProjetoLeaoTechFinal', // TODO: Link para o repositório deste portfólio
    demoUrl: '#', // TODO: Link para o site no ar
  },
   {
    title: 'CRM para Gestão de Clientes',
    description: 'A aplicação para o CRM de Gestão de Clientes, uma solução para otimização de processos de atendimento e relacionamento com clientes.',
    technologies: ['java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/KarineDuarte15/CRM-Customers', // TODO: Link para o repositório deste portfólio
    demoUrl: '#', // TODO: Link para o site no ar
  },
    {
    title: 'Conexão Viva - Plataforma de Ajuda Psicológica',
    description: 'A aplicação Conexão Viva, uma plataforma de ajuda psicológica. O site apresenta informações sobre os serviços oferecidos, equipe e formas de contato.',
    technologies: ['vite', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion','Docker', 'typed.js'],
    githubUrl: 'https://github.com/MaryaJoSo/conexao-viva', // TODO: Link para o repositório deste portfólio
    demoUrl: '#', // TODO: Link para o site no ar
  },


];

export default function Projects() {
  return (
    <section id="projects" className="py-0 bg-card">
      <div className="container bg-[color:var(--foreground)] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 font-heading text-foreground"
        >
          Meus Projetos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[color:var(--primary-accent)] rounded-lg shadow-lg overflow-hidden flex flex-col border border-[color:var(--secondary-accent)]/30 hover:border-[color:var(--secondary-accent)] transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-end items-center space-x-4 mb-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-black
                   hover:text-accent transition-colors" aria-label="GitHub repository">
                    <FaGithub size={22} />
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="Live demo">
                      <FiExternalLink size={22} />
                    </a>
                  )}
                </div>
                <h3 className="text-2xl text-[color:var(--background)] font-bold mb-3 font-heading">{project.title}</h3>
                <p className="text-muted mb-4 flex-grow text-[color:var(--background)]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[color:var(--background)]/20">
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