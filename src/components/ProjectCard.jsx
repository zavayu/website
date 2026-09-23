export default function ProjectCard({ project, index }) {
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
