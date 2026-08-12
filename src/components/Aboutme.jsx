import './Aboutme.css'

const STATS = [
  { num: '3+',  label: 'Projects Built'  },
  { num: '5+',  label: 'Technologies'    },
  { num: 'Fresher', label: 'Experience'      },
  { num: '∞',   label: 'Curiosity'       },
]

export default function Aboutme() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-label">About</div>
        <h2 className="section-title">Who I Am</h2>

        <div className="about-card">
          <div className="about-text">
            <p>
            {' '}
              <strong>Full Stack Developer</strong> with hands-on experience in
              React, Django, HTML, CSS, and JavaScript. I enjoy building
              responsive and user-friendly web applications — from polished
              frontends to robust backend APIs.
            </p>
            <br />
            <p>
              Passionate about learning modern web technologies, improving
              problem-solving skills, and creating efficient digital solutions
              through clean and maintainable code.
            </p>
          </div>

          <div className="about-stats">
            {STATS.map(s => (
              <div className="stat-box" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
