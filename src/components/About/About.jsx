import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre-mi" className={`section ${styles.section}`} aria-labelledby="about-title">
      <div className="section-inner">
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className="section-label">Sobre mí</span>
            <h2 className="section-title" id="about-title">
              Diseñadora que<br />también desarrolla
            </h2>

            <div className={styles.text}>
              <p>
                Soy Olatz González, diseñadora UX/UI y desarrolladora Frontend con perfil Junior
                Full Stack. Me formé en The Bridge (Bilbao), donde aprendí a llevar un producto
                desde la investigación de usuario hasta el servidor.
              </p>
              <p>
                Mi especialidad es la <strong>accesibilidad web</strong>: construyo interfaces que
                cumplen WCAG 2.1 AA no porque lo exija el cliente, sino porque creo que la web
                tiene que funcionar para todo el mundo. Eso incluye semántica HTML cuidada,
                contraste correcto, navegación por teclado y lector de pantalla.
              </p>
              <p>
                Trabajo bien en el espacio entre diseño y código: me siento cómoda en Figma y en
                la terminal, y disfruto del momento en que un prototipo se convierte en algo real.
                Basada en Bilbao, disponible para proyectos presenciales o en remoto.
              </p>
            </div>
          </div>

          <aside className={styles.highlights} aria-label="Datos destacados">
            <dl className={styles.statsList}>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Especialidad</dt>
                <dd className={styles.statValue}>Accesibilidad WCAG 2.1 AA</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Formación</dt>
                <dd className={styles.statValue}>Bootcamp Full Stack · The Bridge</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Ubicación</dt>
                <dd className={styles.statValue}>Bilbao, País Vasco</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Disponibilidad</dt>
                <dd className={styles.statValue}>Presencial · Remoto · Híbrido</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
