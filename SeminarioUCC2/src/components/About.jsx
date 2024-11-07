import React from 'react';
import { ArrowRight } from 'lucide-react';
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
                <h1>Información</h1>
                <div className="text-container">
                    <div className="section-title">
                        <ArrowRight className="w-5 h-5 text-gray-700" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            Primer Seminario Nacional
                        </h2>
                    </div>
                    <p className="text mb-6">
                        El Primer Seminario Nacional de la Universidad Cooperativa de Colombia es un evento académico 
                        pionero que marca un hito en el sector del software.
                    </p>

                    <div className="section-title">
                        <ArrowRight className="w-5 h-5 text-gray-700" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            Objetivo Principal
                        </h2>
                    </div>
                    <p className="text mb-6">
                        Buscamos crear un espacio de convergencia entre expertos, estudiantes y profesionales 
                        para impulsar la innovación y el desarrollo tecnológico del país.
                    </p>

                    <div className="section-title">
                        <ArrowRight className="w-5 h-5 text-gray-700" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            Contenido del Evento
                        </h2>
                    </div>
                    <p className="text">
                        Presentaremos conferencias magistrales sobre las últimas tendencias en tecnología y software, 
                        enfocándonos en la transformación digital y su impacto en el crecimiento empresarial.
                    </p>
                </div>
                <div className="skills">
                    <span className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-full">
                        Inteligencia Artificial
                    </span>
                    <span className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-full">
                        Modernidad
                    </span>
                    <span className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-full">
                        Actualidad
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;