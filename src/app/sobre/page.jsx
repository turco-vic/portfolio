import { stack, recommendations } from '@/data'
import styles from './sobre.module.css'

export const metadata = { title: 'Sobre — Enzo Turcovic' }

export default function Sobre() {
  return (
    <main className="page-wrapper fade-in">
      <div className="page-header">
        <div className="page-label">// 01 . sobre</div>
        <h1 className="page-title">Quem sou eu</h1>
      </div>

      <div className={styles.grid}>

        <div className="card">
          <div className="card-label">// bio</div>
          <h3 className={styles.bioTitle}>Olá, mundo 👋</h3>
          <p className={styles.bioText}>
            Sou o Enzo, desenvolvedor Fullstack de Campinas/SP. Comecei no SENAI Valinhos com o
            Técnico em Desenvolvimento de Software e hoje curso Tecnologia em Análise e
            Desenvolvimento de Sistemas no SENAI Roberto Mange.
          </p>
          <p className={styles.bioText}>
            Gosto de construir produtos completos — de APIs e bancos de dados até interfaces que
            fazem sentido pra quem usa. Curioso por natureza, costumo ir além do que é pedido:
            questiono, proponho soluções e enxergo possibilidades onde outros ainda estão
            entendendo o problema.
          </p>
          <p className={styles.bioText}>
            Hoje desenvolvo sistemas ao lado do professor que me ensinou, o que diz muito sobre
            como levo a colaboração a sério.
          </p>
        </div>

        <div className="card">
          <div className="card-label">// formação</div>
          <div>
            <div className="timeline-item">
              <div className="timeline-year">fev 2026 – fev 2028</div>
              <div className="timeline-title">CST · Análise e Desenvolvimento de Software</div>
              <div className="timeline-desc">SENAI Campinas — Roberto Mange</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">jan 2024 – dez 2025</div>
              <div className="timeline-title">Curso Técnico Integrado · Desenvolvimento de Software</div>
              <div className="timeline-desc">Escola SENAI Valinhos | SENAI São Paulo</div>
            </div>
          </div>
        </div>

        <div className={`card ${styles.fullWidth}`}>
          <div className="card-label">// stack & ferramentas</div>

          <div className={styles.stackSection}>
            <div className={styles.stackLabel}>🌐 Front-end</div>
            <div className="skills-grid">
              {stack.frontend.map(s => (
                <span key={s} className="skill-tag frontend">{s}</span>
              ))}
            </div>
          </div>

          <div className={styles.stackSection}>
            <div className={styles.stackLabel}>⚙ Back-end & Banco</div>
            <div className="skills-grid">
              {stack.backend.map(s => (
                <span key={s} className={`skill-tag ${s.includes('SQL') || s === 'MySQL' ? 'db' : 'backend'}`}>{s}</span>
              ))}
            </div>
          </div>

          <div className={styles.stackSection}>
            <div className={styles.stackLabel}>🔧 Ferramentas</div>
            <div className="skills-grid">
              {stack.tools.map(s => (
                <span key={s} className="skill-tag devops">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={`card ${styles.fullWidth}`}>
          <div className="card-label">// em números</div>
          <div className={styles.numbersGrid}>
            {[
              { val: '2+',  label: 'anos desenvolvendo',    color: 'var(--accent-bright)' },
              { val: '9+',  label: 'tecnologias dominadas', color: 'var(--accent2)' },
              { val: '2',   label: 'formações SENAI',       color: 'var(--accent3)' },
              { val: '∞',   label: 'vontade de aprender',   color: 'var(--warning)' },
            ].map(({ val, label, color }) => (
              <div key={label}>
                <div className={styles.numVal} style={{ color }}>{val}</div>
                <div className={styles.numLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
