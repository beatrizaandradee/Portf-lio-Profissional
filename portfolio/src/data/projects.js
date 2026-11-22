// =====================================================================
//  EDITE AQUI: seus projetos.
//  - "date" no formato 'AAAA-MM-DD' (ou 'AAAA-MM'): a linha do tempo ordena sozinha.
//  - "image": GIF/print em /public/projects/
//  - "repo": link do repositório; "demo": link do site publicado ('' se não tiver)
// =====================================================================

const GH = 'https://github.com/beatrizaandradee'

export const projects = [
  {
    id: 'mini-projetos',
    date: '2026-11-05',
    name: { pt: 'Mini Projetos', en: 'Mini Projects' },
    description: {
      pt: 'Coleção de 5 apps em JavaScript puro: calculadora, lista de tarefas, gerador de senhas, jogo da velha e pomodoro.',
      en: 'A collection of 5 vanilla JavaScript apps: calculator, to-do list, password generator, tic-tac-toe and pomodoro.',
    },
    details: {
      pt: 'Projetos curtos para praticar lógica e manipulação do DOM, reunidos em uma galeria. Destaques: jogo da velha com o algoritmo Minimax (a CPU nunca perde), gerador de senhas com crypto.getRandomValues e cálculo de entropia, e pomodoro com anel de progresso em SVG e alarme gerado pela Web Audio API.',
      en: 'Short projects to practice logic and DOM manipulation, gathered in a gallery. Highlights: tic-tac-toe with the Minimax algorithm (the CPU never loses), password generator with crypto.getRandomValues and entropy calculation, and a pomodoro timer with an SVG progress ring and an alarm generated with the Web Audio API.',
    },
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/projects/mini-projetos.gif',
    repo: `${GH}/portfolio/tree/main/public/mini-projetos`,
    demo: '/mini-projetos/',
  },
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
    demo: '/apps/analise-gastos/',
    frame: 'desktop',
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
    demo: '/apps/simulador-investimentos/',
    frame: 'desktop',
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
    demo: '/apps/financas-app/',
    frame: 'desktop',
  },
  {
    id: 'vitrine-ecommerce',
    date: '2026-11-22',
    frame: 'desktop',
    name: { pt: 'Vitrine · E-commerce Completo', en: 'Vitrine · Full E-commerce' },
    description: {
      pt: 'Loja online com catálogo, filtros, carrinho, cupons, frete por CEP e checkout em 3 etapas com validação de CPF e cartão.',
      en: 'Online store with catalog, filters, cart, coupons, shipping by ZIP code and a 3-step checkout with ID and card validation.',
    },
    details: {
      pt: 'Catálogo com busca, filtros e ordenação; produto com cor, tamanho e estoque; carrinho com barra de frete grátis e cupons; checkout com CPF validado pelos dígitos verificadores, cartão pelo algoritmo de Luhn, parcelamento e desconto no Pix; pedidos com linha do tempo de status. Estado global com Context API, roteador próprio e 15 testes das regras de negócio.',
      en: 'Catalog with search, filters and sorting; product with color, size and stock; cart with free-shipping bar and coupons; checkout validating Brazilian ID (CPF) check digits and card numbers with the Luhn algorithm, installments and Pix discount; orders with a status timeline. Global state with Context API, a custom router and 15 business-rule tests.',
    },
    tech: ['React', 'Vite', 'Context API', 'CSS3'],
    image: '/projects/vitrine-ecommerce.gif',
    repo: `${GH}/vitrine-ecommerce`,
    demo: '/apps/vitrine-ecommerce/',
  },
  {
    id: 'rota-app',
    date: '2026-11-22',
    frame: 'phone',
    name: { pt: 'Rota · App de Mobilidade (estilo Uber)', en: 'Rota · Ride-hailing App (Uber-like)' },
    description: {
      pt: 'App mobile para pedir corridas: mapa em SVG, preço por categoria com tarifa dinâmica, motorista chegando ao vivo e avaliação.',
      en: 'Mobile ride-hailing app: SVG map, price per category with surge pricing, live driver tracking and rating.',
    },
    details: {
      pt: 'Busca de destino, rota calculada pelas ruas do mapa, 4 categorias com preço por bandeirada + km + minuto, tarifa dinâmica no horário de pico, cupons, animação do carro até o passageiro e até o destino, avaliação com gorjeta e histórico de viagens. 11 testes automatizados.',
      en: 'Destination search, street-based routing, 4 categories priced by base fare + km + minute, rush-hour surge pricing, coupons, animated car to pickup and destination, rating with tip and trip history. 11 automated tests.',
    },
    tech: ['React', 'SVG', 'JavaScript', 'CSS3'],
    image: '/projects/rota-app.gif',
    repo: `${GH}/rota-app`,
    demo: '/apps/rota-app/',
  },
  {
    id: 'ritmo-corrida',
    date: '2026-11-22',
    frame: 'phone',
    name: { pt: 'Ritmo · App de Corrida', en: 'Ritmo · Running App' },
    description: {
      pt: 'Registra corridas ao vivo com mapa do percurso, pace, parciais por km, metas semanais, recordes e GPS real do celular.',
      en: 'Tracks runs live with route map, pace, per-km splits, weekly goals, personal records and real phone GPS.',
    },
    details: {
      pt: 'Corrida ao vivo com GPS real (Geolocation API + fórmula de Haversine) ou modo demonstração acelerado; pace atual e médio, calorias, parciais por km interpoladas, resumo com mapa, meta semanal com anel de progresso, sequência de dias, recordes e calculadora de pace com a fórmula de Riegel. 12 testes automatizados.',
      en: 'Live run with real GPS (Geolocation API + Haversine formula) or a sped-up demo mode; current and average pace, calories, interpolated per-km splits, summary with map, weekly goal ring, streak, records and a pace calculator using Riegel’s formula. 12 automated tests.',
    },
    tech: ['React', 'Geolocation', 'SVG', 'CSS3'],
    image: '/projects/ritmo-corrida.gif',
    repo: `${GH}/ritmo-corrida`,
    demo: '/apps/ritmo-corrida/',
  },
  {
    id: 'lumi-streaming',
    date: '2026-11-22',
    frame: 'desktop',
    name: { pt: 'Lumi · Plataforma de Streaming', en: 'Lumi · Streaming Platform' },
    description: {
      pt: 'Streaming com perfis (inclusive infantil), Top 10, recomendações, temporadas e episódios, e player completo com atalhos.',
      en: 'Streaming platform with profiles (including kids), Top 10, recommendations, seasons and episodes, and a full player with shortcuts.',
    },
    details: {
      pt: 'Perfis com lista e progresso separados, perfil Kids filtrado por classificação, fileiras com "Continuar assistindo" e Top 10, recomendações pelos gêneros assistidos, busca sem acentos, detalhes com episódios e player com progresso salvo, velocidade, legendas, tela cheia e próximo episódio. Capas geradas em SVG e títulos 100% fictícios. 9 testes automatizados.',
      en: 'Profiles with separate lists and progress, Kids profile filtered by age rating, rows with "Continue watching" and Top 10, genre-based recommendations, accent-insensitive search, details with episodes and a player with saved progress, speed, subtitles, fullscreen and next episode. SVG-generated posters and 100% fictional titles. 9 automated tests.',
    },
    tech: ['React', 'Canvas', 'SVG', 'CSS3'],
    image: '/projects/lumi-streaming.gif',
    repo: `${GH}/lumi-streaming`,
    demo: '/apps/lumi-streaming/',
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
