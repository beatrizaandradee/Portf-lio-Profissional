// =====================================================================
//  EDITE AQUI: seus projetos.
//  - "date" no formato 'AAAA-MM' — a linha do tempo ordena sozinha (mais antigo → mais recente).
//  - "image": coloque a imagem/GIF em /public/projects/ e use '/projects/nome.gif'.
//    Dica: grave a tela com o ScreenToGif (Windows) ou Kap (Mac) para gerar o GIF.
//  - "repo": link do repositório no GitHub.
//  - "demo": link do site publicado (opcional, pode deixar '').
// =====================================================================

export const projects = [
  {
    id: 'calculadora',
    date: '2024-04',
    name: { pt: 'Calculadora Web', en: 'Web Calculator' },
    description: {
      pt: 'Primeiro projeto da faculdade: uma calculadora com operações básicas, histórico e layout responsivo.',
      en: 'First college project: a calculator with basic operations, history and a responsive layout.',
    },
    details: {
      pt: 'Projeto feito para praticar manipulação do DOM com JavaScript puro. Tem tratamento de erros (divisão por zero), suporte ao teclado e histórico das últimas operações.',
      en: 'Project built to practice DOM manipulation with vanilla JavaScript. It handles errors (division by zero), supports the keyboard and keeps a history of the latest operations.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/projects/projeto-1.svg',
    repo: 'https://github.com/beatrizaandradee',
    demo: '',
  },
  {
    id: 'todo',
    date: '2024-10',
    name: { pt: 'Lista de Tarefas', en: 'To-do List' },
    description: {
      pt: 'Aplicação de tarefas com login simples, filtros por status e dados salvos no navegador.',
      en: 'To-do app with a simple login, status filters and data saved in the browser.',
    },
    details: {
      pt: 'Tela de login, cadastro de tarefas, marcação de concluídas e filtros (todas, pendentes, concluídas). Os dados ficam no localStorage.',
      en: 'Login screen, task creation, marking tasks as done and filters (all, pending, done). Data is kept in localStorage.',
    },
    tech: ['React', 'JavaScript', 'CSS3'],
    image: '/projects/projeto-2.svg',
    repo: 'https://github.com/beatrizaandradee',
    demo: '',
  },
  {
    id: 'dashboard',
    date: '2025-05',
    name: { pt: 'Dashboard de Vendas', en: 'Sales Dashboard' },
    description: {
      pt: 'Painel com gráficos e indicadores consumindo uma API, com filtros por período.',
      en: 'Dashboard with charts and KPIs consuming an API, with period filters.',
    },
    details: {
      pt: 'Consome dados de uma API REST, mostra indicadores e gráficos e permite filtrar por período. Projeto em grupo da disciplina de Desenvolvimento Web.',
      en: 'Consumes data from a REST API, shows KPIs and charts and allows filtering by period. Group project for the Web Development course.',
    },
    tech: ['React', 'Vite', 'Node.js', 'MySQL'],
    image: '/projects/projeto-3.svg',
    repo: 'https://github.com/beatrizaandradee',
    demo: '',
  },
  {
    id: 'portfolio',
    date: '2026-11',
    name: { pt: 'Portfólio Pessoal', en: 'Personal Portfolio' },
    description: {
      pt: 'Este site! Portfólio em React + Vite, bilíngue, responsivo e com formulário de contato.',
      en: 'This website! A React + Vite portfolio, bilingual, responsive and with a contact form.',
    },
    details: {
      pt: 'Fundo estrelado animado em canvas, crachá interativo, linha do tempo de projetos, troca de idioma PT/EN e formulário com envio por e-mail. Hospedado na Vercel.',
      en: 'Animated starfield on canvas, interactive badge, project timeline, PT/EN language switch and a form that sends e-mails. Hosted on Vercel.',
    },
    tech: ['React', 'Vite', 'CSS3', 'Vercel'],
    image: '/projects/projeto-4.svg',
    repo: 'https://github.com/beatrizaandradee/portfolio',
    demo: '',
  },
]
