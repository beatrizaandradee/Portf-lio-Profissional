// =====================================================================
//  EDITE AQUI: experiências profissionais, estágios, freelas,
//  open source, eventos técnicos, monitorias, cursos...
//  type: 'trabalho' | 'estagio' | 'freela' | 'opensource' | 'evento' | 'curso'
// =====================================================================

export const experiences = [
  {
    type: 'estagio',
    company: '[Nome da Empresa]',
    role: { pt: 'Estagiária de Desenvolvimento', en: 'Development Intern' },
    period: { pt: 'Jan 2026 – Atual', en: 'Jan 2026 – Present' },
    description: {
      pt: 'Apoio no desenvolvimento e manutenção de telas em React, correção de bugs e participação nas reuniões do time.',
      en: 'Support in developing and maintaining React screens, fixing bugs and taking part in team meetings.',
    },
  },
  {
    type: 'freela',
    company: '[Cliente / Projeto]',
    role: { pt: 'Desenvolvedora Freelancer', en: 'Freelance Developer' },
    period: { pt: 'Ago 2025 – Out 2025', en: 'Aug 2025 – Oct 2025' },
    description: {
      pt: 'Criação de uma landing page responsiva para um pequeno negócio, do layout no Figma até a publicação.',
      en: 'Built a responsive landing page for a small business, from the Figma layout to deployment.',
    },
  },
  {
    type: 'evento',
    company: '[Nome do Evento / Hackathon]',
    role: { pt: 'Participante', en: 'Participant' },
    period: { pt: 'Mai 2025', en: 'May 2025' },
    description: {
      pt: 'Participação em equipe no desenvolvimento de um protótipo em 48 horas.',
      en: 'Took part in a team building a prototype in 48 hours.',
    },
  },
  {
    type: 'opensource',
    company: 'GitHub',
    role: { pt: 'Contribuições Open Source', en: 'Open Source Contributions' },
    period: { pt: '2025 – Atual', en: '2025 – Present' },
    description: {
      pt: 'Pequenas contribuições em documentação e correções em projetos abertos.',
      en: 'Small contributions to documentation and fixes in open projects.',
    },
  },
]
