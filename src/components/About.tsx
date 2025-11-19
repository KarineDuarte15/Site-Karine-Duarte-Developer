// src/components/About.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload, FaTable, FaProjectDiagram, FaTasks, FaCog, FaJava, FaChartBar } from 'react-icons/fa';
import {
  SiPython,
  SiFastapi,
  SiDjango,
  SiJavascript,
  SiReact,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiMongodb,
  SiOracle,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiSupabase,
  SiTableau
} from 'react-icons/si';

const skills = [
    "Python", "FastAPI", "Django", "JavaScript", "React", "Java", "Spring Boot", "Node.js", "Express.js", "TypeScript", "Next.js", "HTML", "CSS", "TailwindCSS", "Git", "GitHub", "SQL", "NoSQL", "Oracle", "PostgreSQL", "MySQL", "Docker", "Supabase", "Pandas", "Power BI", "Tableau", "Agile Methodologies", "Scrum", "ETL"
];

const skillIcons: Record<string, React.ElementType> = {
  "Python": SiPython,
  "FastAPI": SiFastapi,
  "Django": SiDjango,
  "JavaScript": SiJavascript,
  "React": SiReact,
  "Java": FaJava, //
  "Spring Boot": SiSpring,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "TypeScript": SiTypescript,
  "Next.js": SiNextdotjs,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "TailwindCSS": SiTailwindcss,
  "Git": SiGit,
  "GitHub": SiGithub,
  "NoSQL": SiMongodb,
  "Oracle": SiOracle,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "Docker": SiDocker,
  "Supabase": SiSupabase,
  "Power BI": FaChartBar,
  "Tableau": SiTableau,
  "Pandas": FaTable,
  "SQL": FaProjectDiagram,
  "Agile Methodologies": FaProjectDiagram,
  "Scrum": FaTasks,
  "ETL": FaProjectDiagram
};

export default function About() {
  return (
    
    <section id="about" className="py-0 text-center bg-[#E5E5E5]">
      <div className="container mx-auto px-6 gap-3  p-12 ">
       <div className="font-extralight grid md:grid-cols-5 gap-25 text-left bg-[#E5E5E5] items-center">
          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h2 className="text-4xl font-bold text-center text-blue-950 mb-4">Sobre Mim</h2>
            <p className="text-muted text-blue-950 mb-6 text-lg">
                Minha jornada na tecnologia começou com a curiosidade, mas se transformou em uma carreira focada em criar soluções. Com formação em Análise e Desenvolvimento de Sistemas, hoje eu conecto o poder do back-end com a inteligência da análise de dados para gerar impacto real.
            </p>
            <p className="text-muted text-blue-950 mb-8 text-lg">
              Atuo como Desenvolvedora Full-Stack e Analista de Dados, utilizando um arsenal de tecnologias para construir sistemas eficientes, automatizar processos e transformar dados brutos em insights valiosos que impulsionam decisões.
            </p>
            <h3 className="text-2xl bg-[#E5E5E5] text-blue-950 font-semibold mb-4 text-left">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill) => {
                
                const IconComponent = skillIcons[skill] || FaCog; 
                
                return (
                  <span key={skill} className="bg-yellow-500 text-blue-950 text-sm font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
                    {/* Renderiza o ícone */}
                    <IconComponent className="text-lg" /> 
                    {skill}
                  </span>
                );
              })}
            </div>

            <a
              href="/Erika Karine Duarte 2025.2 currículo lattes.pdf"
              download
              className="bg-[#E5E5E5] inline-flex items-center gap-3 bg-blue-950 text-navy font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform duration-300 hover:scale-105"
            >
              <FaDownload />
              Download CV
            </a> 
          </motion.div>
                    {/* Coluna da Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center md:col-span-2"
          >
            <Image
              src="/profile11.png" 
              alt="Erika Karine Duarte"
              width={800} 
              height={800}
              
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}