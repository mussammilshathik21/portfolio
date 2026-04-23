import React from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";
import pro1 from "../assets/Project1.jpg";
import portfolio from "../assets/image.png"

function Project() {
  return (
    <section id="project">
    <div className="project">
      <div className="head-pro"><h3>Project</h3></div>

      <div className="project-container" data-aos="zoom-in" data-aos-duration="2000">
        <ProjectCard
          image={pro1}
          title="Fashion Ecommerce Website"
          description="Ecommerce web application using react.js"
          live="https://react-ecommerce-frontend-only.vercel.app/"
          github="https://github.com/mussammilshathik21/react-ecommerce-frontend-only"
        />
         <ProjectCard 
          image={portfolio}
          title="My Protfolio"
          description="about me"
          live="https://portfolio1-kappa-rust.vercel.app/"
          github="https://github.com/mussammilshathik21/portfolio1"
        />

        
      </div>
    </div>
    </section>
  );
}

export default Project;