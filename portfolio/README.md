# 🌌 Portfólio — Beatriz Andrade

Website de portfólio profissional desenvolvido em **React + Vite**, com visual escuro inspirado no espaço (fundo estrelado animado), bilíngue (**português / inglês**), responsivo e hospedado gratuitamente na nuvem.

🔗 **Site publicado:** https://SEU-PROJETO.vercel.app  ← _troque pelo link depois do deploy_
📁 **Repositório:** https://github.com/beatrizaandradee/portfolio

---

## ✨ Funcionalidades

| Seção | O que tem |
|---|---|
| **Início** | Tela de carregamento com porcentagem, título com gradiente, texto com efeito de digitação, crachá interativo que balança e inclina com o mouse, atalhos para redes sociais |
| **Sobre Mim** | Apresentação em **PT e EN** (botão PT/EN no menu), foto, formação, contadores (projetos, experiências, tecnologias) e grade de tecnologias |
| **Projetos** | **Linha do tempo dinâmica** ordenada automaticamente do mais antigo para o mais recente. Cada projeto tem nome, descrição, tecnologias, link do GitHub e imagem/GIF. Botão "Detalhes" abre um modal |
| **Experiências** | Cards com empresa/instituição, cargo/atividade, período, descrição e tipo (estágio, freela, open source, evento...) |
| **Contato** | Ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub, Instagram) e **formulário com envio real por e-mail**, validação dos campos e proteção anti-spam |

Extras: menu fixo que destaca a seção atual, menu hambúrguer no celular, animações de entrada ao rolar a página, idioma salvo no navegador, respeito à opção "reduzir movimento" do sistema e navegação por teclado.

---

## 🛠️ Tecnologias utilizadas

- **React 19** — biblioteca de interface (componentes, hooks, Context API)
- **Vite 7** — ferramenta de build e servidor de desenvolvimento
- **JavaScript (ES2022) + JSX**
- **CSS3** puro — variáveis CSS, Grid, Flexbox, media queries, animações
- **Canvas API** — fundo de estrelas animado
- **FormSubmit** — serviço gratuito de envio do formulário por e-mail
- **Vercel** — hospedagem gratuita na nuvem
- **Git e GitHub** — versionamento

## 📦 Dependências

| Pacote | Tipo | Para que serve |
|---|---|---|
| `react` | dependência | Construção da interface |
| `react-dom` | dependência | Renderização do React no navegador |
| `react-icons` | dependência | Ícones (Feather, Font Awesome, Simple Icons) |
| `vite` | dev | Servidor de desenvolvimento e build de produção |
| `@vitejs/plugin-react` | dev | Suporte a JSX e Fast Refresh no Vite |

Fontes: **Inter** e **JetBrains Mono** (Google Fonts).

---

## 📂 Estrutura de diretórios

```
portfolio/
├── public/                  # Arquivos estáticos (servidos como estão)
│   ├── favicon.svg
│   ├── foto.jpg             # ← sua foto (adicione)
│   └── projects/            # Imagens / GIFs dos projetos
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Avatar.jsx       # Foto com fallback para iniciais
│   │   ├── Badge.jsx        # Crachá interativo do topo
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx       # Tela de carregamento (%)
│   │   ├── Navbar.jsx       # Menu + troca de idioma
│   │   ├── Reveal.jsx       # Animação ao rolar
│   │   ├── SocialLinks.jsx  # Ícones de contato
│   │   ├── Starfield.jsx    # Fundo de estrelas (canvas)
│   │   └── TechIcon.jsx     # Ícones das tecnologias
│   ├── data/                # ⭐ CONTEÚDO DO SITE (edite aqui)
│   │   ├── profile.js       # Dados pessoais, Sobre Mim, contatos
│   │   ├── projects.js      # Projetos da linha do tempo
│   │   └── experiences.js   # Experiências
│   ├── i18n/                # Internacionalização PT/EN
│   │   ├── LanguageContext.jsx
│   │   └── translations.js
│   ├── sections/            # Seções da página
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── styles/global.css    # Estilos e identidade visual
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

### Arquitetura

- **Separação entre conteúdo e interface:** todos os textos, projetos e experiências ficam em `src/data/`. Para atualizar o portfólio não é preciso mexer nos componentes.
- **Bilíngue com Context API:** `LanguageContext` guarda o idioma atual; cada texto tem `{ pt, en }` e a função `pick()` escolhe o certo.
- **Single Page:** as seções ficam em uma página só, com rolagem suave pelo menu, o que deixa o site rápido e simples de hospedar.
- **Sem back-end próprio:** o formulário envia os dados para o FormSubmit, que encaminha para o e-mail cadastrado.

---

## 🚀 Como rodar localmente

**Pré-requisitos:** [Node.js](https://nodejs.org) 20 ou superior e Git.

```bash
# 1. Clonar o repositório
git clone https://github.com/beatrizaandradee/portfolio.git
cd portfolio

# 2. Instalar as dependências
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
# abra http://localhost:5173

# 4. Gerar a versão de produção (pasta dist/)
npm run build

# 5. Testar a versão de produção
npm run preview
```

## ✏️ Como personalizar

1. **Dados pessoais e "Sobre Mim":** `src/data/profile.js`
2. **Projetos:** `src/data/projects.js` (data no formato `AAAA-MM`; a ordem da linha do tempo é automática)
3. **Experiências:** `src/data/experiences.js`
4. **Foto:** salve como `public/foto.jpg`
5. **Imagens/GIFs dos projetos:** coloque em `public/projects/` e aponte o campo `image`
6. **Cores:** variáveis no topo de `src/styles/global.css`

### Formulário de contato (envio por e-mail)

1. Em `src/data/profile.js`, troque `seuemail@exemplo.com` pelo seu e-mail em `contact.email` **e** em `formEndpoint`.
2. Publique o site e envie uma mensagem de teste.
3. O FormSubmit manda um e-mail de ativação: clique em **Activate Form**. A partir daí todas as mensagens chegam na sua caixa de entrada.

---

## ☁️ Deploy na Vercel (gratuito)

1. Suba o projeto para o GitHub.
2. Entre em [vercel.com](https://vercel.com) com sua conta do GitHub.
3. **Add New → Project** → escolha o repositório `portfolio`.
4. A Vercel detecta o Vite sozinha (Build: `npm run build`, Output: `dist`). Clique em **Deploy**.
5. Copie o link gerado e coloque no topo deste README.

A cada `git push`, a Vercel publica a nova versão automaticamente.

---

## 👩‍💻 Autora

**Beatriz Andrade** — [GitHub](https://github.com/beatrizaandradee)
