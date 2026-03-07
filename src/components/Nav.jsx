'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import styles from '../styles/Nav.module.css'

const links = [
  { href: '/projetos', label: 'projetos', prefix: '01.' },
  { href: '/sobre', label: 'sobre', prefix: '02.' },
  { href: '/contato', label: 'contato', prefix: '03.' },
]

export default function Nav() {
  const pathname = usePathname()
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span>~/</span>dev
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Links visíveis apenas em desktop (dentro da nav) */}
        <div className={styles.desktopLinks}>
          {links.map(({ href, label, prefix }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.btn} ${pathname === href ? styles.active : ''}`}
              data-prefix={prefix}
            >
              {label}
            </Link>
          ))}
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label="Alternar tema"
            title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>

      {/* Overlay + Drawer mobile (fora da nav para z-index correto) */}
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        {links.map(({ href, label, prefix }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.btn} ${pathname === href ? styles.active : ''}`}
            data-prefix={prefix}
          >
            {label}
          </Link>
        ))}
        <button
          className={styles.themeBtn}
          onClick={toggleTheme}
          aria-label="Alternar tema"
          title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </>
  )
}
