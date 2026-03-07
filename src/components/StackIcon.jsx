import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiExpo,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiFigma,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const iconMap = {
  'JavaScript':   SiJavascript,
  'TypeScript':   SiTypescript,
  'React':        SiReact,
  'React Native': SiReact,
  'Next.js':      SiNextdotjs,
  'HTML5':        SiHtml5,
  'CSS3':         SiCss,
  'Tailwind CSS': SiTailwindcss,
  'Expo':         SiExpo,
  'Vue.js':       SiVuedotjs,
  'Node.js':      SiNodedotjs,
  'Express.js':   SiExpress,
  'PostgreSQL':   SiPostgresql,
  'MySQL':        SiMysql,
  'Git':          SiGit,
  'GitHub':       SiGithub,
  'VS Code':      VscVscode,
  'Postman':      SiPostman,
  'Swagger':      SiSwagger,
  'Figma':        SiFigma,
}

export default function StackIcon({ name, size = 14 }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon size={size} />
}
