import { Link } from 'react-router-dom'
import PatchNotesList from './PatchNotesList'

export default function PatchNotesPreview() {
  return (
    <section className="patch-notes patch-notes--preview" aria-labelledby="patch-notes-preview-title">
      <header className="patch-notes-header">
        <p className="terminal-label">patch notes / 01</p>
        <p className="terminal-command" aria-hidden="true">$ tail -n 3 ./patch_notes.md</p>
        <h2 className="section-title" id="patch-notes-preview-title">recent updates</h2>
      </header>
      <PatchNotesList limit={3} variant="preview" />
      <Link className="patch-notes-link" to="/patch-notes">↳ view full changelog</Link>
    </section>
  )
}
