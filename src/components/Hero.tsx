// src/components/Hero.tsx
'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import InteractiveBackground from './InteractiveBackground';

export default function Hero() {
  return (
    // 👇 MUDANÇA 1: Removemos 'flex' e 'items-center' e adicionamos 'bg-background' 👇
    <section id="home" className="relative w-full pt-32 pb-16 overflow-hidden bg-background">

      {/* Camada de Fundo com a Animação de Partículas */}
      {/* 👇 Mantido 'inset-8' para criar a moldura solicitada */}
      <div className="absolute inset-4 md:inset-8 z-0 bg-blue-950/20 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
        {/* Substituição do Video pelo Componente Interativo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/90 z-10 pointer-events-none"></div>
        <InteractiveBackground />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/profile9.png"
              alt="Karine Duarte"
              width={450}
              height={450}
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-heading text-foreground">
              Olá, eu sou <span className="text-[var(--primary-accent)]">Karine Duarte</span>
            </h1>
            <div className="text-lg md:text-2xl font-semibold text-muted h-10 md:h-12">
              <TypeAnimation
                sequence={[
                  'Desenvolvedora Full-Stack', 1500,
                  'Analista de Dados', 1500,
                  'Analista de BI', 1500,
                  'Apaixonada por Tecnologia', 1500,
                  'Sempre Aprendendo', 1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}