// =====================================================================
//  EDITE AQUI: mini projetos (projetos menores e exercícios).
//  Para incluir um repositório que você JÁ TEM no GitHub, copie um item
//  e troque nome, descrição, tecnologias, imagem e links.
//  - live: endereço do app. Os 5 mini projetos ficam DENTRO deste site,
//    na pasta public/mini-projetos/, e abrem numa janela no próprio portfólio.
//    Para um repositório externo, use o link completo (https://...).
//  - repo: link do código no GitHub
// =====================================================================

const PAGES = '/mini-projetos'
const REPO = 'https://github.com/beatrizaandradee/portfolio/tree/main/public/mini-projetos'

export const miniProjects = [
  {
    name: { pt: 'Calculadora', en: 'Calculator' },
    icon: '🧮',
    description: { pt: 'Operações básicas, porcentagem e suporte ao teclado.', en: 'Basic operations, percentage and keyboard support.' },
    tech: ['JavaScript', 'CSS3'],
    image: '/projects/mini/calculadora.jpg',
    live: `${PAGES}/calculadora/`,
    repo: `${REPO}/calculadora`,
  },
  {
    name: { pt: 'Lista de Tarefas', en: 'To-do List' },
    icon: '✅',
    description: { pt: 'Tarefas com filtros e dados salvos no navegador.', en: 'Tasks with filters and data saved in the browser.' },
    tech: ['JavaScript', 'localStorage'],
    image: '/projects/mini/lista-de-tarefas.jpg',
    live: `${PAGES}/lista-de-tarefas/`,
    repo: `${REPO}/lista-de-tarefas`,
  },
  {
    name: { pt: 'Gerador de Senhas', en: 'Password Generator' },
    icon: '🔐',
    description: { pt: 'Senhas seguras com Web Crypto e medidor de força.', en: 'Secure passwords with Web Crypto and a strength meter.' },
    tech: ['JavaScript', 'Web Crypto'],
    image: '/projects/mini/gerador-de-senhas.jpg',
    live: `${PAGES}/gerador-de-senhas/`,
    repo: `${REPO}/gerador-de-senhas`,
  },
  {
    name: { pt: 'Jogo da Velha', en: 'Tic-Tac-Toe' },
    icon: '⭕',
    description: { pt: 'Modo 2 jogadores e contra a CPU com Minimax.', en: '2-player mode and vs CPU using Minimax.' },
    tech: ['JavaScript', 'Algoritmos'],
    image: '/projects/mini/jogo-da-velha.jpg',
    live: `${PAGES}/jogo-da-velha/`,
    repo: `${REPO}/jogo-da-velha`,
  },
  {
    name: { pt: 'Pomodoro', en: 'Pomodoro Timer' },
    icon: '🍅',
    description: { pt: 'Timer de foco com anel de progresso em SVG.', en: 'Focus timer with an SVG progress ring.' },
    tech: ['JavaScript', 'SVG'],
    image: '/projects/mini/pomodoro.jpg',
    live: `${PAGES}/pomodoro/`,
    repo: `${REPO}/pomodoro`,
  },
]
