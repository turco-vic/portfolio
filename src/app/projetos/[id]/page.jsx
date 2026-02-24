import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data'
import styles from './projeto.module.css'

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }))
}

export function generateMetadata({ params }) {
  const p = projects.find((p) => p.id === Number(params.id))
  return { title: p ? `${p.title} — Enzo Turcovic` : 'Projeto' }
}

export default function ProjetoDetalhe({ params }) {
  const p = projects.find((p) => p.id === Number(params.id))
  if (!p) notFound()

  return (
    <main className="page-wrapper fade-in">
      <div className={styles.wrapper}>
        <Link href="/projetos" className={styles.back}>
          ← voltar para projetos
        </Link>

        <div className={styles.badges}>
          <span className={`${styles.badge} ${p.status === 'done' ? styles.badgeDone : styles.badgeDev}`}>
            {p.status === 'done' ? '✅ finalizado' : '🔧 em desenvolvimento'}
          </span>
          {p.hasDb && (
            <span className={`${styles.badge} ${styles.badgeDb}`}>🗄 usa banco de dados</span>
          )}
        </div>

        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.desc}>{p.longDesc}</p>

        {p.hasDb && (
          <div className={styles.dbWarning}>
            <span>⚠️</span>
            <span>
              Este projeto utiliza banco de dados. A demo pode ter funcionalidades limitadas pois
              o banco não está hospedado permanentemente. Para rodar localmente, veja as instruções
              no README do repositório.
            </span>
          </div>
        )}

        <div className={styles.section}>
          <h4 className={styles.sectionLabel}>// stack utilizada</h4>
          <div className="skills-grid">
            {p.stack.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionLabel}>// links</h4>
          <div className={styles.links}>
            {p.github && p.github !== '#' && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                ⌥ Ver código
              </a>
            )}
            {p.demo && p.demo !== '#' && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                ↗ Abrir demo
              </a>
            )}
            {(!p.demo || p.demo === '#') && (
              <span className={styles.noDemo}>— demo não disponível</span>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
