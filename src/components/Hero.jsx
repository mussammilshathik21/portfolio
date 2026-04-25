import React from "react"
import sha from "../assets/shathik1.jpg"
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import resume from "../assets/MussammilShathik.pdf"
import "./Hero.css"


function Hero(){
    return(
        <section id="home">
        <div className="hero">
            <div className="hero-img">
            <img src={sha} alt="Mussammil Shathik"/>
            </div>
            <div className="hero-name">
                 <h1>Hi, I'm <span>Mussammil Shathik</span></h1>
                <h3> - Full Stack Developer</h3>
                <p>Motivated Full Stack Developer with hands-on experience in React, Django, HTML, CSS, and JavaScript. 
        I focus on building scalable, responsive, and user-friendly web applications. </p><br />
                <div className="icon">
                    <a href="#"><FaLinkedin color="#1889a8" /></a>
                    <a href="#"><FaGithub color="#181717" /></a>
                    <a href="#"><IoIosMail color="red" /></a>
                    <a href="#"><FaInstagram color="rgb(241, 44, 136)" /></a>
                    
                </div>
                <a href={resume} download className="resume-btn">
                    Download Resume
                    </a>
    
            </div>
        </div>
        </section>
    
    )
}

export default Hero;