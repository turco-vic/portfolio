'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data'
import styles from './projetos.module.css'

const filters = [
  { key: 'all',  label: 'todos' },
  { key: 'done', label: '✅ finalizados' },
  { key: 'dev',  label: '🔧 em dev' },
]

export default function Projetos() {
  const [query, setQuery]   = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = projects.filter((p) => {
    const matchFilter =
      filter === 'all' || p.status === filter
    const q = query.toLowerCase()
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.stack.some((s) => s.toLowerCase().includes(q))
    return matchFilter && matchSearch
  })

  return (
    <main className="page-wrapper fade-in">
      <div className="page-header">
        <div className="page-label">// 02 . projetos</div>
        <h1 className="page-title">O que construí</h1>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="buscar projeto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.filterGroup}>
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`${styles.filterBtn} ${
                filter === key
                  ? key === 'dev'
                    ? styles.activeDev
                    : styles.active
                  : ''
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🔍</div>
            Nenhum projeto encontrado
          </div>
        ) : (
          filtered.map((p) => (
            <Link key={p.id} href={`/projetos/${p.id}`} className={styles.card}>
              <div className={styles.thumb} style={{ background: `${p.color}18` }}>
                <div
                  className={styles.thumbPattern}
                  style={{
                    background: `radial-gradient(circle at 70% 50%, ${p.color}20 0%, transparent 60%)`,
                  }}
                />
                <span className={styles.thumbIcon}>{p.emoji}</span>
                <span className={`${styles.badge} ${p.status === 'done' ? styles.badgeDone : styles.badgeDev}`}>
                  {p.status === 'done' ? '✅ finalizado' : '🔧 em dev'}
                </span>
                {p.hasDb && (
                  <span className={`${styles.badge} ${styles.badgeDb}`} style={{ top: '44px' }}>
                    🗄 banco
                  </span>
                )}
              </div>

              <div className={styles.info}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className={styles.tag}>+{p.stack.length - 4}</span>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  )
}
