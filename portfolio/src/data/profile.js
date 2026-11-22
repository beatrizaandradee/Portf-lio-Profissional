// =====================================================================
//  EDITE AQUI: seus dados pessoais, links e textos do "Sobre Mim".
//  Todo texto que aparece no site tem versão em português (pt) e inglês (en).
// =====================================================================

export const profile = {
  name: 'Beatriz Almeida Andrade',
  shortName: 'Beatriz',
  initials: 'BA',

  // Foto em /public/foto.jpg (se for trocar, mantenha formato retrato 3:4)
  photo: '/foto.jpg',

  role: {
    pt: 'Estudante de Engenharia de Software',
    en: 'Software Engineering Student',
  },

  // Frases que aparecem "digitando" no topo do site
  typing: {
    pt: ['Engenharia de Software · PUC Minas', 'Desenvolvedora Front-end', 'React · JavaScript · Python', 'Premiada no Prêmio Stellantis de Educação'],
    en: ['Software Engineering · PUC Minas', 'Front-end Developer', 'React · JavaScript · Python', 'Stellantis Education Award winner'],
  },

  heroText: {
    pt: 'Sou a Bia, estudante de Engenharia de Software na PUC Minas. Gosto de transformar problemas do dia a dia, como organizar as finanças, em aplicações simples, bonitas e úteis.',
    en: "I'm Bia, a Software Engineering student at PUC Minas. I love turning everyday problems, like managing money, into simple, beautiful and useful applications.",
  },

  // ---- Sobre Mim (PT e EN) ----
  about: {
    pt: [
      'Sou estudante de Engenharia de Software na PUC Minas, em Belo Horizonte. Cursei o ensino médio no Colégio Educare e no SESI Betim e fui premiada no Prêmio Stellantis de Educação, que reconhece estudantes pelo desempenho acadêmico.',
      'Meu foco é desenvolvimento web com React e JavaScript, e também uso Python para análise de dados. Gosto especialmente de projetos ligados a finanças pessoais: criei um app de controle financeiro, um simulador de investimentos e uma ferramenta que analisa extratos bancários.',
      'Busco meu primeiro estágio em desenvolvimento para aprender com um time, contribuir com produtos reais e crescer como engenheira de software.',
    ],
    en: [
      "I'm a Software Engineering student at PUC Minas, in Belo Horizonte, Brazil. I attended high school at Colégio Educare and SESI Betim, and I received the Stellantis Education Award, which recognizes students for academic achievement.",
      'My focus is web development with React and JavaScript, and I also use Python for data analysis. I especially enjoy personal finance projects: I built a money management app, an investment simulator and a tool that analyzes bank statements.',
      "I'm looking for my first software development internship, to learn with a team, contribute to real products and grow as a software engineer.",
    ],
  },

  location: { pt: 'Betim · Belo Horizonte, MG', en: 'Betim · Belo Horizonte, Brazil' },

  education: [
    {
      institution: 'PUC Minas',
      course: { pt: 'Bacharelado em Engenharia de Software', en: "Bachelor's in Software Engineering" },
      period: { pt: '2026 – em andamento', en: '2026 – present' },
    },
    {
      institution: 'SESI Betim',
      course: { pt: 'Ensino Médio (2º e 3º ano)', en: 'High School (2nd and 3rd year)' },
      period: { pt: '2024 – 2025', en: '2024 – 2025' },
    },
    {
      institution: 'Colégio Educare',
      course: { pt: 'Ensino Médio (1º ano)', en: 'High School (1st year)' },
      period: { pt: '2023', en: '2023' },
    },
  ],

  // Tecnologias que você usa (os ícones estão mapeados em components/TechIcon.jsx)
  stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Python', 'Vite', 'Git', 'GitHub', 'Node.js', 'Figma', 'Vercel', 'Copilot'],

  // ---- Contato ----
  contact: {
    email: 'biaalmeida.andrade7@gmail.com',
    whatsapp: '5531999270708',
    linkedin: 'https://www.linkedin.com/in/beatriz-almeida-975408325/',
    github: 'https://github.com/beatrizaandradee',
    instagram: 'https://www.instagram.com/aandrade.bia',
  },

  // Formulário de contato: envia para o e-mail acima via FormSubmit (grátis, sem cadastro).
  // Na PRIMEIRA mensagem enviada, o FormSubmit manda um e-mail de ativação: clique em "Activate Form".
  formEndpoint: 'https://formsubmit.co/ajax/biaalmeida.andrade7@gmail.com',
}
