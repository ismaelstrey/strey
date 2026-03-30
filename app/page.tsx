const projects = [
  {
    title: 'Experiência Digital Premium',
    description:
      'Landing page com foco em conversão, microinterações suaves e identidade visual forte.',
    stack: ['Next.js', 'TypeScript', 'Motion'],
  },
  {
    title: 'Dashboard de Operações',
    description:
      'Painel estratégico para métricas em tempo real com UX de alta legibilidade.',
    stack: ['React', 'Node.js', 'Charts'],
  },
  {
    title: 'E-commerce de Nicho',
    description:
      'Loja moderna com checkout simplificado e performance otimizada para mobile.',
    stack: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
];

const skills = [
  'UI Design',
  'Front-end Architecture',
  'Design Systems',
  'Performance Web',
  'APIs & Integrações',
  'SEO Técnico',
];

export default function Home() {
  return (
    <main className="page">
      <div className="bg-glow bg-glow--left" />
      <div className="bg-glow bg-glow--right" />

      <header className="header">
        <p className="brand">STREY</p>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero">
        <p className="tag">Portfolio Showcase</p>
        <h1>
          Eu crio experiências digitais
          <span> impactantes e memoráveis.</span>
        </h1>
        <p>
          Desenvolvedor focado em interfaces premium, velocidade e estética. Este projeto recria
          o visual do showcase original em uma base Next.js moderna.
        </p>
        <a className="cta" href="#projetos">
          Ver projetos
        </a>
      </section>

      <section id="sobre" className="block">
        <h2>Sobre mim</h2>
        <p>
          Atuo no desenvolvimento de produtos digitais com foco em experiência de usuário,
          componentização e qualidade de código. Entrego interfaces com visual refinado e alta
          performance.
        </p>
      </section>

      <section id="projetos" className="block">
        <h2>Projetos em destaque</h2>
        <div className="grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>Especialidades</h2>
        <div className="chips">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="contato" className="block contact">
        <h2>Vamos trabalhar juntos?</h2>
        <p>Disponível para freelas, consultorias e projetos de longo prazo.</p>
        <a href="mailto:contato@strey.dev">contato@strey.dev</a>
      </section>
    </main>
  );
}
