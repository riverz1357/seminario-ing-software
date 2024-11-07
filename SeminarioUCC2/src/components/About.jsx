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
                    El Primer Seminario Nacional de la Universidad Cooperativa de Colombia es un evento académico de gran relevancia que reúne a expertos, estudiantes y profesionales de diversas áreas del conocimiento. Este seminario tiene como objetivo principal fomentar el intercambio de ideas, la colaboración interdisciplinaria y la difusión de investigaciones innovadoras que contribuyan al desarrollo social y económico del país. Durante el evento, se llevarán a cabo conferencias magistrales, talleres prácticos y mesas redondas que abordarán temas de actualidad y relevancia para la comunidad académica y profesional. La Universidad Cooperativa de Colombia se enorgullece de ser anfitriona de este importante encuentro, promoviendo así el crecimiento y la excelencia en la educación superior.
                </div>
                <div className="skills">
                    <span>Inteligencia Artificial</span>
                    <span>Modernidad</span>
                    <span>Actualidad</span>
                </div>
            </div>
        </div>
    );
};

export default About;
