// src/components/Blog.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';

const blogPosts = [
  {
    title: '🚀 Git além do clone: Comandos úteis que todo dev deveria saber',
    description: 'Domine o versionamento de código, aprenda a salvar sua pele com o git stash e reflog.',
    link: '/blog/git-alem-do-clone',
    date: '15 de Setembro, 2025',
    image: '/gitalendoclone.png' 
  },
  {
    title: 'Desvendando o Supabase: Alternativa Open Source ao Firebase',
    description: 'Explore as principais características do Supabase, como Postgres, autenticação e APIs automáticas.',
    link: '/blog/desvendando-o-supabase',
    date: '01 de Outubro, 2025',
    image: '/blog2.png' 
  },
  {
    title: '5 Dicas de Performance em Aplicações Next.js',
    description: 'Aprenda como otimizar sua aplicação Next.js para um carregamento mais rápido.',
    link: '/blog/5-dicas-nextjs',
    date: '15 de Outubro, 2025',
    image: '/react-next1.png' 
  },
];

export default function Blog() {
  return (
    <section id="blog">
      <ParticlesBackground id="particles-blog">
        <div className="container mx-auto px-6 py-24">
          
          <RevealOnScroll>
            <h2 className="text-4xl font-bold text-center mb-12 font-heading text-[#F4C542]">
              Blog
            </h2>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-transparent hover:border-[#F4C542] transition-all duration-300 h-full hover:-translate-y-2">
                  <Link href={post.link} className="flex flex-col h-full">
                    
                    <div className="relative w-full h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                      <h3 className="text-xl font-bold mb-3 font-heading text-[#0D1B2A]">
                        {post.title}
                      </h3>
                      <p className="text-gray-700 flex-grow">
                        {post.description}
                      </p>
                      <span className="text-[#F4C542] font-bold mt-4 inline-block hover:underline">
                        Ler mais →
                      </span>
                    </div>

                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </ParticlesBackground>
    </section>
  );
}