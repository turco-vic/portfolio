import './globals.css'
import Nav from '@/components/Nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Portfólio — Enzo Turcovic',
  description: 'Portfólio de Enzo Alves Turcovic, desenvolvedor Fullstack.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();` }} />
      </head>
      <body>
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
