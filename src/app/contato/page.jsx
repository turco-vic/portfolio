'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Linkedin, Github, Phone, ArrowRight, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import styles from './contato.module.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqedwprv'

export default function Contato() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        e.target.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const links = [
    {
      href: 'mailto:enzoturcovic@gmail.com',
      icon: <Mail size={18} />,
      label: 'email',
      val: 'enzoturcovic@gmail.com',
      color: 'rgba(41,121,255,0.12)',
      textColor: 'var(--accent-bright)',
    },
    {
      href: 'https://www.linkedin.com/in/enzoturcovic/',
      icon: <Linkedin size={18} />,
      label: 'linkedin',
      val: 'linkedin.com/in/enzoturcovic',
      color: 'rgba(0,176,255,0.1)',
      textColor: 'var(--accent2)',
      external: true,
    },
    {
      href: 'https://github.com/turco-vic',
      icon: <Github size={18} />,
      label: 'github',
      val: 'github.com/turco-vic',
      color: 'rgba(130,177,255,0.1)',
      textColor: 'var(--accent3)',
      external: true,
    },
    {
      href: 'https://wa.me/5519981853201',
      icon: <Phone size={18} />,
      label: 'whatsapp',
      val: '+55 (19) 98185-3201',
      color: 'rgba(41,121,255,0.1)',
      textColor: 'var(--accent-bright)',
      external: true,
    },
  ]

  const btnLabel = {
    idle:    'enviar mensagem',
    sending: 'enviando...',
    sent:    'mensagem enviada',
    error:   'erro ao enviar — tente novamente',
  }

  const btnClass = [
    styles.formBtn,
    status === 'sent'    ? styles.formBtnSent    : '',
    status === 'error'   ? styles.formBtnError   : '',
    status === 'sending' ? styles.formBtnSending : '',
  ].filter(Boolean).join(' ')

  return (
    <main className="page-wrapper fade-in">
      <div className={styles.profileSection}>
        <div className={styles.profileImageWrap}>
          <Image
            src="/images/profile.jpeg"
            alt="Enzo Turcovic"
            width={140}
            height={140}
            className={styles.profileImage}
            priority
          />
          <div className={styles.profileGlow} />
        </div>
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
                <div className={styles.linkIcon} style={{ background: color, color: textColor }}>
                  {icon}
                </div>
                <div className={styles.linkText}>
                  <div className={styles.linkLabel}>{label}</div>
                  <div className={styles.linkVal}>{val}</div>
                </div>
                <span className={styles.linkArrow}><ArrowRight size={14} /></span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.form}>
          <div className={styles.formTitle}>Enviar mensagem</div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>nome</label>
              <input
                name="nome"
                className={styles.formInput}
                type="text"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>email</label>
              <input
                name="email"
                className={styles.formInput}
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>mensagem</label>
              <textarea
                name="mensagem"
                className={styles.formTextarea}
                placeholder="Olá, gostaria de..."
                required
              />
            </div>
            <button
              type="submit"
              className={btnClass}
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'idle' && <Send size={14} />}
              {status === 'sending' && <Loader2 size={14} className={styles.spinning} />}
              {status === 'sent' && <CheckCircle size={14} />}
              {status === 'error' && <AlertCircle size={14} />}
              {' '}{btnLabel[status]}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}