import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.hero}>
        <div className={styles.tag}>
          <span className={styles.dot}></span>
          disponível para oportunidades
        </div>

        <h1 className={styles.heading}>
          <span className={styles.name}>Enzo Turcovic</span>
          <span className={styles.role}>Software Developer.</span>
        </h1>

        <p className={styles.desc}>
          Construindo interfaces e sistemas completos — do banco de dados ao último pixel.
          Apaixonado por código limpo, produtos que fazem sentido e soluções que escalam.
        </p>

        <div className={styles.actions}>
          <Link href="/projetos" className="btn btn-primary"><Play size={14} /> ver projetos</Link>
          <Link href="/sobre"    className="btn btn-ghost">sobre</Link>
          <Link href="/contato"  className="btn btn-ghost">contato <ArrowRight size={14} /></Link>
        </div>

        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span className={`${styles.termDot} ${styles.red}`}></span>
            <span className={`${styles.termDot} ${styles.yellow}`}></span>
            <span className={`${styles.termDot} ${styles.green}`}></span>
            <span className={styles.termTitle}>bash — enzo.sh</span>
          </div>
          <div className={styles.termBody}>
            <div><span className={styles.tComment}>$ </span><span className={styles.tKey}>cat</span> <span className={styles.tStr}>enzo.json</span></div>
            <div><span className={styles.tComment}>{'{'}</span></div>
            <div>&nbsp;&nbsp;<span className={styles.tKey}>"nome"</span>: <span className={styles.tStr}>"Enzo Alves Turcovic"</span>,</div>
            <div>&nbsp;&nbsp;<span className={styles.tKey}>"role"</span>: <span className={styles.tStr}>"Fullstack Developer"</span>,</div>
            <div>&nbsp;&nbsp;<span className={styles.tKey}>"stack"</span>: <span className={styles.tStr}>["React", "Next.js", "Node.js", "PostgreSQL"]</span>,</div>
            <div>&nbsp;&nbsp;<span className={styles.tKey}>"formacao"</span>: <span className={styles.tStr}>"SENAI · ADS"</span>,</div>
            <div>&nbsp;&nbsp;<span className={styles.tKey}>"status"</span>: <span className={styles.tVal}>"open_to_work"</span></div>
            <div><span className={styles.tComment}>{'}'}</span></div>
            <div><span className={styles.tComment}>$ </span><span className={styles.cursor}></span></div>
          </div>
        </div>
      </div>
    </main>
  )
}
