// =====================================================================
//  EDITE AQUI: seus projetos.
//  - "date" no formato 'AAAA-MM-DD' (ou 'AAAA-MM'): a linha do tempo ordena sozinha.
//  - "image": GIF/print em /public/projects/
//  - "repo": link do repositório; "demo": link do site publicado ('' se não tiver)
// =====================================================================

const GH = 'https://github.com/beatrizaandradee'

export const projects = [
  {
    id: 'analise-gastos',
    date: '2026-11-10',
    name: { pt: 'Análise de Gastos', en: 'Spending Analyzer' },
    description: {
      pt: 'Ferramenta em Python que lê o extrato do banco, categoriza os gastos e gera um relatório com gráficos e recomendações.',
      en: 'Python tool that reads bank statements, categorizes spending and generates a report with charts and recommendations.',
    },
    details: {
      pt: 'Linha de comando feita com pandas e matplotlib. Lê CSVs de diferentes bancos (separadores, datas e valores em formato brasileiro), categoriza por palavras-chave, detecta assinaturas recorrentes e gastos fora do padrão (média + 2 desvios-padrão) e gera um relatório HTML com gráficos. Tem 25 testes automatizados com pytest.',
      en: 'Command-line tool built with pandas and matplotlib. Reads CSVs from different banks (Brazilian separators, dates and number formats), categorizes by keywords, detects recurring subscriptions and outliers (mean + 2 standard deviations) and builds an HTML report with charts. 25 automated tests with pytest.',
    },
    tech: ['Python', 'Pandas', 'Matplotlib', 'Pytest'],
    image: '/projects/analise-gastos.jpg',
    repo: `${GH}/analise-gastos`,
    demo: '',
  },
  {
    id: 'simulador-investimentos',
    date: '2026-11-15',
    name: { pt: 'Simulador de Investimentos', en: 'Investment Simulator' },
    description: {
      pt: 'Compara Poupança, Tesouro Selic, CDB e LCI/LCA com aportes mensais, IR regressivo e inflação. Tudo em JavaScript puro.',
      en: 'Compares Brazilian fixed-income investments with monthly deposits, regressive income tax and inflation. Pure JavaScript.',
    },
    details: {
      pt: 'Calcula juros compostos mês a mês e aplica o IR regressivo separadamente em cada aporte, de acordo com o tempo que ele ficou aplicado. Mostra o valor real descontando a inflação, gráfico em canvas feito do zero, tabela ano a ano, calculadora de "em quanto tempo chego no objetivo" e link compartilhável. Lógica separada da interface e coberta por testes.',
      en: 'Computes compound interest month by month and applies the regressive income tax to each deposit separately, based on how long it was invested. Shows inflation-adjusted values, a canvas chart built from scratch, a yearly table, a "how long to reach my goal" calculator and a shareable link. Logic is separated from the UI and covered by tests.',
    },
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'],
    image: '/projects/simulador-investimentos.gif',
    repo: `${GH}/simulador-investimentos`,
    demo: '',
  },
  {
    id: 'financas-app',
    date: '2026-11-20',
    name: { pt: 'Finanças+ · Controle Financeiro', en: 'Finanças+ · Money Manager' },
    description: {
      pt: 'App de finanças pessoais com dashboard, gráficos, orçamentos por categoria, metas de economia e exportação para Excel.',
      en: 'Personal finance app with dashboard, charts, category budgets, savings goals and Excel export.',
    },
    details: {
      pt: 'Feito em React + Vite. Dashboard com saldo, taxa de poupança e comparação com o mês anterior; gráficos de barras e de rosca desenhados em SVG; transações com busca, filtros e validação; orçamentos com alertas de 80% e 100%; metas que calculam quanto guardar por mês; tema claro/escuro e dados salvos no navegador. As regras de negócio são funções puras com testes automatizados.',
      en: 'Built with React + Vite. Dashboard with balance, savings rate and month-over-month comparison; bar and donut charts drawn in SVG; transactions with search, filters and validation; budgets with 80%/100% alerts; goals that compute how much to save per month; light/dark theme and data saved in the browser. Business rules are pure functions with automated tests.',
    },
    tech: ['React', 'Vite', 'JavaScript', 'CSS3'],
    image: '/projects/financas-app.gif',
    repo: `${GH}/financas-app`,
    demo: '',
  },
  {
    id: 'portfolio',
    date: '2026-11-22',
    name: { pt: 'Portfólio Pessoal', en: 'Personal Portfolio' },
    description: {
      pt: 'Este site! Portfólio bilíngue em React + Vite, com linha do tempo, certificados e formulário de contato.',
      en: 'This website! A bilingual React + Vite portfolio with a timeline, certificates and a contact form.',
    },
    details: {
      pt: 'Fundo estrelado animado em canvas, crachá interativo, troca de idioma PT/EN com Context API, linha do tempo de projetos ordenada automaticamente, galeria de certificados e formulário com validação e envio real por e-mail. Hospedado na Vercel.',
      en: 'Animated canvas starfield, interactive badge, PT/EN language switch with Context API, auto-sorted project timeline, certificate gallery and a validated contact form that sends real e-mails. Hosted on Vercel.',
    },
    tech: ['React', 'Vite', 'CSS3', 'Vercel'],
    image: '/projects/portfolio.jpg',
    repo: `${GH}/portfolio`,
    demo: '',
  },
]
