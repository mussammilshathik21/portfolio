import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiSend, FiCode, FiDownload } from 'react-icons/fi'
import resume from '../assets/resume.pdf'
import profile from "../assets/profile.jpg";
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid container">

        {/* TEXT */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge__dot" />
            Available for Work
          </div>

          <h1 className="hero-name">
            Mussammil<br />
            <span className="hero-name__accent">Shathik</span>
          </h1>

          <p className="hero-role">Full Stack Developer</p>

          <p className="hero-desc">
            Full Stack Developer with hands-on experience in React,
            Django, HTML, CSS, and JavaScript. I build scalable, responsive,
            and user-friendly web applications.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-mint"><FiSend /> Hire Me</a>
            <a href="#project" className="btn-outline"><FiCode /> View Work</a>
            <a href={resume} download className="btn-outline"><FiDownload /> Resume</a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/mussammil-shathik-033769404/"
               target="_blank" rel="noreferrer" className="social-chip">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/mussammilshathik21"
               target="_blank" rel="noreferrer" className="social-chip">
              <FaGithub /> GitHub
            </a>
            {/* <a href="https://www.instagram.com/mussammil_shathik/"
               target="_blank" rel="noreferrer" className="social-chip">
              <FaInstagram /> Instagram
            </a> */}
          </div>
        </div>

        {/* IMAGE — clean card, no animation */}
        <div className="hero-img-wrap">
          <img src={profile} alt="Mussammil Shathik" className="hero-img" />
          <div className="hero-img-deco" aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}
