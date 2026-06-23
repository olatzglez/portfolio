import styles from './Skills.module.css'

const SKILL_GROUPS = [
  {
    id: 'design',
    label: 'Diseño',
    skills: [
      'Figma', 'Diseño UX/UI', 'Prototipado', 'Wireframing',
      'Investigación de usuario', 'WCAG 2.1 AA', 'Accesibilidad web',
      'Design Systems', 'Behance',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      'HTML5 semántico', 'CSS3', 'CSS Modules', 'JavaScript ES6+',
      'React 18', 'Vite', 'React Router', 'Context API', 'Responsive Design',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      'Node.js', 'Express', 'REST API', 'PostgreSQL', 'MongoDB',
      'Sequelize', 'JWT', 'Docker',
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    skills: [
      'Git', 'GitHub', 'VS Code', 'Postman', 'Trello', 'Notion',
      'Scrum / Agile',
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className={`section section-alt ${styles.section}`}
      aria-labelledby="skills-title"
    >
      <div className="section-inner">
        <header className="section-header">
          <span className="section-label">Stack</span>
          <h2 className="section-title" id="skills-title">
            Herramientas y tecnologías
          </h2>
        </header>

        <div className={styles.groups}>
          {SKILL_GROUPS.map(({ id, label, skills }) => (
            <div key={id} className={styles.group}>
              <h3 className={styles.groupTitle} id={`skills-${id}`}>
                {label}
              </h3>
              <ul
                className={styles.skillList}
                role="list"
                aria-labelledby={`skills-${id}`}
              >
                {skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
