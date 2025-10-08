// src/components/Blog.tsx
'use client';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Desvendando o Supabase: Alternativa Open Source ao Firebase',
    description: 'Neste post, vamos explorar as principais características do Supabase, como seu banco de dados Postgres, autenticação e APIs automáticas.',
    link: '#',
    date: '15 de Outubro, 2025'
  },
  {
    title: '5 Dicas de Performance em Aplicações Next.js',
    description: 'Aprenda como otimizar sua aplicação Next.js para um carregamento mais rápido e uma melhor experiência do usuário, abordando desde imagens até server components.',
    link: '#',
    date: '01 de Outubro, 2025'
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 font-heading text-foreground"
        >
          Blog
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              className="block bg-card p-6 rounded-lg mb-6 shadow-lg border border-transparent hover:border-accent transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted mb-2">{post.date}</p>
              <h3 className="text-2xl font-bold mb-3 font-heading text-foreground">{post.title}</h3>
              <p className="text-muted/80">{post.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}