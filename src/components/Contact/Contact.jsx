import { IconEmail, IconLinkedIn, IconDownload } from '../Icons'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contacto" className={`section ${styles.section}`} aria-labelledby="contact-title">
      <div className="section-inner">
        <div className={styles.inner}>
          <header className={styles.header}>
            <span className="section-label">Contacto</span>
            <h2 className={`section-title ${styles.title}`} id="contact-title">
              ¿Hablamos?
            </h2>
            <p className={styles.subtitle}>
              Estoy buscando mi primera oportunidad profesional. Si tienes un proyecto
              interesante o una oferta, escríbeme — respondo siempre.
            </p>
          </header>

          <div className={styles.links}>
            <a
              href="mailto:tu@email.com" // TODO: reemplaza con tu email real
              className={styles.contactLink}
              aria-label="Enviar email a Olatz González"
            >
              <span className={styles.contactIcon}>
                <IconEmail size={24} />
              </span>
              <span className={styles.contactText}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>tu@email.com</span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/olatzglez/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
              aria-label="Perfil de LinkedIn de Olatz González (se abre en nueva pestaña)"
            >
              <span className={styles.contactIcon}>
                <IconLinkedIn size={24} />
              </span>
              <span className={styles.contactText}>
                <span className={styles.contactLabel}>LinkedIn</span>
                <span className={styles.contactValue}>in/olatzglez</span>
              </span>
            </a>
          </div>

          <a
            href="/cv/olatz-gonzalez-cv.pdf" // TODO: añade tu CV en /public/cv/
            download="Olatz-Gonzalez-CV.pdf"
            className={`${styles.cvBtn}`}
            aria-label="Descargar CV de Olatz González en formato PDF"
          >
            <IconDownload />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  )
}
