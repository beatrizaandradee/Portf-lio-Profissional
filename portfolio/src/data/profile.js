// =====================================================================
//  EDITE AQUI: seus dados pessoais, links e textos do "Sobre Mim".
//  Todo texto que aparece no site tem versão em português (pt) e inglês (en).
// =====================================================================

export const profile = {
  name: 'Beatriz Andrade',
  shortName: 'Beatriz',
  initials: 'BA',

  // Coloque sua foto em /public/foto.jpg (formato retrato, ex.: 600x800).
  // Enquanto não existir, o site mostra suas iniciais no lugar.
  photo: '/foto.jpg',

  role: {
    pt: 'Desenvolvedora Front-end',
    en: 'Front-end Developer',
  },

  // Frases que aparecem "digitando" no topo do site
  typing: {
    pt: ['Desenvolvedora Front-end', 'Estudante de Tecnologia', 'React & JavaScript'],
    en: ['Front-end Developer', 'Technology Student', 'React & JavaScript'],
  },

  heroText: {
    pt: 'Transformo ideias em interfaces simples, bonitas e acessíveis. Aqui você encontra minha trajetória, meus projetos e as formas de falar comigo.',
    en: 'I turn ideas into simple, beautiful and accessible interfaces. Here you will find my journey, my projects and the ways to reach me.',
  },

  // ---- Sobre Mim (PT e EN) ----
  about: {
    pt: [
      'Sou estudante de [SEU CURSO] na [SUA FACULDADE] e estou construindo minha carreira em desenvolvimento de software, com foco em front-end.',
      'Gosto de criar interfaces que sejam fáceis de usar e de aprender tecnologias novas na prática, através de projetos. Tenho interesse em React, design de interfaces e boas práticas de código.',
      'Meu objetivo é atuar como desenvolvedora, contribuindo em projetos reais e crescendo junto com um time.',
    ],
    en: [
      'I am a [YOUR COURSE] student at [YOUR UNIVERSITY], building my career in software development with a focus on front-end.',
      'I enjoy creating interfaces that are easy to use and learning new technologies hands-on, through projects. I am interested in React, interface design and good coding practices.',
      'My goal is to work as a developer, contributing to real projects and growing together with a team.',
    ],
  },

  location: { pt: 'Brasil', en: 'Brazil' },

  education: [
    {
      institution: '[Sua Faculdade]',
      course: { pt: '[Seu Curso] — Graduação', en: '[Your Course] — Undergraduate' },
      period: '2024 – 2027',
    },
    {
      institution: '[Sua Escola]',
      course: { pt: 'Ensino Médio', en: 'High School' },
      period: '2021 – 2023',
    },
  ],

  // Tecnologias que você usa (os ícones já estão mapeados em components/TechIcon.jsx)
  stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Git', 'GitHub', 'Node.js', 'Python', 'Figma', 'Vercel', 'MySQL'],

  // ---- Contato ----
  contact: {
    email: 'seuemail@exemplo.com',
    // Só números, com DDI 55 + DDD. Ex.: 5511999999999
    whatsapp: '5511999999999',
    linkedin: 'https://www.linkedin.com/in/seu-perfil',
    github: 'https://github.com/beatrizaandradee',
    instagram: 'https://www.instagram.com/seu-perfil',
  },

  // Formulário de contato: envia para o e-mail acima via FormSubmit (grátis, sem cadastro).
  // Na PRIMEIRA mensagem enviada, o FormSubmit manda um e-mail de ativação para você: é só clicar em "Activate".
  formEndpoint: 'https://formsubmit.co/ajax/seuemail@exemplo.com',
}
