Aqui está todo o conteúdo convertido em **Markdown limpo, organizado e totalmente formatado**:

````markdown
# Portfólio Karine Duarte - Desenvolvedora Full-Stack e Analista de Dados

<img src="public/Logo1.png" alt="Logo Karine Duarte Developer" width="150"/>

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar as minhas competências, experiência e projetos na área de desenvolvimento Full-Stack e análise de dados.

**Visite o site:**  
👉 https://site-karine-duarte-developer.vercel.app/

---

## ✨ Funcionalidades Principais

- **Secção Hero:** Apresentação dinâmica com animação de digitação.  
- **Sobre Mim:** Descrição detalhada das minhas competências e experiência, com opção de download do CV.  
- **Minha Jornada:** Timeline interativa apresentando a minha trajetória académica e profissional.  
- **Projetos:** Galeria de projetos com descrição, tecnologias utilizadas e links para GitHub e demonstrações.  
- **Momentos da Carreira:** Galeria de imagens com efeito de scroll infinito.  
- **Blog:** Secção para partilhar artigos e conhecimentos.  
- **Formulário de Contacto:** Envio de mensagens integrado com o Supabase.  
- **Modal de Contacto:** Pop-up para captação de leads (Supabase).  
- **Botão WhatsApp:** Acesso rápido para contacto direto.  
- **Design Responsivo:** Totalmente adaptado para mobile e desktop.  
- **Performance:** Monitorização via Vercel Speed Insights.

---

## 🚀 Tecnologias Utilizadas

Este projeto utiliza as versões mais recentes e seguras do ecossistema React:

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)  
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)  
- **Biblioteca UI:** React 19  
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)  
- **Animações:** [Framer Motion](https://www.framer.com/motion/)  
- **Backend (Database):** [Supabase](https://supabase.io/) (PostgreSQL)  
- **Ícones:** [React Icons](https://react-icons.github.io/react-icons/)  
- **Qualidade de Código:** [ESLint](https://eslint.org/)

---

## 💻 Como Rodar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/KarineDuarte15/Site-Karine-Duarte-Developer.git
cd Site-Karine-Duarte-Developer
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_publica
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse em:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Configuração do Banco de Dados (Supabase)

Para o funcionamento completo do formulário de contacto:

### 1. Criação da tabela

O projeto espera uma tabela **contacts_modal** com campos como:
`nome`, `email`, `mensagem`, `created_at`.

### 2. Permissões (Row Level Security)

Execute no **SQL Editor do Supabase**:

```sql
-- Habilita segurança a nível de linha
ALTER TABLE contacts_modal ENABLE ROW LEVEL SECURITY;

-- Cria política para permitir inserção pública (anónima e autenticada)
CREATE POLICY "Permitir Inserção Pública"
ON contacts_modal
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
```

---

## 🚀 Deployment

O site está otimizado para deploy na **Vercel**.

⚠️ **Importante:**
Na Vercel, adicione as variáveis de ambiente:

* `NEXT_PUBLIC_SUPABASE_URL`
* `NEXT_PUBLIC_SUPABASE_ANON_KEY`

em:
**Project → Settings → Environment Variables**

---

## ⚖️ Licença e Direitos Autorais

O código-fonte pode ser consultado e estudado.
No entanto, a **identidade visual** (logotipo, cores, layout, tipografia, imagens) é propriedade de **Karine Duarte** e **não pode ser copiada ou reutilizada** sem autorização.

**Copyright ©
2025 Karine Duarte. Todos os direitos reservados.**

---

## 📬 Contacto

* **GitHub:** [https://github.com/KarineDuarte15](https://github.com/KarineDuarte15)
* **LinkedIn:** Karine Duarte

```

Se quiser, posso transformar isso em um **README.md otimizado para GitHub**, com badges, screenshots e seções adicionais. Quer que eu melhore ainda mais?
```
