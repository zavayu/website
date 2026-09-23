const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/zavayu' },
  { label: 'Resume', href: '/resume.pdf' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/zvegayu' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-signoff"><span aria-hidden="true">$</span> made by Zavier Vega-Yu <span className="footer-prompt" aria-hidden="true">_</span></p>
      <nav className="profile-links" aria-label="Profile links">
        {profileLinks.map(({ label, href }) => <a className="command-link" href={href} key={label}>[{label}]</a>)}
      </nav>
    </footer>
  )
}
