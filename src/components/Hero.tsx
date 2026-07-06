// src/components/Hero.tsx
'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <ParticlesBackground id="particles-hero" className="pt-32 pb-16 overflow-hidden" interactive={false}>
      <section id="home" className="relative w-full">
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* ÁREA DA FOTO COM AURA TECH */}
            <div className="flex justify-center relative">

              {/* 1. Entrada da animação (Slide da esquerda) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20"
              >
                {/* 2. Animação de "Respiração" da Aura (Loop Infinito) */}
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px rgba(6, 182, 212, 0))",       // Começa invisível
                      "drop-shadow(0 0 15px rgba(6, 182, 212, 0.6))",    // Brilho Cyan (Ciano)
                      "drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))",   // Brilho Azul Royal Forte
                      "drop-shadow(0 0 15px rgba(6, 182, 212, 0.6))"     // Volta ao Cyan
                    ]
                  }}
                  transition={{
                    duration: 4,      // Duração de um ciclo completo (4 segundos)
                    repeat: Infinity, // Repete para sempre
                    ease: "easeInOut" // Movimento suave
                  }}
                >
                  <Image
                    src="/profile9.png" // A tua foto PNG sem fundo
                    alt="Karine Duarte"
                    width={450}
                    height={450}
                    className="object-contain hover:scale-105 transition-transform duration-500" // Adicionei um zoom suave ao passar o rato
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* ÁREA DE TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-heading text-foreground">
                {t.heroGreeting} <span className="text-[#F4C542]">Karine Duarte</span>
              </h1>

              <div className="text-lg md:text-2xl font-semibold text-[color:var(--text-muted)] h-10 md:h-12">
                <TypeAnimation
                  key={t.heroRole1}
                  sequence={[
                    t.heroRole1, 1500,
                    t.heroRole2, 1500,
                    t.heroRole3, 1500,
                    t.heroRole4, 1500,
                    t.heroRole5, 1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-[#F4C542]-400 font-mono" // Adicionei cor e fonte mono para parecer código
                />
              </div>

              {/* Sugestão: Botões de Ação Rápida poderiam entrar aqui */}
            </motion.div>

          </div>
        </div>
      </section>
    </ParticlesBackground>
  );
}