import React from 'react'
import "./pro.css"


function ProjectCard(props) {
    return (
        <div className='pro-card'>
            <img src={props.image} alt="project" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button><a href={props.live}>Live Demo</a></button>  
           <button> <a href={props.github}>GitHub</a></button>
        </div>
    )
}

export default ProjectCard;