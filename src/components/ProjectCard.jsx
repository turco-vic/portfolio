import Link from 'next/link'
import {
    Calendar, CheckCircle, Wallet, Monitor, Ticket, BarChart3,
    CircleCheck, Wrench, Database,
} from 'lucide-react'
import styles from '../styles/ProjectCard.module.css'

const iconMap = {
    Calendar,
    CheckCircle,
    Wallet,
    Monitor,
    Ticket,
    BarChart3,
}

export default function ProjectCard({ project }) {
    const { id, title, desc, icon, color, status, hasDb, stack } = project
    const IconComponent = iconMap[icon]

    return (
        <Link href={`/projetos/${id}`} className={styles.card}>
            <div className={styles.thumb} style={{ background: `${color}18` }}>
                <div
                    className={styles.thumbPattern}
                    style={{
                        background: `radial-gradient(circle at 70% 50%, ${color}20 0%, transparent 60%)`,
                    }}
                />
                <span className={styles.thumbIcon}>
                    {IconComponent ? <IconComponent size={40} color={color} /> : null}
                </span>
                <span
                    className={`${styles.badge} ${status === 'done' ? styles.badgeDone : styles.badgeDev
                        }`}
                >
                    {status === 'done' ? (
                        <><CircleCheck size={12} /> finalizado</>
                    ) : (
                        <><Wrench size={12} /> em dev</>
                    )}
                </span>
                {hasDb && (
                    <span
                        className={`${styles.badge} ${styles.badgeDb}`}
                        style={{ top: '44px' }}
                    >
                        <Database size={12} /> banco
                    </span>
                )}
            </div>

            <div className={styles.info}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
                <div className={styles.tags}>
                    {stack.slice(0, 4).map((s) => (
                        <span key={s} className={styles.tag}>
                            {s}
                        </span>
                    ))}
                    {stack.length > 4 && (
                        <span className={styles.tag}>+{stack.length - 4}</span>
                    )}
                </div>
            </div>
        </Link>
    )
}
