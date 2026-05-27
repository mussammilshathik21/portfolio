import ProjectCard from './ProjectCard'
import pro1        from '../assets/Project1.jpg'
import billingweb  from '../assets/billingweb.png'
import './Project.css'

const PROJECTS = [
  {
    image:       pro1,
    title:       'Fashion Ecommerce Website',
    description: 'A full-featured ecommerce web application built with React.js — product listing, cart functionality, and a clean shopping UI.',
    live:        'https://react-ecommerce-frontend-only.vercel.app/',
    github:      'https://github.com/mussammilshathik21/react-ecommerce-frontend-only',
    tags:        ['React', 'Vercel'],
  },
  {
    image:       billingweb,
    title:       'Billing Web Application',
    description: 'A billing app built with React — handles invoice generation, product management, and clean printable bill layouts.',
    live:        'https://billing-web-shathik.vercel.app/',
    github:      'https://github.com/mussammilshathik21/billing-website',
    tags:        ['React', 'Vercel'],
  },
]

export default function Project() {
  return (
    <section id="project" className="project-section">
      <div className="container">
        <div className="section-label">Work</div>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
