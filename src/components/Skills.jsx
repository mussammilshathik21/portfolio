import React from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, } from "react-icons/fa";
import { SiDjango, SiBootstrap, SiPostman, } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

import "./skills.css"




function Skills() {
    return (
        <section id="skills">
        <div>
            <div className="head">
                <h3>Skills</h3></div>
            <div className="skills">
                <div className="card" >
                    <h3>Frontend :</h3>
                    <ul>
                        <li><FaHtml5  color="#E34F26"/> HTML</li>
                        <li><FaCss3Alt color="#1572B6"/> CSS</li>
                        <li><SiBootstrap color="#7952B3" />  Bootstarp</li>
                        <li><FaJs color="#F7DF1E" /> JavaScript</li>
                        <li><FaReact color="#61DAFB" /> React</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Backend :</h3>
                    <ul>
                        <li><SiDjango color="#092E20" />  Django</li>
                        <li ><FaPython  color="#33a8f7" />  Python</li>
                        <li><GrMysql />  MySql</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Tools :</h3>
                    <ul>
                        <li><BiLogoVisualStudio  color="#007ACC" />  VS Code</li>
                        <li><FaGithub color="#181717" />  GitHub</li>
                        <li><SiPostman  color="#FF6C37" />  Postman</li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Skills;