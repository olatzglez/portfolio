import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import styles from './App.module.css'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved) return saved === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function App() {
  const [darkMode, setDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode((d) => !d)} />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <footer className={styles.footer} role="contentinfo">
        <p>Diseñado y desarrollado por Olatz González · {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
