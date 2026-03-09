// src/components/About.tsx
'use client';

import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';

import { FaDownload, FaCog, FaJava, FaChartBar, FaFileAlt, FaGraduationCap, FaUniversity, FaTable, FaLaptopCode } from 'react-icons/fa';
import {
  SiPython, SiFastapi, SiDjango, SiJavascript, SiReact, SiSpring, SiNodedotjs,
  SiExpress, SiTypescript, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiGit,
  SiGithub, SiMongodb, SiOracle, SiPostgresql, SiMysql, SiDocker, SiSupabase, SiTableau
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
  "Java": FaJava,
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
  "SQL": FaCog,
  "Agile Methodologies": FaCog,
  "Scrum": FaCog,
  "ETL": FaCog
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden">
      <ParticlesBackground id="particles-about" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center">

          {/* CONTAINER PRINCIPAL CENTRALIZADO */}
          <div className="max-w-5xl w-full flex flex-col items-center text-center">

            <RevealOnScroll>
              {/* TÍTULO CENTRALIZADO */}
              <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-12 tracking-tight">
                {t.aboutTitle} <span className="text-[#F4C542]">.</span>
              </h2>
            </RevealOnScroll>

            {/* BIO CARD */}
            <RevealOnScroll delay={0.1}>
              <div className="w-full bg-[#112240]/80 p-8 md:p-12 rounded-3xl border border-slate-700/50 backdrop-blur-md shadow-xl mb-10 relative overflow-hidden group flex flex-col items-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#F4C542] rounded-b shadow-[0_0_15px_rgba(244,197,66,0.4)]"></div>
                <div className="max-w-3xl pt-4">
                  <p className="mb-6 text-lg text-slate-300 leading-relaxed font-sans text-center">
                    {t.aboutText1}
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed font-sans text-center">
                    {t.aboutText2}
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* FORMAÇÃO ACADÊMICA - Agora com 2 cards lado a lado */}
            <RevealOnScroll delay={0.2}>
              <div className="w-full flex flex-col md:flex-row gap-6 mb-10 justify-center">

                {/* Card 1: Ciência da Computação */}
                <div className="flex-1 bg-gradient-to-b from-[#1B263B] to-[#0D1B2A] p-8 rounded-2xl border border-[#F4C542]/30 shadow-lg relative overflow-hidden group hover:border-[#F4C542] transition-colors flex flex-col items-center justify-center text-center">
                  <FaLaptopCode className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-white/5 rotate-0 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-[#F4C542] p-4 rounded-full text-[#0D1B2A] shadow-lg mb-4">
                      <FaGraduationCap size={32} />
                    </div>
                    <span className="text-[#F4C542] font-mono text-xs uppercase tracking-[0.2em] mb-3 border-b border-[#F4C542]/20 pb-1">
                      Graduação
                    </span>
                    <h3 className="text-white font-bold text-xl md:text-2xl font-heading mb-4 leading-tight">
                      Ciências da Computação
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-auto text-slate-400 text-sm font-mono">
                      <span className="flex items-center gap-2 bg-[#112240] px-4 py-2 rounded-full border border-slate-700">
                        <FaUniversity className="text-cyan-400" /> UNIFOR
                      </span>
                      <span className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/20">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Em Curso
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Pós-graduação */}
                <div className="flex-1 bg-gradient-to-b from-[#1B263B] to-[#0D1B2A] p-8 rounded-2xl border border-[#F4C542]/30 shadow-lg relative overflow-hidden group hover:border-[#F4C542] transition-colors flex flex-col items-center justify-center text-center">
                  <FaUniversity className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-white/5 rotate-0 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-[#F4C542] p-4 rounded-full text-[#0D1B2A] shadow-lg mb-4">
                      <FaGraduationCap size={32} />
                    </div>
                    <span className="text-[#F4C542] font-mono text-xs uppercase tracking-[0.2em] mb-3 border-b border-[#F4C542]/20 pb-1">
                      Pós-graduação
                    </span>
                    <h3 className="text-white font-bold text-xl md:text-2xl font-heading mb-4 leading-tight">
                      Engenharia de Dados
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-auto text-slate-400 text-sm font-mono">
                      <span className="flex items-center gap-2 bg-[#112240] px-4 py-2 rounded-full border border-slate-700">
                        <FaUniversity className="text-cyan-400" /> UNIFOR
                      </span>
                      <span className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/20">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Em Curso
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </RevealOnScroll>

            {/* TECH STACK */}
            <RevealOnScroll delay={0.3}>
              <div className="w-full flex flex-col items-center mb-12">
                <h3 className="text-sm font-mono mb-8 text-slate-400 inline-flex items-center gap-2 uppercase tracking-widest px-6 py-2 rounded-full border border-slate-800 bg-[#0D1B2A]">
                  <FaCog className="text-[#F4C542] animate-spin-slow" /> Tech Stack & Tools
                </h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
                  {skills.map((skill) => {
                    const IconComponent = skillIcons[skill] || FaCog;
                    return (
                      <div key={skill} className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1B263B]/80 border border-slate-700 hover:border-[#F4C542]/50 hover:bg-[#1B263B] transition-all cursor-default hover:-translate-y-1 hover:shadow-lg">
                        <IconComponent className="text-slate-500 text-sm group-hover:text-[#F4C542] transition-colors shrink-0" />
                        <span className="text-slate-400 text-xs font-mono group-hover:text-white transition-colors">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>

            {/* BOTÕES DE AÇÃO - Links Atualizados para facilitar */}
            <RevealOnScroll delay={0.4}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                {/* Agora o link aponta para um nome fixo. Substitua o PDF na pasta public com este exato nome! */}
                <a
                  href="/Curriculo_Karine_Duarte.pdf"
                  download
                  className="w-full sm:w-auto min-w-[240px] flex items-center justify-center gap-3 bg-[#F4C542] text-[#0D1B2A] font-mono font-bold py-4 px-8 rounded-lg hover:bg-white transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(244,197,66,0.3)] text-center"
                >
                  <FaDownload />
                  {t.downloadCv}
                </a>

                {/* Agora o link aponta para um nome fixo. Substitua o PDF na pasta public com este exato nome! */}
                <a
                  href="/Carta_Apresentacao_Karine_Duarte.pdf"
                  download
                  className="w-full sm:w-auto min-w-[240px] flex items-center justify-center gap-3 bg-transparent text-slate-300 border border-slate-600 font-mono font-bold py-4 px-8 rounded-lg hover:border-[#F4C542] hover:text-[#F4C542] transition-all hover:scale-[1.02] text-center"
                >
                  <FaFileAlt />
                  {t.coverLetter}
                </a>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </ParticlesBackground>
    </section>
  );
}