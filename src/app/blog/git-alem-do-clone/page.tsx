// src/app/blog/git-alem-do-clone/page.tsx
import Image from 'next/image';

// --- Componentes Utilitários ---

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4 text-sm border-l-4 border-[#F4C542]">
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
  <td className="px-4 py-3 text-sm text-gray-700 align-top">{children}</td>
);

// --- Conteúdo do Post ---

export default function GitPost() {
  return (
    <article className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* --- CABEÇALHO --- */}
        <h1 className="text-4xl font-bold text-[#0D1B2A] mb-4">
          🚀 Git além do clone: Comandos úteis que todo dev deveria saber
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Domine o versionamento de código, salve sua pele em momentos de crise e melhore seu fluxo de trabalho em equipe.
        </p>
        <p className="text-gray-500 mb-8">Publicado em 15 de Setembro, 2025</p>

        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src="/profile15.jpeg" 
            alt="Palestra sobre Git"
            fill
            className="object-cover"
          />
        </div>

        {/* --- CONTEÚDO --- */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead">
            Se o seu uso de Git se resume a <code>clone</code>, <code>add</code>, <code>commit</code> e <code>push</code>, este artigo é para você. 
            O Git é muito mais do que apenas salvar versões do seu código; ele é sobre <strong>segurança, colaboração e eficiência</strong> no dia a dia.
          </p>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🤔 Por que o Git é essencial?
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li><strong>Controle Total (Versionamento):</strong> Tenha um histórico completo, reverta erros e teste novas ideias com segurança usando branches.</li>
            <li><strong>Trabalho em Equipe (Colaboração):</strong> Permite que vários devs trabalhem no mesmo projeto sem caos, facilitando code reviews e integrações.</li>
            <li><strong>Padrão de Mercado:</strong> Seu perfil no GitHub funciona como seu currículo técnico e portfólio.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🛠️ Comandos essenciais do dia a dia
          </h2>
          
          <h3 className="text-xl font-bold text-[#0D1B2A] mt-6 mb-2">1. O seu GPS: git status</h3>
          <p>
            Use rápido e sempre! Ele deve ser chamado antes de qualquer commit ou push para você saber exatamente onde está pisando.
          </p>
          <CodeBlock>git status</CodeBlock>

          <h3 className="text-xl font-bold text-[#0D1B2A] mt-6 mb-2">2. Visualizando a história: git log</h3>
          <p>
            Para ver o histórico de commits, branches e merges de forma gráfica e compacta:
          </p>
          <CodeBlock>git log --oneline --graph --decorate</CodeBlock>

          <h3 className="text-xl font-bold text-[#0D1B2A] mt-6 mb-2">3. Inspecionando mudanças: git diff</h3>
          <p>
            Veja exatamente o que mudou no conteúdo de um arquivo antes de commitar.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🆘 Salvando sua pele no Git
          </h2>
          <p>Quem nunca fez uma alteração errada ou precisou mudar de tarefa urgentemente?</p>

          <Table>
            <Thead>
              <Tr>
                <Th>Comando</Th>
                <Th>Para que serve?</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td><code>git stash</code></Td>
                <Td>Guarda alterações não commitadas &quot;numa gaveta&quot; para você limpar seu ambiente sem perder código (útil para bugs urgentes).</Td>
              </Tr>
              <Tr>
                <Td><code>git restore</code></Td>
                <Td>Descarta mudanças locais. Se alterou o arquivo errado e não commitou, use isso para voltar ao estado original.</Td>
              </Tr>
              <Tr>
                <Td><code>git reset</code></Td>
                <Td>
                    Volta no histórico. <br/>
                    <strong>--soft:</strong> Mantém as mudanças nos arquivos.<br/>
                    <strong>--hard:</strong> Apaga as alterações de vez (Cuidado!).
                </Td>
              </Tr>
              <Tr>
                <Td><code>git reflog</code></Td>
                <Td><strong>O Salvador.</strong> Mostra tudo o que aconteceu no repo local, até o que não aparece no log comum. Ótimo para recuperar commits perdidos.</Td>
              </Tr>
            </Tbody>
          </Table>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            ✅ Boas Práticas
          </h2>
          
          <h3 className="text-xl font-bold text-[#0D1B2A] mt-4 mb-2">Mensagens de Commit Claras</h3>
          <p>Evite &quot;update&quot; ou &quot;fix&quot;. Use o padrão <strong>Conventional Commits</strong>:</p>
          <ul className="list-disc list-outside pl-5 space-y-1 bg-gray-50 p-4 rounded-lg">
            <li><code>feat:</code> para novas funcionalidades</li>
            <li><code>fix:</code> para correção de bugs</li>
            <li><code>docs:</code> para atualizações de documentação</li>
          </ul>

          <h3 className="text-xl font-bold text-[#0D1B2A] mt-6 mb-2">Segurança e Limpeza</h3>
          <p>
            Use o <strong>.gitignore</strong> para evitar subir arquivos desnecessários (como <code>node_modules</code> ou <code>.env</code>). 
            <br/>
            ⚠️ <strong>Nunca</strong> commite senhas ou chaves de API!
          </p>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mt-8 mb-4">
            🍒 Dica Bônus: git cherry-pick
          </h2>
          <p>
            Precisa copiar um commit específico de uma branch para outra (ex: aplicar um bugfix da branch A na branch B)? Use o cherry-pick.
          </p>
          <CodeBlock>git cherry-pick ID_DO_COMMIT</CodeBlock>

          <hr className="my-8" />

          <h3 className="text-2xl font-bold text-[#0D1B2A] text-center">
            Conclusão
          </h3>
          <p className="text-center">
            O Git é uma ferramenta poderosa. Dominar esses comandos vai te dar mais confiança para explorar, testar e colaborar em grandes projetos. 
            <br/><br/>
            <strong>Até a próxima! 👋</strong>
          </p>

        </div>
      </div>
    </article>
  );
}