export const projects = [
  {
    id: 1,
    title: 'Sistema de Agendamentos',
    desc: 'Plataforma web para agendamento de serviços com painel admin, notificações e controle de horários.',
    longDesc:
      'Sistema fullstack com autenticação JWT, cadastro de clientes, agenda dinâmica e painel administrativo para gestão de serviços e horários. Backend com Node.js e Express, banco PostgreSQL, frontend em Next.js com Tailwind CSS.',
    status: 'done',
    hasDb: true,
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    emoji: '📅',
    color: '#2979ff',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'API REST — Gestão de Tarefas',
    desc: 'API RESTful para gerenciamento de tarefas com autenticação, times e documentação Swagger.',
    longDesc:
      'API robusta com autenticação JWT, controle de permissões por role, workspaces compartilhados e comentários em tarefas. Totalmente documentada com Swagger/OpenAPI. Testada via Postman.',
    status: 'done',
    hasDb: true,
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Swagger', 'Postman'],
    emoji: '✅',
    color: '#00b0ff',
    github: '#',
    demo: null,
  },
  {
    id: 3,
    title: 'App Mobile — Controle Financeiro',
    desc: 'Aplicativo mobile para controle de receitas, despesas e metas financeiras pessoais.',
    longDesc:
      'App mobile-first desenvolvido com React Native e Expo. Permite categorizar lançamentos, visualizar gráficos de evolução e definir metas mensais. Backend em Node.js com banco MySQL.',
    status: 'dev',
    hasDb: true,
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'MySQL'],
    emoji: '💰',
    color: '#448aff',
    github: '#',
    demo: null,
  },
  {
    id: 4,
    title: 'Landing Page — Portfólio',
    desc: 'Este portfólio! Desenvolvido com Next.js. Design dark & técnico com tema azul elétrico.',
    longDesc:
      'Site portfólio com múltiplas páginas, filtro de projetos, animações CSS e tema escuro com paleta azul elétrico e decorações de circuito. Hospedado na Vercel.',
    status: 'done',
    hasDb: false,
    stack: ['Next.js', 'JavaScript', 'CSS Modules', 'Vercel'],
    emoji: '🖥',
    color: '#82b1ff',
    github: 'https://github.com/turco-vic/portfolio',
    demo: '#',
  },
  {
    id: 5,
    title: 'Sistema de Chamados (Help Desk)',
    desc: 'Sistema interno para abertura e acompanhamento de chamados de suporte técnico.',
    longDesc:
      'Plataforma de help desk com abertura de tickets, triagem por prioridade, atribuição de responsáveis e histórico de atendimentos. Interface construída em React com backend Node.js e PostgreSQL.',
    status: 'dev',
    hasDb: true,
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    emoji: '🎫',
    color: '#e3b341',
    github: '#',
    demo: null,
  },
  {
    id: 6,
    title: 'Dashboard — Métricas GitHub',
    desc: 'Dashboard que agrega commits, PRs e estatísticas de repositórios via GitHub API.',
    longDesc:
      'Integração com a API pública do GitHub para exibir métricas de atividade em tempo real. Gráficos, dark mode e responsivo. Desenvolvido em Next.js com JavaScript.',
    status: 'dev',
    hasDb: false,
    stack: ['Next.js', 'JavaScript', 'GitHub API', 'Tailwind CSS'],
    emoji: '📊',
    color: '#f85149',
    github: '#',
    demo: null,
  },
]

// ── Stack ──────────────────────────────────────────────────
export const stack = {
  frontend: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Expo'],
  backend:  ['Node.js', 'Express.js', 'PostgreSQL', 'MySQL'],
  tools:    ['Git', 'GitHub', 'VS Code', 'Postman', 'Swagger', 'Figma'],
}

// ── Recommendations ────────────────────────────────────────
export const recommendations = [
  {
    name: 'Thiago Ferreira',
    role: 'Engenheiro de Software & Professor',
    initial: 'T',
    color: 'rgba(41,121,255,0.15)',
    borderColor: 'rgba(41,121,255,0.3)',
    date: 'fev 2026 · Professor no SENAI',
    text: '"Ao longo das aulas, o Enzo sempre chamou atenção pela energia e pelo entusiasmo. É dedicado, comprometido e demonstra interesse genuíno em aprender e evoluir. Recomendo com tranquilidade para qualquer empresa que busque alguém engajado e com grande potencial de crescimento."',
  },
  {
    name: 'Felipe Santos',
    role: 'Eng. Software · DevOps · Fullstack · IA',
    initial: 'F',
    color: 'rgba(0,176,255,0.12)',
    borderColor: 'rgba(0,176,255,0.3)',
    date: 'fev 2026 · Professor no SENAI Valinhos',
    text: '"O Enzo se destacou pela dedicação e pela capacidade de pensar além do que era pedido. Não apenas absorvia o conteúdo — chegava com ideias próprias, questionava e propunha soluções. Como fullstack, tem perfil raro: une a curiosidade técnica com a visão de produto. Recomendo sem hesitar."',
  },
]
