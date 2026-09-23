import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'projects', to: '/projects' },
  { label: 'about', to: '/about' },
]

export default function SiteNav() {
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
