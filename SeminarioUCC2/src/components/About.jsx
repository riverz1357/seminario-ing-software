import React from 'react';
import '../styles/About.css';
import backgroundImage from '../assets/background.png';

const About = () => {
    return (
        <div className="about-section">
            <div className="img-container">
                <img 
                    src={backgroundImage} 
                    alt="Background" 
                    className="background-image"
                />
            </div>
            <div className="inner-container">
                <h1>Informacion</h1>
                <div className="text">
                El Primer Seminario Nacional de la Universidad Cooperativa de Colombia es un evento académico enfocado en el sector del software, reuniendo a expertos, estudiantes y profesionales de la industria. Su objetivo es fomentar el intercambio de ideas y la colaboración interdisciplinaria para impulsar innovaciones que beneficien al desarrollo económico del país. Durante el evento, se presentarán conferencias magistrales sobre tendencias actuales en tecnología y software, abordando temas de relevancia para empresas del sector y profesionales interesados en la transformación digital y el impacto del software en el crecimiento empresarial.
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
