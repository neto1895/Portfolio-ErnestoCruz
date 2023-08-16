import React from 'react'
import pdf from '../../assets/ErnestoCruzRosales.pdf'

const Resume = () => {
  return (
    <div className='container-resume'>
        <div className='title'>
            <h2>My programming skills:</h2>
            <button>
                <a href={pdf} download="ErnestoCruzRosales.pdf">
                    Download my CV
                </a>
            </button>
        </div>
        <div className='resume'>
            <div className='resume-item'>
                <div className='front-end'>
                <h3>Front-end</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>Handlebars</li>
                </ul>
                </div>
                <div className='back-end'>
                <h3>Back-end</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Sequelize</li>
                    <li>GraphQL</li>
                </ul>
                </div>
                <div className='tools'>
                <h3>Other tools</h3>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>GitLab</li>
                    <li>Heroku</li>
                    <li>Insomnia</li>
                    <li>Postman</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume