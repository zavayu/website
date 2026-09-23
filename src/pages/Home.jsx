import { Link } from 'react-router-dom'
import Shell from '../components/Shell'

const homeLinks = [
  { label: 'GitHub', icon: 'GH', href: 'https://github.com/zavayu' },
  { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/in/zvegayu' },
  { label: 'Resume', icon: 'CV', href: '/resume.pdf' },
  { label: 'Email', icon: '@', href: 'mailto:vegayuz@gmail.com' },
]

export default function Home() {
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
        <p className="next-command"><span aria-hidden="true">↳</span> explore <Link to="/projects">./projects</Link></p>
      </section>
    </Shell>
  )
}
