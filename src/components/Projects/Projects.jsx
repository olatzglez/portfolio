import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="proyectos" className={`section ${styles.section}`} aria-labelledby="projects-title">
      <div className="section-inner">
        <header className={`section-header ${styles.header}`}>
          <span className="section-label">Proyectos</span>
          <h2 className="section-title" id="projects-title">
            Lo que he construido
          </h2>
          <p className={styles.subtitle}>
            Cuatro proyectos del bootcamp Full Stack de The Bridge: desde apps de accesibilidad
            hasta sistemas con geolocalización y bases de datos.
          </p>
        </header>

        <ul className={styles.grid} role="list" aria-label="Lista de proyectos">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
