import React from 'react';
import '../styles/About.css';
import backgroundImage from '../assets/background.png';

const About = () => {
    return (
        <div className="about-section">
            <img 
                src={backgroundImage} 
                alt="Background" 
                className="background-image"
            />
            
            <div className="inner-container">
                <h1>Informacion</h1>
                <div className="text">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                </div>
                <div className="skills">
                    <span>Web Design</span>
                    <span>Photoshop & Illustrator</span>
                    <span>Coding</span>
                </div>
            </div>
        </div>
    );
};

export default About;
