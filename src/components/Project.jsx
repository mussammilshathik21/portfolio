import ProjectCard from './ProjectCard'
import pro1        from '../assets/Project1.jpg'
import billingweb  from '../assets/billingweb.png'
import tracker from '../assets/tracker.png'
import artgallery from '../assets/artgallery.png'
import './Project.css'

const PROJECTS = [
   {
    image:       pro1,
    title:       'Fashion Ecommerce Website',
    description: 'This is a full-featured React e-commerce storefront for browsing, favoriting, and purchasing fashion, complete with cart/checkout, order tracking, and user accounts. It also includes a dedicated admin dashboard for managing products, banners, orders, and sales reports — all running on local storage for now, with Supabase and Razorpay ready to plug in.',
    live:        'https://fashion-e-commerce-jet.vercel.app/',
    github:      'https://github.com/mussammilshathik21/fashion-e-commerce',
    tags:        ['Html','css','React Js', 'Vercel','Django'],
  },
  {
    image:       artgallery,
    title:       'Arts Gallery',
    description: 'Arts Gallery is a full-featured React e-commerce storefront for browsing, favoriting, and purchasing original artwork, complete with cart/checkout, order tracking, and user accounts. It also includes a dedicated admin dashboard for managing products, orders, users, and site content — all in a warm teal, gold, black, and white theme.',
    live:        'https://art-gallery-bay-nine.vercel.app/',
    github:      'https://github.com/mussammilshathik21/art-gallery',
    tags:        ['Html','css','React Js', 'Vercel','Supabase'],
  },
 
  {
    image:       billingweb,
    title:       'Billing Web Application',
    description: 'A billing app built with React — handles invoice generation, product management, and clean printable bill layouts, with support for itemized pricing, tax calculations, and instant PDF/print export. Its designed for quick day-to-day billing at small shops or freelance businesses, with a simple dashboard to track past invoices and manage your product catalog in one place.',
    live:        'https://billing-web-shathik.vercel.app/',
    github:      'https://github.com/mussammilshathik21/billing-website',
    tags:        ['React', 'Vercel'],
  },
   {
    image:       tracker,
    title:       'Habit-Tracker Web Application',
    description: 'A habit-tracking app built with React that helps users build consistent daily habits, track progress and streaks, and improve their productivity and routines. It includes visual streak calendars, daily check-ins, and progress stats to keep users motivated and accountable over time.',
    live:        'https://habit-tracker-gules-seven.vercel.app/',
    github:      'https://github.com/mussammilshathik21/Habit-Tracker',
    tags:        ['React', 'Vercel , SupaBase'],
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
