# 🌌 Portfólio Profissional — Beatriz Almeida Andrade

Portfólio profissional de **Beatriz Almeida Andrade**, estudante de **Engenharia de Software na PUC Minas** e premiada no **Prêmio Stellantis de Educação**. Desenvolvido em **React + Vite**, com visual escuro inspirado no espaço (fundo estrelado animado), bilíngue (**português / inglês**), responsivo e hospedado gratuitamente na **Vercel**.

| | |
|---|---|
| 🔗 **Site publicado** | https://portfolio-profissional-six-phi.vercel.app |
| 📁 **Repositório** | https://github.com/beatrizaandradee/Portf-lio-Profissional |
| 🎨 **Wireframes (Figma)** | https://www.figma.com/design/X7S6ppMXEHrzhjD9YpMLmP |

---

## ✨ Funcionalidades

| Seção | O que tem |
|---|---|
| **Início** | Tela de carregamento com porcentagem, título com gradiente, texto com efeito de digitação, crachá interativo que balança e inclina com o mouse e atalhos para as redes sociais |
| **Sobre Mim** | Apresentação em **português e inglês** (botão PT/EN no menu), foto, formação, contadores (projetos, certificados e prêmio) e grade de tecnologias |
| **Projetos** | **Linha do tempo dinâmica**, ordenada automaticamente do mais antigo para o mais recente. Cada projeto tem nome, descrição, tecnologias, link do GitHub e **GIF do projeto funcionando**. O botão "Detalhes" abre um modal e o botão **"Testar aqui"** abre o app funcionando dentro do site |
| **Mini Projetos** | 5 apps em JavaScript puro (calculadora, lista de tarefas, gerador de senhas, jogo da velha e pomodoro) que podem ser testados no próprio site |
| **Experiências** | Cartões com instituição, atividade, período, descrição e tipo (prêmio, acadêmico, curso, evento) |
| **Conquistas** | Destaque do Prêmio Stellantis de Educação com foto da cerimônia e galeria de certificados (Santander, Enap, Empowerdata, PUC Minas) que abrem o PDF original |
| **Contato** | Ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub, Instagram) e **formulário com envio real por e-mail**, validação dos campos e proteção anti-spam |

**Extras:** menu fixo que destaca a seção atual, menu hambúrguer no celular, animações ao rolar a página, idioma salvo no navegador, respeito à opção "reduzir movimento" do sistema e navegação por teclado.

---

## 📌 Projetos da linha do tempo

| Projeto | Tecnologias | Testar |
|---|---|---|
| **Mini Projetos**: calculadora, lista de tarefas, gerador de senhas, jogo da velha (Minimax) e pomodoro | HTML, CSS, JavaScript | [abrir](https://portfolio-profissional-six-phi.vercel.app/mini-projetos/) |
| **Análise de Gastos**: lê o extrato bancário em CSV e gera um relatório com gráficos e recomendações | Python, pandas, matplotlib | [ver relatório](https://portfolio-profissional-six-phi.vercel.app/apps/analise-gastos/) |
| **Simulador de Investimentos**: Poupança x Tesouro Selic x CDB x LCI/LCA com IR regressivo e inflação | JavaScript, Canvas | [abrir](https://portfolio-profissional-six-phi.vercel.app/apps/simulador-investimentos/) |
| **Finanças+**: controle financeiro com dashboard, orçamentos e metas | React, Vite, SVG | [abrir](https://portfolio-profissional-six-phi.vercel.app/apps/financas-app/) |
| **Vitrine**: e-commerce completo com carrinho, cupons, frete e checkout validado | React, Context API | [abrir](https://portfolio-profissional-six-phi.vercel.app/apps/vitrine-ecommerce/) |
| **Rota**: app de mobilidade (estilo Uber) com mapa, preços e corrida ao vivo | React, SVG | [abrir](https://portfolio-profissional-six-phi.vercel.app/apps/rota-app/) |
| **Ritmo**: app de corrida com GPS, pace, parciais e metas | React, Geolocation API | [abrir](https://portfolio-profissional-six-phi.vercel.app/apps/ritmo-corrida/) |
| **Lumi**: plataforma de streaming com perfis, recomendações e player | React, Canvas, SVG | [abrir](https://portfolio-profissional-six-phi.vercel.app/apps/lumi-streaming/) |

Os apps ficam em `portfolio/public/apps/<projeto>/` (versões já compiladas) e os mini projetos em `portfolio/public/mini-projetos/`.

---

## 🛠️ Tecnologias utilizadas

- **React 19**: biblioteca de interface (componentes, hooks e Context API)
- **Vite 7**: servidor de desenvolvimento e build de produção
- **JavaScript (ES2022) + JSX**
- **CSS3** puro: variáveis CSS, Grid, Flexbox, media queries e animações
- **Canvas API**: fundo de estrelas animado
- **FormSubmit**: serviço gratuito de envio do formulário por e-mail
- **Vercel**: hospedagem gratuita na nuvem, com deploy automático
- **Git e GitHub**: versionamento
- **Figma**: wireframes de média fidelidade

## 📦 Dependências e bibliotecas

| Pacote | Tipo | Para que serve |
|---|---|---|
| `react` | dependência | Construção da interface |
| `react-dom` | dependência | Renderização do React no navegador |
| `react-icons` | dependência | Ícones (Feather, Font Awesome e Simple Icons) |
| `vite` | desenvolvimento | Servidor de desenvolvimento e build de produção |
| `@vitejs/plugin-react` | desenvolvimento | Suporte a JSX e Fast Refresh no Vite |

Fontes: **Inter** e **JetBrains Mono** (Google Fonts).

---

## 📂 Estrutura de diretórios

```
Portf-lio-Profissional/
├── README.md                    # Este arquivo
└── portfolio/                   # Projeto React + Vite
    ├── public/                  # Arquivos estáticos (servidos como estão)
    │   ├── favicon.svg
    │   ├── foto.jpg             # Foto de perfil
    │   ├── img/                 # Foto da premiação
    │   ├── certificados/        # PDFs e miniaturas dos certificados
    │   ├── projects/            # GIFs e prints dos projetos
    │   ├── mini-projetos/       # 5 mini apps em JavaScript puro
    │   └── apps/                # Versões compiladas dos projetos ("Testar aqui")
    ├── src/
    │   ├── components/          # Componentes reutilizáveis
    │   │   ├── Avatar.jsx       # Foto com plano B de iniciais
    │   │   ├── Badge.jsx        # Crachá interativo
    │   │   ├── Footer.jsx       # Rodapé
    │   │   ├── Loader.jsx       # Tela de carregamento (%)
    │   │   ├── Navbar.jsx       # Menu e troca de idioma
    │   │   ├── Reveal.jsx       # Animação ao rolar
    │   │   ├── SocialLinks.jsx  # Ícones de contato
    │   │   ├── Starfield.jsx    # Fundo de estrelas (canvas)
    │   │   └── TechIcon.jsx     # Ícones das tecnologias
    │   ├── data/                # ⭐ Conteúdo do site
    │   │   ├── profile.js       # Dados pessoais, Sobre Mim e contatos
    │   │   ├── projects.js      # Projetos da linha do tempo
    │   │   ├── miniProjects.js  # Mini projetos
    │   │   ├── experiences.js   # Experiências
    │   │   └── achievements.js  # Prêmio e certificados
    │   ├── i18n/                # Português e inglês
    │   │   ├── LanguageContext.jsx
    │   │   └── translations.js
    │   ├── sections/            # Seções da página
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Experience.jsx
    │   │   ├── Achievements.jsx
    │   │   └── Contact.jsx
    │   ├── styles/global.css    # Estilos e identidade visual
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── vercel.json
    └── vite.config.js
```

### 🧱 Arquitetura

- **Conteúdo separado da interface:** textos, projetos e experiências ficam em `src/data/`. Para atualizar o portfólio, não é preciso mexer nos componentes.
- **Bilíngue com Context API:** o `LanguageContext` guarda o idioma escolhido; cada texto tem uma versão `pt` e outra `en`.
- **Página única:** as seções ficam numa página só, com rolagem suave pelo menu, o que deixa o site rápido e simples de hospedar.
- **Sem back-end próprio:** o formulário envia os dados para o FormSubmit, que encaminha para o e-mail cadastrado.

---

## 🗺️ Processo de desenvolvimento

1. **Planejamento:** criação do repositório com README inicial e **wireframes de média fidelidade no Figma** (7 telas de desktop e 4 de celular).
2. **Protótipo:** projeto em React + Vite com a navegação entre seções e o layout base (cabeçalho, conteúdo e rodapé).
3. **Funcionalidades:** Sobre Mim em PT/EN, linha do tempo de projetos, experiências, contato com formulário, validações e responsividade.
4. **Finalização:** deploy na Vercel, GIFs dos projetos em funcionamento e README final.

---

## 🚀 Como instalar e rodar localmente

**Pré-requisitos:** [Node.js](https://nodejs.org) 20 ou superior e [Git](https://git-scm.com).

```bash
# 1. Clonar o repositório
git clone https://github.com/beatrizaandradee/Portf-lio-Profissional.git

# 2. Entrar na pasta do projeto
cd Portf-lio-Profissional/portfolio

# 3. Instalar as dependências
npm install

# 4. Rodar em modo desenvolvimento
npm run dev
# abra http://localhost:5173

# 5. Gerar a versão de produção (pasta dist/)
npm run build

# 6. Testar a versão de produção
npm run preview
```

## ✏️ Como atualizar o conteúdo

| O que mudar | Onde |
|---|---|
| Dados pessoais, Sobre Mim e contatos | `src/data/profile.js` |
| Projetos da linha do tempo | `src/data/projects.js` (a ordem pela data é automática) |
| Mini projetos | `src/data/miniProjects.js` |
| Experiências | `src/data/experiences.js` |
| Prêmio e certificados | `src/data/achievements.js` |
| Foto de perfil | `public/foto.jpg` |
| GIFs e imagens dos projetos | `public/projects/` |
| Cores | variáveis no topo de `src/styles/global.css` |

### 📬 Formulário de contato

O formulário envia para o e-mail configurado em `src/data/profile.js` (`contact.email` e `formEndpoint`), pelo serviço FormSubmit. Na primeira mensagem enviada pelo site publicado, o FormSubmit manda um e-mail de ativação; depois de clicar em **Activate Form**, todas as mensagens chegam na caixa de entrada.

---

## ☁️ Deploy na Vercel

O site está publicado em **https://portfolio-profissional-six-phi.vercel.app**.

Para publicar uma cópia:

1. Entre em [vercel.com](https://vercel.com) com a conta do GitHub.
2. **Add New → Project** e escolha este repositório.
3. Em **Root Directory**, selecione a pasta **`portfolio`**.
4. A Vercel detecta o Vite sozinha (Build: `npm run build` · Output: `dist`). Clique em **Deploy**.

A cada `git push` na branch `main`, a Vercel publica a nova versão automaticamente.

---

## 👩‍💻 Autora

**Beatriz Almeida Andrade**, estudante de Engenharia de Software na PUC Minas

[Site](https://portfolio-profissional-six-phi.vercel.app) · [LinkedIn](https://www.linkedin.com/in/beatriz-almeida-975408325/) · [GitHub](https://github.com/beatrizaandradee) · [Instagram](https://www.instagram.com/aandrade.bia)
