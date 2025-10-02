// src/components/About.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const skills = [
    "Python", "FastAPI", "Django", "JavaScript", "React", "Java",
    "SQL", "PostgreSQL", "MySQL", "Docker", "Supabase", "Pandas",
    "Power BI", "Tableau", "Git", "GitHub", "Agile Methodologies", "Scrum",
    "Data Analysis", "Data Visualization", "ETL", "Machine Learning", "NLP"
];

export default function About() {
  return (
    // Seção 1 - Você pode mudar a cor aqui (ex: bg-background)
    <section id="about" className="py-0 text-center bg-white">
      <div className="container mx-auto px-6 gap-3 bg-[#E5E5E5] rounded-lg p-12 shadow-2xl">
        <div className="font-extralight grid md:grid-cols-5 gap-25 text-left bg-[#E5E5E5] items-center">
          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h2 className="text-4xl text-blue-950 font-bold mb-4 text-left">Sobre Mim</h2>
            <p className="text-muted text-blue-950 mb-6 text-lg">
                Minha jornada na tecnologia começou com a curiosidade, mas se transformou em uma carreira focada em criar soluções. Com formação em Análise e Desenvolvimento de Sistemas, hoje eu conecto o poder do back-end com a inteligência da análise de dados para gerar impacto real.
            </p>
            <p className="text-muted text-blue-950 mb-8 text-lg">
              Atuo como Desenvolvedora Full-Stack e Analista de Dados, utilizando um arsenal de tecnologias para construir sistemas eficientes, automatizar processos e transformar dados brutos em insights valiosos que impulsionam decisões.
            </p>
            <h3 className="text-2xl bg-[#E5E5E5] text-blue-950 font-semibold mb-4 text-left">Habilidades Técnicas</h3>
            <div className=" flex flex-wrap gap-3 mb-8">
              {skills.map((skill) => (
                <span key={skill} className="  bg-yellow-500 text-blue-950 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                  {skill}
                </span>
              ))}
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
              src="/profile7.jpeg" // Mantive a imagem que você estava usando
              alt="Erika Karine Duarte"
              width={800} // Ajustei um pouco o tamanho
              height={800}
              className="rounded-full  shadow-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}