import React from 'react'
import { projectData } from './Project.js'

const portfolio = () => {
  return (
    <div className='portfolio'>
      <h3 className='mainTitle'>Portfolio</h3>
      <div className='projects'>
      {
        projectData.map(({_id, title, description, image, deploy, github}) =>(
          <div key={_id}>
            <div className='projectCard'>
              <h3 className='projectTitle'>{title}</h3>
              <div className='projectContent'>
                <img src={image} alt={title} className='projectsDeployed'/>
                <div className='projectDetails'>
                  <p>{description}</p>
                  <a href={github}>View Project in github</a>
                  {deploy ? <a href={deploy}>View Deployed App</a> : ""}
                </div>
              </div>
            </div>
          </div>
      ))
      }
      </div>
    </div>
  );
};

export default portfolio