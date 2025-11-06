// src/app/blog/desvendando-o-supabase/page.tsx
import Image from 'next/image';

export default function SupabasePost() {
  return (
    <article className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#0D1B2A] mb-4">
          Desvendando o Supabase: Alternativa Open Source ao Firebase
        </h1>
        <p className="text-gray-600 mb-8">Publicado em 15 de Outubro, 2025</p>
        
        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image
            src="/profile24.jpeg"
            alt="Desvendando o Supabase"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            Neste post, vamos explorar as principais características do Supabase, como seu banco de dados Postgres, autenticação e APIs automáticas.
          </p>
          <p className="mb-4">
            (Em breve.)
          </p>
          <p>
            O Supabase se apresenta como uma excelente alternativa...
          </p>
        </div>
      </div>
    </article>
  );
}