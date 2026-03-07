'use client'

import { useState } from 'react'
import { CircleCheck, Wrench, Search, SearchX } from 'lucide-react'
import { projects } from '@/data'
import ProjectCard from '@/components/ProjectCard'
import styles from './projetos.module.css'

const filters = [
  { key: 'all', label: 'todos' },
  { key: 'done', label: 'finalizados', icon: CircleCheck },
  { key: 'dev', label: 'em dev', icon: Wrench },
]

export default function Projetos() {
  const [query, setQuery] = useState('')
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
          <span className={styles.searchIcon}><Search size={16} /></span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="buscar projeto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.filterGroup}>
          {filters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`${styles.filterBtn} ${filter === key
                  ? key === 'dev'
                    ? styles.activeDev
                    : styles.active
                  : ''
                }`}
            >
              {Icon && <Icon size={13} />} {label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}><SearchX size={32} /></div>
            Nenhum projeto encontrado
          </div>
        ) : (
          filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))
        )}
      </div>
    </main>
  )
}
