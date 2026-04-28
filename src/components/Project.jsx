import React from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";
import pro1 from "../assets/Project1.jpg";
import billingweb from "../assets/billingweb.png"

function Project() {
  return (
    <section id="project">
    <div className="project">
      <div className="head-pro"><h3>Project</h3></div>

      <div className="project-container">
        <ProjectCard
          image={pro1}
          title="Fashion Ecommerce Website"
          description="Ecommerce web application using react.js"
          live="https://react-ecommerce-frontend-only.vercel.app/"
          github="https://github.com/mussammilshathik21/react-ecommerce-frontend-only"
        />
         <ProjectCard 
          image={billingweb}
          title="Billing website"
          description="billing web application using react"
          live="https://billing-website-shathik.vercel.app/"
          github="https://github.com/mussammilshathik21/billing-website"
        />

        
      </div>
    </div>
    </section>
  );
}

export default Project;