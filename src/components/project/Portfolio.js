import React from 'react'
import { projectData } from './Project.js'

const portfolio = () => {
  return (
    <div className='portfolio'>
      <h3>Portfolio</h3>
      <div className='projects'>
      {
        projectData.map(({_id, title, description, image, deploy, github}) =>(
          <project key={_id}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={github}>View Project in github</a>
            {deploy ? <a href={deploy}>View Deployed App</a> : ""}
         {
      } 

          </project>
      ))
      }
      </div>
    </div>
  );
};

export default portfolio