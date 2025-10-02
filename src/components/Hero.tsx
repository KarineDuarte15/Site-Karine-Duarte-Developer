// src/components/Hero.tsx
'use client'; // Necessário para usar hooks do React e bibliotecas de animação

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    // O id="home" é útil se quisermos um link "Início" no futuro
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Olá, eu sou <span className="text-yellow-400">Karine Duarte</span>
        </h1>
        <div className="text-lg md:text-2xl font-semibold text-gray-300">
          <TypeAnimation
            sequence={[
              'Desenvolvedora Back-End', // Título 1
              1500, // Pausa de 1.5s
              'Analista de Dados',     // Título 2
              1500,
              'Analista de BI',          // Título 3
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity} // Repete a animação infinitamente
          />
        </div>
      </motion.div>
    </section>
  );
}