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
    icon: 'Calendar',
    color: '#2979ff',
    links: [
      { category: 'github',       label: 'Repositório',  url: 'https://github.com/turco-vic/sistema-agendamentos' },
      { category: 'deploy',       label: 'Ver online',    url: 'https://agendamentos-app.vercel.app' },
      { category: 'documentação', label: 'README',        url: 'https://github.com/turco-vic/sistema-agendamentos#readme' },
    ],
    startDate: 'ago 2025',
    endDate: 'nov 2025',
    documentation: {
      requirements: [
        'Autenticação de usuários com JWT',
        'Cadastro e gerenciamento de clientes',
        'Agendamento dinâmico com controle de horários',
        'Painel administrativo para gestão de serviços',
        'Notificações de agendamento por e-mail',
        'Relatórios de agendamentos por período',
      ],
      features: [
        'Login/cadastro com validação',
        'Dashboard admin com métricas',
        'Calendário interativo de agendamentos',
        'Gestão de horários disponíveis',
        'Histórico completo de atendimentos',
      ],
      architecture: 'Monorepo com frontend Next.js e API REST em Express.js. Banco PostgreSQL com Prisma ORM. Deploy via Vercel (front) e Railway (back).',
    },
    challenges: [
      'Sincronização de horários em tempo real para evitar conflitos de agendamento',
      'Implementação de refresh token para manter sessão ativa de forma segura',
    ],
    learnings: [
      'Domínio de autenticação JWT completa com access/refresh tokens',
      'Modelagem de banco relacional para sistemas de agendamento',
      'Integração de calendários dinâmicos no frontend',
    ],
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
    icon: 'CheckCircle',
    color: '#00b0ff',
    links: [
      { category: 'github',       label: 'Repositório',      url: 'https://github.com/turco-vic/task-api' },
      { category: 'documentação', label: 'Swagger / OpenAPI', url: 'https://task-api-demo.railway.app/docs' },
      { category: 'documentação', label: 'Postman Collection', url: 'https://www.postman.com/turco-vic/task-api' },
    ],
    startDate: 'mai 2025',
    endDate: 'jul 2025',
    documentation: {
      requirements: [
        'CRUD completo de tarefas com prioridade e deadline',
        'Autenticação JWT com controle de roles (admin, membro)',
        'Workspaces compartilhados entre times',
        'Comentários e histórico de alterações em tarefas',
        'Documentação Swagger/OpenAPI completa',
      ],
      features: [
        'Endpoints RESTful padronizados',
        'Filtros por status, prioridade e responsável',
        'Paginação e ordenação de resultados',
        'Rate limiting e validação de entrada',
        'Testes automatizados via Postman',
      ],
      architecture: 'API REST em Node.js com Express.js. Banco PostgreSQL com queries nativas. Documentação auto-gerada pelo Swagger. Testes end-to-end com Postman Collections.',
    },
    challenges: [
      'Design de permissões granulares por workspace e role',
      'Implementação de paginação eficiente com grandes volumes de dados',
    ],
    learnings: [
      'Boas práticas de design de APIs RESTful',
      'Documentação profissional com Swagger/OpenAPI',
      'Controle de acesso baseado em roles (RBAC)',
    ],
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
    icon: 'Wallet',
    color: '#448aff',
    links: [
      { category: 'github', label: 'Repositório',  url: 'https://github.com/turco-vic/finance-app' },
      { category: 'design', label: 'Protótipo Figma', url: 'https://figma.com/file/abc123/finance-app' },
    ],
    startDate: 'jan 2026',
    endDate: null,
    documentation: {
      requirements: [
        'Cadastro de receitas e despesas por categoria',
        'Gráficos de evolução financeira mensal',
        'Definição de metas e orçamentos mensais',
        'Notificações de limite de gastos',
        'Exportação de relatórios em PDF',
      ],
      features: [
        'Telas de lançamento rápido',
        'Dashboard com gráficos (pizza, barras, linha)',
        'Categorias customizáveis',
        'Modo offline com sincronização',
        'Tema claro e escuro',
      ],
      architecture: 'App React Native com Expo. Backend Node.js + Express com MySQL. Autenticação via JWT. Gráficos com Victory Native.',
    },
    challenges: [
      'Sincronização offline-first em dispositivos móveis',
      'Performance de renderização de gráficos com muitos dados',
    ],
    learnings: [
      'Desenvolvimento mobile com React Native e Expo',
      'Gerenciamento de estado offline com AsyncStorage',
      'Criação de gráficos interativos em apps nativos',
    ],
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
    icon: 'Monitor',
    color: '#82b1ff',
    links: [
      { category: 'github', label: 'Repositório', url: 'https://github.com/turco-vic/portfolio' },
      { category: 'deploy', label: 'Ver online',   url: 'https://enzo-turcovic.vercel.app' },
    ],
    startDate: 'fev 2026',
    endDate: 'mar 2026',
    documentation: {
      requirements: [
        'Páginas de projetos, sobre e contato',
        'Filtro e busca de projetos por stack/status',
        'Design responsivo e acessível',
        'Formulário de contato funcional',
        'Tema dark com identidade visual consistente',
      ],
      features: [
        'Navegação SPA com Next.js App Router',
        'Animações CSS suaves',
        'Grid responsivo de cards',
        'Página de detalhe por projeto',
        'Integração com Formspree para contato',
      ],
      architecture: 'Next.js 14 com App Router e CSS Modules. Deploy contínuo na Vercel via integração com GitHub.',
    },
    challenges: [
      'Criar um design dark que fosse elegante sem parecer genérico',
      'Otimizar performance e acessibilidade simultaneamente',
    ],
    learnings: [
      'App Router do Next.js 14 e Server Components',
      'CSS Modules com design system customizado',
      'Deploy contínuo com Vercel',
    ],
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
    icon: 'Ticket',
    color: '#e3b341',
    links: [
      { category: 'github',       label: 'Repositório',    url: 'https://github.com/turco-vic/helpdesk' },
      { category: 'documentação', label: 'Wiki do projeto', url: 'https://github.com/turco-vic/helpdesk/wiki' },
      { category: 'design',       label: 'Wireframes Figma', url: 'https://figma.com/file/xyz789/helpdesk' },
    ],
    startDate: 'fev 2026',
    endDate: null,
    documentation: {
      requirements: [
        'Abertura de tickets com categoria e prioridade',
        'Triagem automática por tipo de chamado',
        'Atribuição de responsáveis por setor',
        'Histórico completo de interações',
        'Dashboard com métricas de SLA',
      ],
      features: [
        'Painel de tickets com filtros avançados',
        'Sistema de comentários em tempo real',
        'Notificações por e-mail de atualização',
        'Relatórios de tempo de resolução',
        'Kanban de chamados por status',
      ],
      architecture: 'Frontend React com Tailwind CSS. API REST em Node.js + Express.js. Banco PostgreSQL com Prisma. WebSocket para atualizações em tempo real.',
    },
    challenges: [
      'Implementação de WebSocket para notificações em tempo real',
      'Design de SLA com cálculo automático de prazos',
    ],
    learnings: [
      'Comunicação em tempo real com WebSocket',
      'Modelagem de sistemas de tickets e SLA',
      'Interface Kanban com drag-and-drop',
    ],
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
    icon: 'BarChart3',
    color: '#f85149',
    links: [
      { category: 'github', label: 'Repositório', url: 'https://github.com/turco-vic/github-dashboard' },
      { category: 'deploy', label: 'Ver online',   url: 'https://gh-metrics.vercel.app' },
    ],
    startDate: 'mar 2026',
    endDate: null,
    documentation: {
      requirements: [
        'Integração com GitHub REST API v3',
        'Exibição de commits, PRs e issues por repositório',
        'Gráficos de atividade temporal',
        'Comparação entre repositórios',
        'Cache de dados para reduzir chamadas à API',
      ],
      features: [
        'Busca de usuário/organização',
        'Gráficos interativos de contribuições',
        'Ranking de linguagens mais usadas',
        'Timeline de atividade recente',
        'Modo dark/light',
      ],
      architecture: 'Next.js com Server Components para chamadas à API do GitHub. Cache com ISR (Incremental Static Regeneration). Tailwind CSS para estilização.',
    },
    challenges: [
      'Lidar com rate limiting da GitHub API (60 req/h sem auth)',
      'Agregação e normalização de dados de múltiplos endpoints',
    ],
    learnings: [
      'Consumo de APIs públicas com tratamento de erros',
      'Estratégias de cache e ISR no Next.js',
      'Visualização de dados com bibliotecas de gráficos',
    ],
  },
]

// ── Stack ──────────────────────────────────────────────────
export const stack = {
  frontend: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Expo', 'Vue.js'],
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
