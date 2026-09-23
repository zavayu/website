import ProjectCard from '../components/ProjectCard'
import Shell from '../components/Shell'
import { projects } from '../data/projects'

export default function Projects() {
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
