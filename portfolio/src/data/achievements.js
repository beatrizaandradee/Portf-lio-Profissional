// =====================================================================
//  EDITE AQUI: prêmios e certificados.
//  Coloque os PDFs/imagens em /public/certificados/ e /public/img/
// =====================================================================

export const awards = [
  {
    title: { pt: 'Prêmio Stellantis de Educação', en: 'Stellantis Education Award' },
    org: 'Stellantis',
    date: { pt: 'Novembro de 2026', en: 'November 2026' },
    image: '/img/premio-stellantis.jpg',
    description: {
      pt: 'Fui premiada no programa da Stellantis que reconhece estudantes recém-formados pelo desempenho acadêmico e pela dedicação aos estudos. Recebi o troféu na cerimônia de premiação.',
      en: 'I received the award from Stellantis’ program that recognizes recent graduates for academic performance and dedication to learning. I received the trophy at the award ceremony.',
    },
  },
]

export const certificates = [
  {
    title: 'Copilot',
    org: 'Santander Open Academy',
    date: '30/04/2026',
    hours: '8h',
    file: '/certificados/santander-copilot.pdf',
    thumb: '/certificados/santander-copilot.jpg',
    tag: 'IA',
  },
  {
    title: { pt: 'Engenharia de Prompt Eficaz', en: 'Effective Prompt Engineering' },
    org: 'Enap',
    date: '29/04/2026',
    hours: '2h · nota 100',
    file: '/certificados/enap-engenharia-de-prompt.pdf',
    thumb: '/certificados/enap-engenharia-de-prompt.jpg',
    tag: 'IA',
  },
  {
    title: { pt: 'IA para Profissionais do Direito', en: 'AI for Legal Professionals' },
    org: 'Enap',
    date: '29/04/2026',
    hours: '2h · nota 100',
    file: '/certificados/enap-ia-direito.pdf',
    thumb: '/certificados/enap-ia-direito.jpg',
    tag: 'IA',
  },
  {
    title: { pt: 'Fundamentos de Construção Industrializada', en: 'Fundamentals of Industrialized Construction' },
    org: 'Enap',
    date: '30/04/2026',
    hours: '3h · nota 100',
    file: '/certificados/enap-construcao-industrializada.pdf',
    thumb: '/certificados/enap-construcao-industrializada.jpg',
    tag: 'Inovação',
  },
  {
    title: { pt: 'Semana do Python na Prática', en: 'Python in Practice Week' },
    org: 'Empowerdata',
    date: '08/08/2024',
    hours: '8h',
    file: '/certificados/semana-python-empowerdata.pdf',
    thumb: '/certificados/semana-python-empowerdata.jpg',
    tag: 'Python',
  },
  {
    title: { pt: '24º MINIONU: Delegação dos Países Baixos (OIT)', en: '24th MINIONU: Netherlands Delegation (ILO)' },
    org: 'PUC Minas',
    date: '15/10/2023',
    hours: { pt: '4 dias', en: '4 days' },
    file: '/certificados/minionu-puc-2023.pdf',
    thumb: '/certificados/minionu-puc-2023.jpg',
    tag: { pt: 'Liderança', en: 'Leadership' },
  },
]
