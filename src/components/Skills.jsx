import React from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, } from "react-icons/fa";
import { SiDjango, SiBootstrap, SiPostman, } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { SiRender } from "react-icons/si";

import SkillCard from "./SkillsCard"

import "./skills.css"




function Skills() {
    return (
        <section id="skills">
            <div className="skills">
                <div className="skill-head"><h2>Skills</h2></div>
                <div className="skill-card">
                    <SkillCard
                    delay={100}
                        title="Frontend :"
                        skills={[
                            { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
                            { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },
                            { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
                            { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
                            { icon: <FaReact color="#61DAFB" />, name: "React" }
                        ]}
                    />
                    <SkillCard
                    delay={300}
                        title="Backend :"
                        skills={[
                            { icon: <SiDjango color="#092E20" />, name: "DJANGO" },
                            { icon: <FaPython  color="#33a8f7" />, name: "PYTHON" },
                            { icon: <GrMysql />, name: "MySql" },
                        ]}
                    />
                    <SkillCard
                    delay={500}
                        title="Tools :"
                        skills={[
                            { icon: <BiLogoVisualStudio  color="#007ACC" /> , name: "VS CODE" },
                            { icon: <FaGithub color="#181717" />, name: "GITHUB" },
                            { icon: <SiPostman  color="#FF6C37" />, name: "POSTMAN" },
                            { icon: <SiVercel  color="#000"/>, name:"VERCEL" },
                            { icon: <SiRender  color="#000"/>, name:"RENDER" },


                        ]}
                    />

                </div>

            </div>

        </section>
    )
}
export default Skills;