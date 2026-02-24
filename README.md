# ~/enzo — Portfólio Pessoal

Site de portfólio de **Enzo Alves Turcovic**, desenvolvedor Fullstack de Campinas/SP.  
Construído com Next.js 16, React 19 e CSS Modules, com visual dark inspirado em terminais.

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Página inicial com apresentação e terminal interativo |
| `/sobre` | Bio, formação, stack e recomendações |
| `/projetos` | Listagem de projetos com busca e filtro por status |
| `/projetos/[id]` | Página de detalhes de cada projeto |
| `/contato` | Links de contato (e-mail, LinkedIn, GitHub, WhatsApp) e formulário |

---

## Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **UI:** React 19 + CSS Modules
- **Lint:** ESLint + eslint-config-next

---

## Rodando localmente

```bash
# instalar dependências
npm install

# iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor em modo produção |
| `npm run lint` | Executa o linter |

---

## Estrutura do projeto

```
src/
├── app/
│   ├── page.jsx          # Home
│   ├── layout.jsx        # Layout raiz (Nav global)
│   ├── globals.css       # Variáveis CSS e estilos globais
│   ├── sobre/            # Página sobre
│   ├── projetos/         # Listagem e detalhes de projetos
│   └── contato/          # Página de contato
├── components/
│   ├── Nav.jsx           # Barra de navegação
│   └── CircuitDeco.jsx   # Decoração SVG de circuito
├── data/
│   └── index.js          # Dados dos projetos, stack e recomendações
└── styles/               # Estilos compartilhados
```

---

## Contato

- **E-mail:** enzoturcovic@email.com  
- **LinkedIn:** [linkedin.com/in/enzo-alves-turcovic](https://linkedin.com/in/enzo-alves-turcovic-10b7ab201)  
- **GitHub:** [github.com/turco-vic](https://github.com/turco-vic)
