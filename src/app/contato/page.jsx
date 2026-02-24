'use client'

import { useState } from 'react'
import styles from './contato.module.css'

export default function Contato() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const links = [
    {
      href: 'mailto:enzoturcovic@email.com',
      icon: '✉',
      label: 'email',
      val: 'enzoturcovic@email.com',
      color: 'rgba(41,121,255,0.12)',
      textColor: 'var(--accent-bright)',
    },
    {
      href: 'https://linkedin.com/in/enzo-alves-turcovic-10b7ab201',
      icon: 'in',
      label: 'linkedin',
      val: 'linkedin.com/in/enzo-alves-turcovic',
      color: 'rgba(0,176,255,0.1)',
      textColor: 'var(--accent2)',
      external: true,
    },
    {
      href: 'https://github.com/turco-vic',
      icon: '⌥',
      label: 'github',
      val: 'github.com/turco-vic',
      color: 'rgba(130,177,255,0.1)',
      textColor: 'var(--accent3)',
      external: true,
    },
    {
      href: 'https://wa.me/5519981853201',
      icon: '✆',
      label: 'whatsapp',
      val: '+55 (19) · · · · · · · · ·',
      color: 'rgba(41,121,255,0.1)',
      textColor: 'var(--accent-bright)',
      external: true,
    },
  ]

  return (
    <main className="page-wrapper fade-in">
      <div className="page-header">
        <div className="page-label">// 03 . contato</div>
        <h1 className="page-title">Bora conversar</h1>
      </div>

      <div className={styles.layout}>
        <div>
          <h3 className={styles.subTitle}>Aberto para novas oportunidades</h3>
          <p className={styles.subDesc}>
            Seja para um projeto freelance, uma vaga fulltime ou só trocar ideia sobre
            tecnologia — pode me chamar. Respondo geralmente em até 24h.
          </p>

          <div className={styles.linksList}>
            {links.map(({ href, icon, label, val, color, textColor, external }) => (
              <a
                key={label}
                href={href}
                className={styles.contactLink}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div
                  className={styles.linkIcon}
                  style={{ background: color, color: textColor }}
                >
                  {icon}
                </div>
                <div className={styles.linkText}>
                  <div className={styles.linkLabel}>{label}</div>
                  <div className={styles.linkVal}>{val}</div>
                </div>
                <span className={styles.linkArrow}>→</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.form}>
          <div className={styles.formTitle}>Enviar mensagem</div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>nome</label>
              <input className={styles.formInput} type="text" placeholder="Seu nome" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>email</label>
              <input className={styles.formInput} type="email" placeholder="seu@email.com" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>mensagem</label>
              <textarea className={styles.formTextarea} placeholder="Olá, gostaria de..." required />
            </div>
            <button type="submit" className={`${styles.formBtn} ${sent ? styles.formBtnSent : ''}`}>
              {sent ? 'mensagem enviada ✓' : 'enviar mensagem →'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
