// src/components/Hero.tsx
'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import InteractiveBackground from './InteractiveBackground';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    
    <section id="home" className="relative w-full pt-32 pb-16 overflow-hidden bg-[#0D1B2A]">

      <div className="absolute inset-4 md:inset-8 z-0 bg-blue-950/20 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
        {/* FIXADO: Gradiente usando cores fixas hexadecimal para não clarear */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1B2A]/50 to-[#0D1B2A]/90 z-10 pointer-events-none"></div>
        <InteractiveBackground />
      </div>

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
            {/* FIXADO: text-[#E5E5E5] para manter o texto claro */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-heading text-[#E5E5E5]">
              {t.heroGreeting} <span className="text-[#F4C542]">Karine Duarte</span>
            </h1>
            <div className="text-lg md:text-2xl font-semibold text-gray-300 h-10 md:h-12">
              <TypeAnimation
                key={t.heroRole1} // O key força a animação a reiniciar se mudar o idioma
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
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
