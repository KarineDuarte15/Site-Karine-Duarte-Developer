// src/components/Blog.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: '🚀 Git além do clone: Comandos úteis que todo dev deveria saber',
    description: 'Domine o versionamento de código, aprenda a salvar sua pele com o git stash e reflog, e melhore seu fluxo de trabalho.',
    link: '/blog/git-alem-do-clone', // Link interno
    date: '15 de Setembro, 2025',
    image: '/gitalendoclone.png' 
  },
  {
    title: 'Desvendando o Supabase: Alternativa Open Source ao Firebase',
    description: 'Neste post, vamos explorar as principais características do Supabase, como seu banco de dados Postgres, autenticação e APIs automáticas.',
    link: '/blog/desvendando-o-supabase', // Link interno
    date: '01 de Outubro, 2025',
    image: '/blog2.png' 
  },
  {
    title: '5 Dicas de Performance em Aplicações Next.js',
    description: 'Aprenda como otimizar sua aplicação Next.js para um carregamento mais rápido e uma melhor experiência do usuário, abordando desde imagens até server components.',
    link: '/blog/5-dicas-nextjs', // Link interno
    date: '15 de Outubro, 2025',
    image: '/react-next1.png' 
  },
  

];

export default function Blog() {
  return (
    // Voltamos ao fundo azul da seção
    <section id="blog" className="py-24 bg-background">
    
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          // CORREÇÃO: Cor do título de volta para 'text-foreground'
          className="text-4xl font-bold text-center mb-12 font-heading text-foreground"
        >
          Blog
        </motion.h2>
        
        {/* Layout em Grid similar ao de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-transparent hover:border-yellow-500 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Link href={post.link} legacyBehavior={false} className="flex flex-col h-full">
                {/* Imagem do Card */}
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                  />
                </div>
                
                {/* Conteúdo do Card (com texto escuro para o fundo branco) */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 font-heading text-[#0D1B2A]">{post.title}</h3>
                  <p className="text-gray-700 flex-grow">{post.description}</p>
                  <span className="text-yellow-600 font-semibold mt-4 inline-block">
                    Ler mais →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}