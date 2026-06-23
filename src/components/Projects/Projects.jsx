import { projects } from '../../data/projects'
import { IconGitHub, IconExternalLink } from '../Icons'
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
            <li key={project.id} className={styles.gridItem}>
              <ProjectCard project={project} />
            </li>
          ))}

          {/* 5ª card — enlace al perfil de GitHub */}
          <li className={styles.githubItem}>
            <a
              href="https://github.com/olatzglez"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubCard}
              aria-label="Ver todos los proyectos de Olatz González en GitHub (se abre en nueva pestaña)"
            >
              <div className={styles.githubLeft}>
                <span className={styles.githubIcon}>
                  <IconGitHub size={32} />
                </span>
                <div className={styles.githubText}>
                  <span className={styles.githubLabel}>GitHub</span>
                  <h3 className={styles.githubTitle}>Más proyectos y experimentos</h3>
                  <p className={styles.githubSub}>
                    Prácticas, retos de código y repos en los que sigo aprendiendo.
                  </p>
                </div>
              </div>
              <span className={styles.githubCta} aria-hidden="true">
                github.com/olatzglez
                <IconExternalLink size={18} />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
