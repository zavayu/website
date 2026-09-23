import { patchNotes } from '../data/patchNotes'

export default function PatchNotesList({ limit, variant = 'archive' }) {
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
