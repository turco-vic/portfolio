'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../styles/Nav.module.css'

const links = [
  { href: '/projetos', label: 'projetos', prefix: '01.' },
  { href: '/sobre',   label: 'sobre',   prefix: '02.' },
  { href: '/contato', label: 'contato', prefix: '03.' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span>~/</span>enzo
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
      </div>
    </nav>
  )
}
