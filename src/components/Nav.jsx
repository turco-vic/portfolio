'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from '../styles/Nav.module.css'

const links = [
  { href: '/projetos', label: 'projetos', prefix: '01.' },
  { href: '/sobre',   label: 'sobre',   prefix: '02.' },
  { href: '/contato', label: 'contato', prefix: '03.' },
]

export default function Nav() {
  const pathname = usePathname()
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span>~/</span>dev
      </Link>
      <div className={styles.links}>
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
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
