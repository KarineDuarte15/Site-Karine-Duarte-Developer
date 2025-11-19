// src/app/blog/desvendando-o-supabase/page.tsx
import Image from 'next/image';

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4 text-sm">
    <code>
      {children}
    </code>
  </pre>
);

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

// --- Conteúdo do Post ---

export default function SupabasePost() {
  return (
    <article className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* --- CABEÇALHO --- */}
        <h1 className="text-4xl font-bold text-[#0D1B2A] mb-4">
          🔍 Desvendando o Supabase: A Alternativa Open Source ao Firebase
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Conheça a ferramenta que traz o poder do Firebase com a transparência e flexibilidade de uma stack open source.
        </p>
        <p className="text-gray-500 mb-8">Publicado em 15 de Outubro, 2025</p>

        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src="/blog2.png" 
            alt="Desvendando o Supabase"
            fill
          />
        </div>

        {/* --- CONTEÚDO --- */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead">
            Nos últimos anos, o desenvolvimento web e mobile passou por uma transformação profunda impulsionada por ferramentas que simplificam o backend e aceleram o desenvolvimento. 
            Entre essas ferramentas, o <strong>Firebase</strong> ganhou destaque — mas também gerou limitações, especialmente em relação a <strong>código fechado</strong>, <strong>custos imprevisíveis</strong> e <strong>dependência total do ecossistema Google</strong>.
          </p>
          <p>
            É nesse cenário que surge o <strong>Supabase</strong>, uma alternativa <strong>open source</strong>, poderosa e cada vez mais adotada por desenvolvedores ao redor do mundo. Neste post, vamos mergulhar no que é o Supabase, como ele funciona, quando usar e por que ele pode ser a escolha ideal para o seu próximo projeto.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🧩 O que é o Supabase?
          </h2>
          <p>
            O <strong>Supabase</strong> é uma plataforma backend-as-a-service (BaaS) que oferece um conjunto de ferramentas para criar rapidamente aplicativos completos sem precisar configurar um backend inteiro do zero.
          </p>
          <p>
            Ele é construído sobre tecnologias consagradas — principalmente o <strong>PostgreSQL</strong> — trazendo uma camada de APIs, autenticação e armazenamento que se integra automaticamente ao seu banco.
          </p>
          <p className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
            ➡️ “É como se você tivesse o poder do Firebase, mas com a transparência e flexibilidade de uma stack open source.”
          </p>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            ⚙️ Principais Funcionalidades do Supabase
          </h2>

          <h3 className="text-xl font-bold text-[#0D1B2A] mt-6 mb-2">🔐 1. Autenticação Integrada</h3>
          <p>Suporta login com:</p>
          <ul className="list-disc list-outside pl-5 space-y-1">
            <li>E-mail/senha</li>
            <li>Magic links</li>
            <li>OAuth (Google, GitHub, Discord etc.)</li>
            <li>Phone/SMS</li>
          </ul>
          <p className="text-sm mt-2">Tudo conectado diretamente às tabelas do PostgreSQL.</p>

          <h3 className="text-xl font-bold text-[#0D1B2A] mt-6 mb-2">🗄️ 2. Banco de Dados PostgreSQL</h3>
          <p>A grande vantagem: Você tem acesso total ao banco — com triggers, views, extensões e SQL puro.</p>
          <p>Algumas extensões úteis já vêm prontas:</p>
          <ul className="list-disc list-outside pl-5 space-y-1">
            <li><code>pgvector</code> (IA)</li>
            <li><code>postgis</code> (geolocalização)</li>
            <li><code>pgcrypto</code> (criptografia)</li>
          </ul>

          <h3 className="text-xl font-bold text-[#0D1B2A] mt-6 mb-2">📡 3. APIs Geradas Automaticamente</h3>
          <p>O Supabase gera automaticamente:</p>
          <ul className="list-disc list-outside pl-5 space-y-1">
            <li>REST API</li>
            <li>GraphQL (via pg_graphql)</li>
          </ul>
          <p className="text-sm mt-2">Ou seja, qualquer tabela ou função no banco vira uma API de forma instantânea.</p>

          <h3 className="text-xl font-bold text-[#0D1B2A] mt-6 mb-2">📤 4. Storage para Arquivos</h3>
          <p>Equivalente ao Firebase Storage, mas com regras baseadas em <strong>Postgres Policies (RLS)</strong>.</p>
          <p>Perfeito para armazenar:</p>
          <ul className="list-disc list-outside pl-5 space-y-1">
            <li>Imagens</li>
            <li>Vídeos</li>
            <li>PDFs e Assets em geral</li>
          </ul>

          <h3 className="text-xl font-bold text-[#0D1B2A] mt-6 mb-2">🔄 5. Realtime</h3>
          <p>Com suporte a WebSockets, você pode construir recursos em tempo real como:</p>
          <ul className="list-disc list-outside pl-5 space-y-1">
            <li>Chats</li>
            <li>Dashboards dinâmicos</li>
            <li>Notificações e Sistemas colaborativos</li>
          </ul>
          <p className="text-sm mt-2">Tudo isso escutando alterações diretamente no banco.</p>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🆚 Supabase vs Firebase: Comparação Direta
          </h2>
          
          <Table>
            <Thead>
              <Tr>
                <Th>Recurso</Th>
                <Th>Supabase</Th>
                <Th>Firebase</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td><strong>Banco de Dados</strong></Td>
                <Td>PostgreSQL (SQL)</Td>
                <Td>Firestore (NoSQL)</Td>
              </Tr>
              <Tr>
                <Td><strong>Open Source</strong></Td>
                <Td>✔️ Sim</Td>
                <Td>❌ Não</Td>
              </Tr>
              <Tr>
                <Td><strong>APIs automáticas</strong></Td>
                <Td>✔️ REST + GraphQL</Td>
                <Td>✔️ Apenas REST</Td>
              </Tr>
              <Tr>
                <Td><strong>Em tempo real</strong></Td>
                <Td>✔️ Sim</Td>
                <Td>✔️ Sim</Td>
              </Tr>
              <Tr>
                <Td><strong>Custos</strong></Td>
                <Td>Previsíveis</Td>
                <Td>Pode escalar inesperadamente</Td>
              </Tr>
              <Tr>
                <Td><strong>Self-host</strong></Td>
                <Td>✔️ Sim (Docker)</Td>
                <Td>❌ Não</Td>
              </Tr>
            </Tbody>
          </Table>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🎯 Quando escolher o Supabase?
          </h2>
          <p>O Supabase é ideal se você:</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>Quer <strong>controle total</strong> do banco de dados.</li>
            <li>Busca uma solução <strong>open source</strong> sem lock-in (preso a um fornecedor).</li>
            <li>Precisa de SQL e recursos avançados de banco relacional.</li>
            <li>Está criando um app com autenticação robusta.</li>
            <li>Precisa armazenar arquivos com regras de segurança flexíveis.</li>
            <li>Quer hospedar tudo (inclusive o backend) por conta própria no futuro.</li>
          </ul>
          <p className="mt-4">
            Caso sua aplicação já dependa fortemente do Firestore ou de funções serverless altamente acopladas ao ecossistema Google, talvez o Firebase ainda faça mais sentido. Mas para a maioria dos novos projetos, o Supabase oferece uma liberdade incomparável.
          </p>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🛠️ Exemplo simples: conectando ao Supabase no Next.js
          </h2>
          <p>Veja como é simples iniciar o cliente:</p>
          <CodeBlock>
{`import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)`}
          </CodeBlock>

          <hr className="my-8" />

          <h3 className="text-2xl font-bold text-[#0D1B2A] text-center">
            Curtiu a dica?
          </h3>
          <p className="text-center">
            Se você quer saber mais sobre como integrar o Supabase em projetos reais, fique ligado nos próximos posts!
          </p>

        </div>
      </div>
    </article>
  );
}