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
    <section id="about" className="py-24 text-center bg-background">
      <div className="container mx-auto px-6">
        

        <div className="grid md:grid-cols-5 gap-12 text-center items-center">

          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Sobre Mim</h2>
            <p className="text-muted mb-6 text-lg">
                Minha jornada na tecnologia começou com a curiosidade, mas se transformou em uma carreira focada em criar soluções. Com formação em Análise e Desenvolvimento de Sistemas, hoje eu conecto o poder do back-end com a inteligência da análise de dados para gerar impacto real.
            </p>
            <p className="text-muted mb-8 text-lg">
              Atuo como Desenvolvedora Full-Stack e Analista de Dados, utilizando um arsenal de tecnologias para construir sistemas eficientes, automatizar processos e transformar dados brutos em insights valiosos que impulsionam decisões.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Habilidades Técnicas</h3>
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
              className="inline-flex items-center gap-3 bg-gold text-navy font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform duration-300 hover:scale-105"
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
              width={700} // Ajustei um pouco o tamanho
              height={700}
              className="rounded-full  shadow-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}