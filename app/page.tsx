"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBriefcase,
  FaCodeBranch,
  FaFigma,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const navItems = ["Sobre", "Projetos", "Skills", "Contato"];

const githubProfile = {
  name: "Ismael Strey Pereira",
  username: "ismaelstrey",
  company: "Strey Desenvolvimento Web",
  location: "Igrejinha, RS",
  avatar: "https://avatars.githubusercontent.com/u/5366350?v=4",
  url: "https://github.com/ismaelstrey",
  blog: "http://www.strey.com.br",
  bio: "Formado em Tecnologia da Informação em 2013, estudo programação nos tempos livres e atuo também no setor de Telecom.",
};

const stats = [
  { value: "156", label: "repositórios públicos" },
  { value: "52", label: "projetos em TypeScript" },
  { value: "98", label: "score alvo no Lighthouse" },
];

const projects = [
  {
    title: "ticketbr",
    type: "Sistema web",
    description:
      "Projeto TypeScript mais recente do perfil, com deploy público e evolução ativa em maio de 2026.",
    color: "project-card--pink",
    stack: ["TypeScript", "JavaScript", "Vercel"],
    repo: "https://github.com/ismaelstrey/ticketbr",
    demo: "https://ticketbr.vercel.app",
    updated: "11 mai 2026",
  },
  {
    title: "parks",
    type: "Experiência interativa",
    description:
      "Aplicação TypeScript com CSS e JavaScript, publicada na Vercel, com foco em experiência visual rápida.",
    color: "project-card--cyan",
    stack: ["TypeScript", "CSS", "JavaScript"],
    repo: "https://github.com/ismaelstrey/parks",
    demo: "https://parks-three.vercel.app",
    updated: "15 abr 2026",
  },
  {
    title: "viga-concreto-calc",
    type: "Calculadora técnica",
    description:
      "Ferramenta web para cálculo de viga de concreto, conectando desenvolvimento front-end com utilidade prática.",
    color: "project-card--lime",
    stack: ["TypeScript", "CSS", "HTML"],
    repo: "https://github.com/ismaelstrey/viga-concreto-calc",
    demo: "https://viga-concreto-calc.vercel.app",
    updated: "13 mar 2026",
  },
  {
    title: "speedsul_provedor",
    type: "Telecom",
    description:
      "Projeto ligado ao universo de provedor/telecom, área presente na trajetória profissional do Ismael.",
    color: "project-card--violet",
    stack: ["TypeScript", "CSS", "JavaScript"],
    repo: "https://github.com/ismaelstrey/speedsul_provedor",
    demo: "https://speedsul-provedor.vercel.app",
    updated: "04 fev 2026",
  },
  {
    title: "Finance-Control",
    type: "Produto financeiro",
    description:
      "Sistema de controle financeiro moderno e intuitivo, publicado com interface web e stack TypeScript.",
    color: "project-card--orange",
    stack: ["TypeScript", "CSS", "JavaScript"],
    repo: "https://github.com/ismaelstrey/Finance-Control",
    demo: "https://finance-control-iota-one.vercel.app",
    updated: "23 set 2025",
  },
  {
    title: "controle-contabil",
    type: "Gestão contábil",
    description:
      "Aplicação TypeScript com Dockerfile no repositório, mostrando interesse por produtos de gestão e operação.",
    color: "project-card--blue",
    stack: ["TypeScript", "Dockerfile", "CSS"],
    repo: "https://github.com/ismaelstrey/controle-contabil",
    demo: "https://controle-contabil.vercel.app",
    updated: "26 nov 2025",
  },
];

const skills = [
  { icon: SiNextdotjs, title: "Next.js moderno", text: "App Router, server/client components e deploy limpo." },
  { icon: FaReact, title: "React interativo", text: "Estados, animações e componentes fáceis de evoluir." },
  { icon: SiTypescript, title: "TypeScript", text: "Código mais previsível, tipado e pronto para crescer." },
  { icon: FaFigma, title: "UI jovem", text: "Cores vivas, ritmo visual e interfaces memoráveis." },
  { icon: FaNodeJs, title: "APIs & automações", text: "Integrações, backends leves e fluxos inteligentes." },
  { icon: SiVercel, title: "Performance", text: "Carregamento rápido, SEO e experiência mobile forte." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient-grid" />
      <div className="grain" />

      <motion.header
        className="topbar"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span>ST</span>REY
        </a>

        <nav aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="icon-button" href={githubProfile.url} aria-label="GitHub">
          <FaGithub />
        </a>
      </motion.header>

      <section id="inicio" className="hero-section">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            GitHub: @{githubProfile.username} / TypeScript builder
          </motion.p>
          <motion.h1 variants={fadeUp}>
            {githubProfile.name}, criando sistemas web com energia e propósito.
          </motion.h1>
          <motion.p className="hero-text" variants={fadeUp}>
            {githubProfile.bio} Este portfólio agora nasce dos seus próprios
            projetos públicos: TypeScript, produtos web, ferramentas técnicas e
            soluções conectadas ao mundo de telecom e gestão.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="primary-button" href={githubProfile.url}>
              Ver GitHub <FaArrowRight />
            </a>
            <a className="ghost-button" href="#contato">
              Chamar para projeto
            </a>
          </motion.div>

          <motion.div className="stats-strip" variants={fadeUp}>
            {stats.map((item) => (
              <span key={item.label}>
                <strong>{item.value}</strong>
                {item.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <Image
            src="/hero-strey.png"
            alt="Ilustração vibrante de um criador digital em um estúdio futurista"
            width={1024}
            height={1024}
            priority
            className="hero-image"
          />
          <motion.div
            className="floating-badge floating-badge--top"
            animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiNextdotjs /> Next 16
          </motion.div>
          <motion.div
            className="floating-badge floating-badge--bottom"
            animate={{ y: [0, 14, 0], rotate: [2, -2, 2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaReact /> React 19
          </motion.div>
          <motion.div
            className="github-profile-card"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={githubProfile.avatar}
              alt={`Avatar de ${githubProfile.name} no GitHub`}
              width={72}
              height={72}
            />
            <div>
              <strong>@{githubProfile.username}</strong>
              <span><FaCodeBranch /> 156 repositórios públicos</span>
              <span><FaLocationDot /> {githubProfile.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        id="sobre"
        className="section-band about-band"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">Sobre mim</p>
        <h2>Um perfil real: código, telecom e curiosidade constante.</h2>
        <p>
          O GitHub mostra uma trajetória prática: muitos experimentos, projetos
          em TypeScript, aplicações para gestão, telecom, finanças e ferramentas
          técnicas. A nova identidade do site usa essa base para apresentar
          você como alguém que constrói, testa e publica.
        </p>
        <div className="profile-facts">
          <span><FaBriefcase /> {githubProfile.company}</span>
          <span><FaLocationDot /> {githubProfile.location}</span>
          <span><FaGithub /> github.com/{githubProfile.username}</span>
        </div>
      </motion.section>

      <section id="projetos" className="section-band">
        <div className="section-heading">
          <p className="section-kicker">Projetos</p>
          <h2>Destaques puxados do seu GitHub.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${project.color}`}
              key={project.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -10, rotate: index === 1 ? -1 : 1 }}
            >
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>Atualizado em {project.updated}</small>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.repo} aria-label={`Abrir repositório ${project.title}`}>
                  <FaGithub /> Código
                </a>
                <a href={project.demo} aria-label={`Abrir demo ${project.title}`}>
                  <FaArrowUpRightFromSquare /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-band">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>Stack atual, linguagem visual nova.</h2>
        </div>

        <div className="skill-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                className="skill-card"
                key={skill.title}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
              >
                <Icon />
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="ticker" aria-label="Tecnologias e foco">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {[
            "Next.js",
            "Motion",
            "React Icons",
            "TypeScript",
            "GitHub",
            "Telecom",
            "UX/UI",
            "Performance",
            "Gradientes",
            "Mobile-first",
            "Next.js",
            "Motion",
            "React Icons",
            "TypeScript",
            "GitHub",
            "Telecom",
            "UX/UI",
            "Performance",
            "Gradientes",
            "Mobile-first",
          ].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </motion.div>
      </section>

      <motion.section
        id="contato"
        className="contact-band"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">Contato</p>
        <h2>Bora criar algo que pareça impossível ignorar?</h2>
        <p>
          Disponível para freelas, landing pages, interfaces de produto e
          reformulações completas de marca digital. Também dá para acompanhar
          seus projetos reais diretamente pelo GitHub.
        </p>
        <div className="contact-actions">
          <a className="primary-button" href={githubProfile.url}>
            GitHub @{githubProfile.username} <FaArrowRight />
          </a>
          <a className="social-button" href="https://linkedin.com/" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a className="social-button" href="https://wa.me/" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </motion.section>
    </main>
  );
}
