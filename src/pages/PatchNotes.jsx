import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PatchNotesList from '../components/PatchNotesList'
import Shell from '../components/Shell'

export default function PatchNotes() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Shell page="patch-notes">
      <header className="page-intro">
        <p className="terminal-label">archive / 04</p>
        <p className="terminal-command" aria-hidden="true">$ cat ./patch_notes.md</p>
        <h1 className="page-title">patch notes</h1>
        <p className="intro-copy">A small archive of my personal updates.</p>
      </header>
      <section className="patch-notes patch-notes--archive" aria-label="All patch notes">
        <PatchNotesList />
      </section>
      <Link className="patch-notes-link patch-notes-link--back" to="/about">← back to ./about</Link>
    </Shell>
  )
}
