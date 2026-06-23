import { IconGitHub, IconDocument } from '../Icons'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const { title, team, badge, tagline, stack, code, memoria } = project

  return (
    <article className={styles.card} aria-label={`Proyecto: ${title}`}>
      <div className={styles.body}>
        <div className={styles.top}>
          <span className={styles.teamLabel}>{team}</span>
          {badge && (
            <span className={styles.badge} aria-label={`Estado: ${badge}`}>
              {badge}
            </span>
          )}
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.tagline}>{tagline}</p>

        <ul className={styles.stackList} role="list" aria-label={`Stack de ${title}`}>
          {stack.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label={`Ver proyecto ${title} en GitHub (se abre en nueva pestaña)`}
          >
            <IconGitHub size={18} />
            Ver proyecto en GitHub
          </a>

          {memoria && (
            <a
              href={memoria}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              aria-label={`Ver memoria técnica de ${title} (se abre en nueva pestaña)`}
            >
              <IconDocument />
              Memoria
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
