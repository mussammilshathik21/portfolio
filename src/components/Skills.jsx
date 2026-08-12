import { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPython } from 'react-icons/fa'
import { SiDjango, SiBootstrap, SiPostman, SiVercel, SiRender, SiMysql, SiSupabase } from 'react-icons/si'
import { BiLogoVisualStudio } from 'react-icons/bi'
import './Skills.css'

const TABS = [
  {
    id:'frontend', label:'Frontend',
    skills:[
      { icon:<FaHtml5 />,     color:'#E34F26', name:'HTML5'      },
      { icon:<FaCss3Alt />,   color:'#1572B6', name:'CSS3'       },
      { icon:<SiBootstrap />, color:'#7952B3', name:'Bootstrap'  },
      { icon:<FaJs />,        color:'#c9a800', name:'JavaScript' },
      { icon:<FaReact />,     color:'#00a8cc', name:'React'      },
    ],
  },
  {
    id:'backend', label:'Backend',
    skills:[
      { icon:<SiDjango />,  color:'#0c6b4e', name:'Django' },
      { icon:<FaPython />,  color:'#3776AB', name:'Python' },
      { icon:<SiMysql />,   color:'#00618A', name:'MySQL'  },
      { icon:<SiSupabase />,   color:'#036107', name:'SupaBase'  },
        { icon:<SiRender />,           color:'#00868C', name:'Render'   },
    ],
  },
  {
    id:'tools', label:'Tools',
    skills:[
      { icon:<BiLogoVisualStudio />, color:'#007ACC', name:'VS Code'  },
      { icon:<FaGithub />,           color:'#333',    name:'GitHub'   },
      { icon:<SiPostman />,          color:'#FF6C37', name:'Postman'  },
      { icon:<SiVercel />,           color:'#000',    name:'Vercel'   },
    
    ],
  },
]

export default function Skills() {
  const [active, setActive] = useState('frontend')
  const current = TABS.find(t => t.id === active)
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-tabs" role="tablist">
          {TABS.map(t => (
            <button key={t.id} role="tab" aria-selected={active===t.id}
              className={`tab-btn ${active===t.id?'tab-btn--active':''}`}
              onClick={() => setActive(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="skills-grid" key={active}>
          {current.skills.map((s,i) => (
            <div className="skill-item" key={s.name} style={{animationDelay:`${i*55}ms`}}>
              <span className="skill-icon" style={{color:s.color}}>{s.icon}</span>
              <span className="skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
