import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { patchNotes } from './data/patchNotes'

const navLinks = [
  { label: 'projects', to: '/projects.html' },
  { label: 'about', to: '/about.html' },
]

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/zavayu' },
  { label: 'Resume', href: '/resume.pdf' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/zvegayu' },
]

const homeLinks = [
  { label: 'GitHub', icon: 'GH', href: 'https://github.com/zavayu' },
  { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/in/zvegayu' },
  { label: 'Resume', icon: 'CV', href: '/resume.pdf' },
  { label: 'Email', icon: '@', href: 'mailto:vegayuz@gmail.com' },
]

const projects = [
  { placeholder: 'research pipeline', name: 'MLLM-IPI', href: 'https://github.com/zavayu/mllm-ipi', description: 'A local research pipeline for controlled experiments on image-based prompt injection attacks against multimodal language models.', meta: 'Python · Qwen-VL · SAM · Streamlit' },
  { placeholder: 'local observability', name: 'Harness Trace', href: 'https://github.com/zavayu/harness-trace', description: 'A read-only, local-first observability tool that reconstructs Codex agent sessions, turns, inference, and tool-call relationships from JSONL traces.', meta: 'AI agents · trace analysis · developer tooling' },
  { placeholder: 'systems monitor', name: 'wtop', href: 'https://github.com/zavayu/wtop', description: 'An htop-inspired Windows terminal monitor for live CPU, memory, network, GPU, and process information.', meta: 'Rust · Windows system APIs · terminal UI' },
  { placeholder: 'real-time coordination', name: 'AIsle0', href: 'https://github.com/sarvesh-tech/tamuhack26', description: 'A real-time aircraft turnaround inspection and coordination platform built with agentic AI workflows and event-driven communication.', meta: '1st Place · American Airlines Track · TAMUhack 2026' },
  { placeholder: 'credit education', name: 'CreditMob', href: 'https://github.com/zavayu/CreditMob', description: 'An AI-powered credit education companion that builds personalized roadmaps and recommends credit cards for users’ financial goals.', meta: 'React · TypeScript · Firebase · Gemini AI' },
  { placeholder: 'product management', name: 'ProdigyPM', href: 'https://github.com/zavayu/ProdigyPM', description: 'An AI-powered product management workspace for backlog planning, sprints, collaboration, and GitHub-aware team insights.', meta: 'React · TypeScript · Node.js · MongoDB' },
  { placeholder: 'community website', name: 'tidalTAMU Club Website', href: 'https://github.com/tidal-tamu/club-website', description: 'The public website for tidalTAMU, built to share the club’s community, events, and initiatives.', meta: 'React · TypeScript · Vite · Tailwind CSS' },
  { placeholder: 'hackathon website', name: 'tidalTAMU Fall 2025', href: 'https://github.com/tidal-tamu/fall-2025', description: 'The event website for tidalTAMU’s Fall 2025 hackathon.', meta: 'TypeScript · hackathon · event website' },
]

function SiteNav() {
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="command-home" to="/" aria-label="Back to home">$ cd ~/zv</Link>
        <span className="command-caret" aria-hidden="true">█</span>
        <div className="nav-commands">
          {navLinks.map(({ label, to }) => (
            <Link className="command-link" to={to} aria-current={pathname === to ? 'page' : undefined} key={to}>./{label}</Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-signoff"><span aria-hidden="true">$</span> made by Zavier Vega-Yu <span className="footer-prompt" aria-hidden="true">_</span></p>
      <nav className="profile-links" aria-label="Profile links">
        {profileLinks.map(({ label, href }) => <a className="command-link" href={href} key={label}>[{label}]</a>)}
      </nav>
    </footer>
  )
}

function Shell({ children, page }) {
  return <main className={`page-shell page-shell--${page}`}>{children}</main>
}

function Landing() {
  return (
    <Shell page="home">
      <section className="identity-record" id="landing" aria-labelledby="landing-title">
        <p className="terminal-label">identity / 01</p>
        <p className="terminal-command" aria-hidden="true">$ whoami</p>
        <h1 className="page-title" id="landing-title">Zavier Vega-Yu</h1>
        <div className="record-copy">
          <p>Hi! I&apos;m Zavier, a senior computer science student at Texas A&amp;M University with passion for creating cool things.</p>

          <p>Currently building tools and organizing hackathons at <a href="https://www.tidaltamu.com/" rel="noreferrer" target="_blank">@tidalTAMU</a>. Previously interned at <a href="https://www.oracle.com/" rel="noreferrer" target="_blank">@Oracle</a> and <a href="https://www.hpe.com/" rel="noreferrer" target="_blank">@HPE</a>.</p>
        </div>
        <nav className="contact-strip" aria-label="Contact links">
          {homeLinks.map(({ label, icon, href }) => (
            <a className="terminal-contact" href={href} key={label} aria-label={label}>
              <span className="terminal-icon" aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <p className="next-command"><span aria-hidden="true">↳</span> explore <Link to="/projects.html">./projects</Link></p>
      </section>
    </Shell>
  )
}

function About() {
  return (
    <Shell page="about">
      <div className="about-intro-layout">
        <header className="page-intro">
          <p className="terminal-label">profile / 03</p>
          <p className="terminal-command" aria-hidden="true">$ cat ./profile.txt</p>
          <h1 className="page-title">about me</h1>
          <p className="intro-copy"><strong>Howdy!</strong> My name is Zavier. I was born and raised in the great state of Texas, and I&apos;m currently learning about computers at <a className="intro-link" href="https://www.tamu.edu/" rel="noreferrer" target="_blank">Texas A&amp;M University</a>. When I&apos;m not staring at code, you can find me doomscrolling, hiking, or playing the tuba!</p>
          <br />
          <p className="intro-copy">Feel free to <a className="intro-link" href="mailto:vegayuz@gmail.com">reach out</a> if you&apos;d like to connect!</p>
          
        </header>
        <figure className="portrait-record">
          <img src="/zavier-vega-yu.webp" alt="Zavier Vega-Yu Image" />
        </figure>
      </div>
      <PatchNotesPreview />
    </Shell>
  )
}

function PatchNotesPreview() {
  return (
    <section className="patch-notes patch-notes--preview" aria-labelledby="patch-notes-preview-title">
      <header className="patch-notes-header">
        <p className="terminal-label">patch notes / 01</p>
        <p className="terminal-command" aria-hidden="true">$ tail -n 3 ./patch_notes.md</p>
        <h2 className="section-title" id="patch-notes-preview-title">recent updates</h2>
      </header>
      <PatchNotesList limit={3} variant="preview" />
      <Link className="patch-notes-link" to="/patch-notes.html">↳ view full changelog</Link>
    </section>
  )
}

function PatchNotes() {
  return (
    <Shell page="patch-notes">
      <header className="page-intro">
        <p className="terminal-label">archive / 04</p>
        <p className="terminal-command" aria-hidden="true">$ cat ./patch_notes.md</p>
        <h1 className="page-title">patch notes</h1>
        <p className="intro-copy">A small archive of personal updates, newest first.</p>
      </header>
      <section className="patch-notes patch-notes--archive" aria-label="All patch notes">
        <PatchNotesList />
      </section>
      <Link className="patch-notes-link patch-notes-link--back" to="/about.html">← back to ./about</Link>
    </Shell>
  )
}

function PatchNotesList({ limit, variant = 'archive' }) {
  const notes = limit ? patchNotes.slice(0, limit) : patchNotes

  if (notes.length === 0) {
    return <p className={`patch-notes-empty patch-notes-empty--${variant}`}>// first update pending</p>
  }

  return (
    <ol className={`patch-notes-list patch-notes-list--${variant}`}>
      {notes.map(({ version, date, note }) => (
        <li className="patch-note" key={`${version}-${date}`}>
          <p className="patch-note-version">{version} <span>{date}</span></p>
          <p className="patch-note-copy">{note}</p>
        </li>
      ))}
    </ol>
  )
}

function AboutSection({ title, index, children }) {
  return (
    <section className="about-section" aria-labelledby={`${title}-title`}>
      <p className="terminal-label">{title} / {index}</p>
      <h2 className="section-title" id={`${title}-title`}>{title}</h2>
      {children}
    </section>
  )
}

function Projects() {
  return (
    <Shell page="projects">
      <header className="page-intro">
        <p className="terminal-label">catalogue / 02</p>
        <p className="terminal-command" aria-hidden="true">$ ls ./projects</p>
        <h1 className="page-title">projects</h1>
        <p className="intro-copy">A list of some of the cool things I've built.</p>
      </header>
      <section className="project-catalogue" aria-label="Projects">
        {projects.map((project, index) => <ProjectCard project={project} index={index + 1} key={project.name} />)}
      </section>
    </Shell>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-record">
      <p className="project-index">[{String(index).padStart(2, '0')}]</p>
      <div className="project-content">
        <p className="project-kind">{project.placeholder}</p>
        <h2 className="section-title"><a className="project-link" href={project.href}>{project.name} <span aria-hidden="true">↗</span></a></h2>
        <p className="project-description">{project.description}</p>
        <p className="project-meta">{project.meta}</p>
      </div>
    </article>
  )
}

function PageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const pages = {
      '/': ['Zavier Vega-Yu', 'Portfolio of Zavier Vega-Yu, a computer science student and software engineer.'],
      '/about.html': ['Zavier Vega-Yu', 'About Zavier Vega-Yu, a computer science student and software engineer.'],
      '/projects.html': ['Zavier Vega-Yu', 'Selected software engineering projects by Zavier Vega-Yu.'],
      '/patch-notes.html': ['Patch notes · Zavier Vega-Yu', 'Personal patch notes from Zavier Vega-Yu.'],
    }
    const [title, description] = pages[pathname] ?? pages['/']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <PageMeta />
      <SiteNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/projects.html" element={<Projects />} />
        <Route path="/patch-notes.html" element={<PatchNotes />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  )
}
