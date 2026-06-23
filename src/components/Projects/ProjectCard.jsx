import { IconExternalLink, IconCode, IconDocument } from '../Icons'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const { title, team, role, badge, tagline, stack, demo, code, memoria } = project

  return (
    <article className={styles.card} aria-label={`Proyecto: ${title}`}>
      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.meta}>
            <span className={styles.teamLabel}>{team}</span>
            {role && <span className={styles.roleLabel}>{role}</span>}
          </div>
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
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label={`Ver demo de ${title} (se abre en nueva pestaña)`}
            >
              <IconExternalLink />
              Demo
            </a>
          ) : (
            <span
              className={styles.btnDisabled}
              aria-label={`Demo de ${title} no disponible aún`}
              title="Demo próximamente"
            >
              <IconExternalLink />
              Demo
            </span>
          )}

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label={`Ver código de ${title} en GitHub (se abre en nueva pestaña)`}
          >
            <IconCode />
            Código
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
