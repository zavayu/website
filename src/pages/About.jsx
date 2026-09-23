import PatchNotesPreview from '../components/PatchNotesPreview'
import Shell from '../components/Shell'

export default function About() {
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
