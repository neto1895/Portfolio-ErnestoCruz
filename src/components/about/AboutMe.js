import React from "react";
import avatar from "../../assets/profilepic.png";

const aboutMe = () => {
    return (
        <div className="container" id="about-me">
            <img src={avatar} alt="profilePic" className="profilePic"/>
            <h3>Hello and welcome to my portfolio! I am Ernesto Cruz Rosales</h3>
            
            <p>I am a dynamic professional with experience in web development and the chemical industry. I have a degree in Chemical Engineering and several years of experience as a production manager, where I developed my skills in leadership, process improvement, and problem-solving.
            </p>
            <p>As a web developer, I have completed a rigorous bootcamp and gained proficiency in a range of programming languages and frameworks, including HTML, CSS, JavaScript, React, and Node.js. I enjoy building intuitive and visually appealing web applications that provide a seamless user experience. My passion for technology and innovation drives me to continuously learn and apply new skills to my work.
            </p>
            <p>My experience in the chemical industry has given me a strong foundation in technical expertise and process optimization. As a production manager, I led teams to achieve high levels of productivity and quality control. I am confident in my ability to tackle complex challenges and leverage my analytical mindset to develop effective solutions.
            </p>
            <p>I am excited to connect with like-minded professionals in the web development anyone who shares my passion for innovation and growth. Please feel free to browse my portfolio and reach out to me for any questions or opportunities for collaboration. Thank you for visiting!
            </p>


        </div>
    );
};

export default aboutMe