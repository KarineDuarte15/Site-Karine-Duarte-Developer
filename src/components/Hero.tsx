// src/components/Hero.tsx
'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    // 👇 MUDANÇA 1: Removemos 'flex' e 'items-center' e adicionamos 'bg-background' 👇
    <section id="home" className="relative w-full pt-32 pb-16 overflow-hidden bg-background">
      
      {/* Camada de Fundo com o Vídeo */}
      {/* 👇 MUDANÇA 2: Trocamos 'inset-0' por 'inset-8' para criar uma moldura 👇 */}
      <div className="absolute inset-8 z-0 opacity-20 bg-blue-950 rounded-lg overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg" // Adicionado rounded-lg para suavizar as bordas
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
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