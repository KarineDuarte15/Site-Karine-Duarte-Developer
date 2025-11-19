// src/app/blog/5-dicas-nextjs/page.tsx
import Image from 'next/image';

// Componente simples para renderizar o código (opcional, mas melhora a leitura)
const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4 text-sm">
    <code>
      {children}
    </code>
  </pre>
);

// Componente simples para tabela (opcional, mas melhora a leitura)
const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
      {children}
    </table>
  </div>
);

const Thead = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-100">{children}</thead>
);

const Tbody = ({ children }: { children: React.ReactNode }) => (
  <tbody className="divide-y divide-gray-200">{children}</tbody>
);

const Tr = ({ children }: { children: React.ReactNode }) => (
  <tr>{children}</tr>
);

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{children}</th>
);

const Td = ({ children }: { children: React.ReactNode }) => (
  <td className="px-4 py-3 text-sm text-gray-700">{children}</td>
);


export default function NextJSPost() {
  return (
    <article className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* --- CABEÇALHO DO ARTIGO --- */}
        <h1 className="text-4xl font-bold text-[#0D1B2A] mb-4">
          ⚡ 5 Dicas de Performance em Aplicações Next.js
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Aprenda como otimizar sua aplicação para um carregamento mais rápido e uma melhor experiência do usuário
        </p>
        <p className="text-gray-500 mb-8">Publicado em 01 de Outubro, 2025</p>

        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src="/profile18.jpeg"
            alt="5 Dicas de Performance em Aplicações Next.js"
            fill
            className="object-cover"
          />
        </div>

        {/* --- CONTEÚDO DO ARTIGO --- */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead">
            O Next.js é uma das ferramentas mais poderosas do ecossistema React quando o assunto é performance. 
            Porém, mesmo com toda a estrutura de otimização nativa, ainda existem várias boas práticas que 
            podem levar seu projeto a outro nível.
          </p>
          <p>
            A seguir, compartilho 5 dicas práticas e eficazes para turbinar o desempenho da sua aplicação 
            Next.js — da otimização de imagens até o uso inteligente de Server Components.
          </p>
          
          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🚀 1. Use o next/image para otimizar imagens automaticamente
          </h2>
          <p>
            Imagens são, muitas vezes, as maiores responsáveis por lentidão no carregamento. O componente 
            <code>next/image</code> resolve isso de forma nativa, entregando imagens otimizadas em diferentes 
            tamanhos e formatos.
          </p>
          <p>Exemplo:</p>
          <CodeBlock>
{`import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <Image
        src="/hero-banner.jpg"
        alt="Banner principal"
        width={1200}
        height={600}
        priority
      />
    </div>
  );
}`}
          </CodeBlock>
          <p className="font-semibold">Por que usar:</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>Gera <code>lazy loading</code> automático.</li>
            <li>Serve imagens no formato WebP quando possível.</li>
            <li>Reduz drasticamente o tamanho do arquivo entregue.</li>
          </ul>
          <p className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
            <strong>🔧 Dica extra:</strong> Sempre defina <code>width</code>, <code>height</code> e o atributo <code>priority</code> para 
            banners ou imagens acima da dobra (above the fold).
          </p>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            ⚙️ 2. Prefira Server Components para reduzir JavaScript no cliente
          </h2>
          <p>
            Com o Next.js 13+, é possível usar React Server Components (RSC) — componentes que rodam no 
            servidor e não enviam código JS desnecessário ao cliente. Isso reduz o <code>bundle size</code> e 
            melhora o Time to Interactive (TTI).
          </p>
          <p>Exemplo:</p>
          <CodeBlock>
{`// Componente Server (padrão)
export default async function UserList() {
  const users = await fetch("https://api.example.com/users").then(res => res.json());
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`}
          </CodeBlock>
          <p className="font-semibold">✅ Como regra geral:</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>Use Server Components sempre que possível.</li>
            {/* AQUI ESTÁ A CORREÇÃO: 
              Troquei 'use client' por &apos;use client&apos; 
            */}
            <li>Utilize Client Components (<code>&apos;use client&apos;</code>) apenas quando houver interação direta (eventos, state, hooks, etc).</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🧠 3. Faça code splitting com dynamic()
          </h2>
          <p>
            Em aplicações grandes, é comum carregar mais código do que o usuário precisa naquele momento. 
            O code splitting ajuda a dividir o código em partes menores, carregando sob demanda.
          </p>
          <p>Exemplo:</p>
          <CodeBlock>
{`import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../components/Chart"), { ssr: false });

export default function Dashboard() {
  return (
    <div>
      <h1>Painel</h1>
      <Chart />
    </div>
  );
}`}
          </CodeBlock>
          <p className="font-semibold">Vantagens:</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>Reduz o tamanho do bundle inicial.</li>
            <li>Evita carregar componentes pesados antes da hora.</li>
            <li>Melhora o First Contentful Paint (FCP).</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🌐 4. Aproveite o Static Site Generation (SSG) e o Incremental Static Regeneration (ISR)
          </h2>
          <p>
            Gerar páginas estaticamente é uma das formas mais eficazes de otimizar performance e SEO. 
            O Next.js oferece várias estratégias de renderização:
          </p>
          <Table>
            <Thead>
              <Tr>
                <Th>Tipo</Th>
                <Th>Quando usar</Th>
                <Th>Benefício</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td><strong>SSG</strong> (getStaticProps)</Td>
                <Td>Conteúdo estático</Td>
                <Td>Carregamento instantâneo</Td>
              </Tr>
              <Tr>
                <Td><strong>ISR</strong> (revalidate)</Td>
                <Td>Conteúdo que muda com pouca frequência</Td>
                <Td>Combina performance e atualização</Td>
              </Tr>
              <Tr>
                <Td><strong>SSR</strong> (getServerSideProps)</Td>
                <Td>Conteúdo dinâmico e personalizado</Td>
                <Td>Atualização em tempo real</Td>
              </Tr>
            </Tbody>
          </Table>
          <p>Exemplo com ISR:</p>
          <CodeBlock>
{`export async function getStaticProps() {
  const posts = await fetch("https://api.example.com/posts").then(r => r.json());
  return {
    props: { posts },
    revalidate: 60, // Regera a cada 60 segundos
  };
}`}
          </CodeBlock>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            ⚡ 5. Habilite compressão e cache de recursos
          </h2>
          <p>
            Por fim, garanta que sua aplicação sirva os arquivos otimizados com compressão (gzip/brotli) 
            e políticas de cache bem configuradas.
          </p>
          <p>Como fazer:</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>Configure headers via <code>next.config.js</code>:</li>
          </ul>
          <CodeBlock>
{`module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Content-Encoding", value: "br" },
        ],
      },
    ];
  },
};`}
          </CodeBlock>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>Use CDN (como Vercel Edge ou Cloudflare) para servir conteúdo próximo do usuário.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            💡 Conclusão
          </h2>
          <p>
            A performance de uma aplicação Next.js não depende apenas do framework, mas de como você o utiliza. 
            Pequenas otimizações — como imagens otimizadas, Server Components, cache inteligente e code splitting 
            — podem transformar completamente a experiência do usuário e a percepção de qualidade do seu produto.
          </p>
          <p className="text-xl font-semibold text-center text-[#0D1B2A] my-8">
            🔍 Lembre-se: performance não é um detalhe — é parte da experiência.
          </p>

          <hr className="my-8" />

          <h3 className="text-2xl font-bold text-[#0D1B2A] text-center">
            📈 Quer mais conteúdo técnico como esse?
          </h3>
          <p className="text-center">
            Siga-me para acompanhar dicas sobre Next.js, arquitetura de software e boas práticas em projetos Full Stack.
          </p>
        </div>
      </div>
    </article>
  );
}