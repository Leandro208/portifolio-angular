export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  title: string;
  description: string;
  tech: string[];
  links: PortfolioLink[];
  highlight?: boolean;
};

export type PortfolioEducation = {
  title: string;
  institution: string;
  period: string;
  details?: string;
};

export type PortfolioExperience = {
  title: string;
  company?: string;
  period: string;
  details: string[];
};

export type PortfolioData = {
  person: {
    name: string;
    role: string;
    location: string;
    summary: string;
    photo?: {
      /**
       * Path/URL da sua foto.
       * Sugestão: coloque um arquivo em `public/profile.jpg` e use "/profile.jpg"
       */
      src: string;
      alt: string;
    };
  };
  links: {
    github?: string;
    linkedin?: string;
    email: string;
    whatsapp?: string;
  };
  about: {
    paragraphs: string[];
    focusAreas: string[];
  };
  education: PortfolioEducation[];
  experience: PortfolioExperience[];
  technologies: {
    primary: string[];
    secondary: string[];
    tools: string[];
  };
  projects: PortfolioProject[];
};

export const portfolio: PortfolioData = {
  person: {
    name: 'Leandro Barbosa',
    role: 'Desenvolvedor Web',
    location: 'Brasil',
    summary:
      'Transformo ideias em experiências digitais, desenvolvendo aplicações web com atenção a desempenho, usabilidade e qualidade de código.',
    photo: {
      src: 'https://github.com/Leandro208.png',
      alt: 'Foto Perfil',
    },
  },
  links: {
    email: 'barbosa.leandro.dev@gmail.com',
    github: 'https://github.com/leandro208',
    linkedin: 'https://www.linkedin.com/in/leandrobarbosa208/',
    whatsapp: 'https://wa.me/5584988498641',
  },
  about: {
    paragraphs: [
      'Tenho como princípio simplificar o que é complexo, desenvolvendo soluções pensadas para serem intuitivas, eficientes e sustentáveis. Cada decisão é tomada com foco em usabilidade, organização e valor porque uma boa experiência começa nos detalhes.',
      'Mais do que desenvolver sistemas, ajudo ideias a se expressarem no digital, traduzindo objetivos em soluções claras, funcionais e alinhadas à identidade de quem está por trás do projeto.',
    ],
    focusAreas: [
      'Full-Stack (Spring Boot, Angular)',
      'APIs e integrações',
      'Performance, acessibilidade',
      'Deploy e observabilidade',
    ],
  },
  education: [
    {
      title: 'Inteligência Artificial',
      institution: 'Universidade Federal do Rio Grande do Norte/UFRN',
      period: '2026 — Atual',
      details: 'Bacharelado',
    },
    {
      title: 'Tecnologia da Informação',
      institution: 'Universidade Federal do Rio Grande do Norte/UFRN',
      period: '2022 — 2025',
      details: 'Bacharelado',
    },
  ],
  experience: [
    {
      title: 'Desenvolvedor Web',
      company: 'ESIG Software',
      period: '2023 — Atual',
      details: [
        'Atuação direta no sistema SIGEDUC, plataforma de gestão escolar no RN com módulos de matrícula, diário de classe, integração com INEP e Educacenso.',
        'Realizo sustentação corretiva e evolutiva: corrijo erros críticos em produção que garantem a operação contínua de serviços escolares.',
      ],
    },
    {
      title: 'Desenvolvedor Java Web',
      company: 'Superintendência de Tecnologia da Informação - UFRN',
      period: '2024 — 2025',
      details: [
        'Desenvolvimento de sistemas web de grande porte da UFRN atuando em correções e melhorias em todas as camadas do produto, aplicando várias práticas ágeis nos fluxos de trabalho.',
      ],
    },
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Instituto Metrópole Digital - IMD/UFRN',
      period: '2023 — 2023',
      details: [
        'Atuação no desenvolvimento do Portal das Disciplinas - IMD, contribuindo com a melhoria do design, implementação de novas funcionalidades e documentação do código.',
      ],
    },
  ],
  technologies: {
    primary: ['Spring Boot', 'Angular', 'Java', 'HTML', 'CSS', 'PostgreSQL', 'Thymeleaf'],
    secondary: ['JSF', 'JSP', 'Flutter', 'PHP', 'Laravel', 'MySQL'],
    tools: ['Git', 'GitHub', 'GitLab', 'Postman', 'Docker', 'Linux'],
  },
  projects: [
    {
      title: 'Projeto Destaque (Dashboard / SaaS / E-commerce)',
      description:
        'Projeto completo com autenticação, painel, integração com API e foco em performance.',
      tech: ['Angular', 'TypeScript', 'API REST', 'CSS'],
      links: [
        { label: 'Repositório', href: 'https://github.com/seu-usuario/projeto' },
        { label: 'Demo', href: 'https://seu-projeto.vercel.app' },
      ],
      highlight: true,
    },
    {
      title: 'Landing Page de Alta Conversão',
      description:
        'Landing page responsiva com boas práticas de SEO, semântica e acessibilidade.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: [{ label: 'Repositório', href: 'https://github.com/seu-usuario/lp' }],
    },
  ],
};

