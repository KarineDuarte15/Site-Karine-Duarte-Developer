// src/components/About.tsx
'use client';

import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';

import { FaDownload, FaTable, FaProjectDiagram, FaTasks, FaCog, FaJava, FaChartBar, FaFileAlt } from 'react-icons/fa';
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
import ParticlesBackground from './ParticlesBackground';

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
  const { t } = useLanguage();
  return (
    <section id="about">
      <ParticlesBackground id="particles-about" className="min-h-screen">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            
            <div className="md:col-span-3 text-left">
              <RevealOnScroll>
                {/* Usando t.aboutTitle */}
                <h2 className="text-4xl font-bold text-[#F4C542] mb-4">{t.aboutTitle}</h2>
                
                {/* Usando t.aboutText1 e t.aboutText2 */}
                <p className="mb-6 text-lg">{t.aboutText1}</p>
                <p className="mb-8 text-lg">{t.aboutText2}</p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                {/* Usando t.techSkills */}
                <h3 className="text-2xl font-semibold mb-6 text-left text-[#F4C542] dark:text-[#F4C542]">{t.techSkills}</h3>
                
                <div className="flex flex-wrap gap-3 mb-8">
                   {/* ... map das skills ... */}
                   {skills.map((skill) => {
                    const IconComponent = skillIcons[skill] || FaCog; 
                    return (
                      <span key={skill} className="bg-[#1B263B] text-[#F4C542] border border-[#F4C542]/30 text-sm font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform cursor-default hover:bg-[#F4C542] hover:text-[#0D1B2A]">
                        <IconComponent className="text-lg" /> 
                        {skill}
                      </span>
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-4">
                <a
                  href="/Currículo Erika Karine 2026.1 Lattes.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-[#F4C542] text-[#0D1B2A] font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-white transition-transform duration-300 hover:scale-105"
                >
                  <FaDownload />
                  {t.downloadCv} {/* <--- Tradução do botão */}
                </a>

                {/* Botão 2: Carta de Apresentação (NOVO) */}
                  
                <a
                    href="/Carta de Apresentação Erika Karine 2026.1 Lattes.pdf" 
                    download
                    className="inline-flex items-center gap-3 bg-[#1B263B] text-[#F4C542] border border-[#F4C542] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#F4C542] hover:text-[#0D1B2A] transition-all duration-300 hover:scale-105"
                >
                  <FaFileAlt />
                  {t.coverLetter}
                </a>

                </div> 

              </RevealOnScroll>
            </div>
            
            <div className="flex justify-center md:col-span-2">
               <RevealOnScroll delay={0.4}>
                  <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-2xl overflow-hidden">
                    <Image
                      src="/profile11.png" 
                      alt="Erika Karine Duarte"
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
               </RevealOnScroll>
            </div>
          </div>
        </div>
      </ParticlesBackground>
    </section>
  );
}