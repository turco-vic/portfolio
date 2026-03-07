import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft, CircleCheck, Wrench, Database, CalendarDays,
  ArrowRight, AlertTriangle, Building2, Zap, Lightbulb,
  Github, ExternalLink, Code, FileText, Globe, BookOpen,
} from 'lucide-react'
import { projects } from '@/data'
import styles from './projeto.module.css'

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const p = projects.find((p) => p.id === Number(id))
  return { title: p ? `${p.title} — Enzo Turcovic` : 'Projeto' }
}

export default async function ProjetoDetalhe({ params }) {
  const { id } = await params
  const p = projects.find((p) => p.id === Number(id))
  if (!p) notFound()

  return (
    <main className="page-wrapper fade-in">
      <div className={styles.wrapper}>
        <Link href="/projetos" className={styles.back}>
          <ArrowLeft size={14} /> voltar para projetos
        </Link>

        <div className={styles.topRow}>
          <div className={styles.badges}>
            <span className={`${styles.badge} ${p.status === 'done' ? styles.badgeDone : styles.badgeDev}`}>
              {p.status === 'done' ? <><CircleCheck size={12} /> finalizado</> : <><Wrench size={12} /> em desenvolvimento</>}
            </span>
            {p.hasDb && (
              <span className={`${styles.badge} ${styles.badgeDb}`}><Database size={12} /> usa banco de dados</span>
            )}
          </div>
          {(p.startDate || p.endDate) && (
            <div className={styles.dates}>
              <span className={styles.dateIcon}><CalendarDays size={14} /></span>
              <span>{p.startDate || '—'}</span>
              <span className={styles.dateSep}><ArrowRight size={12} /></span>
              <span>{p.endDate || 'em andamento'}</span>
            </div>
          )}
        </div>

        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.desc}>{p.longDesc}</p>

        {p.hasDb && (
          <div className={styles.dbWarning}>
            <span><AlertTriangle size={16} /></span>
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

        {p.documentation && (
          <>
            {p.documentation.requirements && (
              <div className={styles.section}>
                <h4 className={styles.sectionLabel}>// requisitos funcionais</h4>
                <ul className={styles.docList}>
                  {p.documentation.requirements.map((req, i) => (
                    <li key={i} className={styles.docItem}>
                      <span className={styles.docBullet}>▸</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {p.documentation.features && (
              <div className={styles.section}>
                <h4 className={styles.sectionLabel}>// funcionalidades</h4>
                <div className={styles.featuresGrid}>
                  {p.documentation.features.map((feat, i) => (
                    <div key={i} className={styles.featureCard}>
                      <span className={styles.featureIndex}>0{i + 1}</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {p.documentation.architecture && (
              <div className={styles.section}>
                <h4 className={styles.sectionLabel}>// arquitetura</h4>
                <div className={styles.archBox}>
                  <span className={styles.archIcon}><Building2 size={20} /></span>
                  <p>{p.documentation.architecture}</p>
                </div>
              </div>
            )}
          </>
        )}

        {p.challenges && p.challenges.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionLabel}>// desafios enfrentados</h4>
            <div className={styles.challengesList}>
              {p.challenges.map((c, i) => (
                <div key={i} className={styles.challengeItem}>
                  <span className={styles.challengeIcon}><Zap size={16} /></span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {p.learnings && p.learnings.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionLabel}>// aprendizados</h4>
            <div className={styles.learningsList}>
              {p.learnings.map((l, i) => (
                <div key={i} className={styles.learningItem}>
                  <span className={styles.learningIcon}><Lightbulb size={16} /></span>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.section}>
          <h4 className={styles.sectionLabel}>// links</h4>
          <div className={styles.linksGrid}>
            {p.links && p.links.filter((l) => l.url && l.url !== '#').length > 0 ? (
              p.links
                .filter((l) => l.url && l.url !== '#')
                .map((link, i) => {
                  const catIcons = {
                    github: Github,
                    deploy: Globe,
                    'documentação': FileText,
                    design: BookOpen,
                  }
                  const CatIcon = catIcons[link.category] || ExternalLink
                  return (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkCard}
                    >
                      <span className={styles.linkIcon}><CatIcon size={18} /></span>
                      <span className={styles.linkInfo}>
                        <span className={styles.linkCategory}>{link.category}</span>
                        <span className={styles.linkLabel}>{link.label}</span>
                      </span>
                      <ExternalLink size={14} className={styles.linkArrow} />
                    </a>
                  )
                })
            ) : (
              <span className={styles.noDemo}>— links não disponíveis ainda</span>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
