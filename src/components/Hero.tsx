// src/components/Hero.tsx
'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
        
      {/* Coluna da Imagem */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 md:mb-0 md:mr-12"
      >
        <img
          src="/profile5.png" // Usando a imagem profile5.png
          alt="Karine Duarte"
          width={700} // Tamanho ajustado
          height={700} // Tamanho ajustado
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-navy">
          Olá, eu sou <span className="text-gold" style={{ color: 'var(--primary-accent)' }}>Karine Duarte</span>
        </h1>
        <div className="text-lg md:text-2xl font-semibold text-secondary-accent h-10 md:h-12">
          <TypeAnimation
            sequence={[
              'Desenvolvedora Full-Stack', // Título 1
              1500, // Pausa de 1.5s
              'Analista de Dados',     // Título 2
              1500,
              'Analista de BI',          // Título 3
              1500,
              'Apaixonada por Tecnologia', // Título 4
              1500,
              'Sempre Aprendendo',        // Título 5
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </motion.div>
    </section>
  );
}