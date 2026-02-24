import './globals.css'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Enzo Turcovic — Fullstack Dev',
  description: 'Portfólio de Enzo Alves Turcovic, desenvolvedor Fullstack.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
