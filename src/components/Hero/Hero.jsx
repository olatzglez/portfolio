import { IconGitHub, IconLinkedIn, IconBehance, IconEmail } from '../Icons'
import styles from './Hero.module.css'

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/olatzglez',
    label: 'GitHub de Olatz González (se abre en nueva pestaña)',
    icon: <IconGitHub />,
    text: 'GitHub',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/olatzglez/',
    label: 'LinkedIn de Olatz González (se abre en nueva pestaña)',
    icon: <IconLinkedIn />,
    text: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://www.behance.net/olatzglez',
    label: 'Behance de Olatz González (se abre en nueva pestaña)',
    icon: <IconBehance />,
    text: 'Behance',
    external: true,
  },
  {
    href: 'mailto:tu@email.com', // TODO: reemplaza con tu email real
    label: 'Enviar email a Olatz González',
    icon: <IconEmail />,
    text: 'Email',
    external: false,
  },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className={styles.hero}
      aria-label="Presentación de Olatz González"
    >
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.greeting} aria-hidden="true">
          Hola, soy
        </p>

        <h1 className={styles.name}>Olatz González</h1>

        <p className={styles.title}>
          <span className={styles.titleAccent}>UX/UI &amp; Frontend</span>
          <span className={styles.titleDot} aria-hidden="true"> · </span>
          Junior Full Stack Developer
        </p>

        <p className={styles.tagline}>
          Diseño interfaces accesibles que también funcionan bien por dentro.
          <br className={styles.taglineBr} />
          Resido en Bilbao, disponible para nuevos proyectos.
        </p>

        <nav aria-label="Redes sociales y contacto">
          <ul className={styles.socialList} role="list">
            {SOCIAL_LINKS.map(({ href, label, icon, text, external }) => (
              <li key={href}>
                <a
                  href={href}
                  className={styles.socialLink}
                  aria-label={label}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {icon}
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#proyectos" className={styles.cta}>
          Ver proyectos
        </a>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollDot} />
      </div>
    </section>
  )
}
