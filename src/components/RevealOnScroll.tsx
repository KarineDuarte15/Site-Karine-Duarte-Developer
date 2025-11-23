// src/components/RevealOnScroll.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number; // Tempo opcional de espera
}

export default function RevealOnScroll({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }} // Começa invisível e um pouco abaixo
      whileInView={{ opacity: 1, y: 0 }} // Quando visível, sobe e aparece
      viewport={{ once: true, margin: "-100px" }} // Acontece apenas uma vez
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}