# Portfólio Karine Duarte - Desenvolvedora Full-Stack e Analista de Dados

<img src="public/Logo1.png" alt="Logo Karine Duarte Developer" width="150"/>

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar as minhas competências, experiência e projetos na área de desenvolvimento Full-Stack e análise de dados.

**Visita o site:** [https://site-karine-duarte-developer.vercel.app/](https://site-karine-duarte-developer.vercel.app/)

---

## ✨ Funcionalidades Principais

* **Secção Hero:** Apresentação dinâmica com animação de digitação.
* **Sobre Mim:** Descrição detalhada das minhas competências e experiência, com opção de download do CV.
* **Minha Jornada:** Timeline interativa apresentando a minha trajetória académica e profissional.
* **Projetos:** Galeria de projetos com descrição, tecnologias utilizadas e links para GitHub e demonstrações.
* **Momentos da Carreira:** Galeria de imagens com efeito de scroll infinito.
* **Blog:** Secção para partilhar artigos e conhecimentos.
* **Formulário de Contacto:** Envio de mensagens integrado com o Supabase.
* **Modal de Contacto:** Pop-up para captação de leads (Supabase).
* **Botão WhatsApp:** Acesso rápido para contacto direto.
* **Design Responsivo:** Totalmente adaptado para mobile e desktop.
* **Performance:** Monitorização via Vercel Speed Insights.

---

## 🚀 Tecnologias Utilizadas

Este projeto utiliza as versões mais recentes e seguras do ecossistema React:

* **Framework:** [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Biblioteca UI:** [React 19](https://reactjs.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Animações:** [Framer Motion](https://www.framer.com/motion/)
* **Backend (Database):** [Supabase](https://supabase.io/) (PostgreSQL)
* **Ícones:** [React Icons](https://react-icons.github.io/react-icons/)
* **Qualidade de Código:** [ESLint](https://eslint.org/)

---

## 💻 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/KarineDuarte15/Site-Karine-Duarte-Developer.git](https://github.com/KarineDuarte15/Site-Karine-Duarte-Developer.git)
   cd Site-Karine-Duarte-Developer
Instale as dependências:

Bash

npm install
Configure as Variáveis de Ambiente: Crie um arquivo .env.local na raiz do projeto e adicione as suas credenciais do Supabase:

Snippet de código

NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_publica
Inicie o servidor de desenvolvimento:

Bash

npm run dev
Aceda a http://localhost:3000 no seu navegador.

🗄️ Configuração do Banco de Dados (Supabase)
Para que o formulário de contacto funcione corretamente, é necessário configurar a tabela e as Políticas de Segurança (RLS) no Supabase.

1. Criação da Tabela
O projeto espera uma tabela chamada contacts_modal com as colunas adequadas (nome, email, mensagem, etc.).

2. Permissões (Row Level Security)
Para permitir que visitantes (usuários anónimos) enviem mensagens, execute o seguinte comando no SQL Editor do Supabase:

SQL

-- Habilita segurança a nível de linha
ALTER TABLE contacts_modal ENABLE ROW LEVEL SECURITY;

-- Cria política para permitir inserção pública (anónima e autenticada)
CREATE POLICY "Permitir Inserção Pública"
ON contacts_modal
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
🚀 Deployment
O site está otimizado para a Vercel.

Nota Importante: Ao fazer o deploy na Vercel, lembre-se de adicionar as variáveis de ambiente (NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY) nas configurações do projeto (Settings > Environment Variables).

⚖️ Licença e Direitos Autorais
O código-fonte deste projeto está disponível para consulta e aprendizado. No entanto, a identidade visual do site, incluindo, mas não se limitando ao logótipo, esquema de cores, layout, tipografia e imagens de perfil/eventos, são propriedade intelectual de Karine Duarte e não podem ser copiados ou reproduzidos sem permissão explícita.

Copyright © 2025 Karine Duarte. Todos os direitos reservados.

📬 Contacto
GitHub: KarineDuarte15

LinkedIn: Karine Duarte
