import React from 'react';
import '../styles/Footer.css';
import bannerImage2 from '../assets/logotipo.svg';

const Footer = () => {
    return(
        <section id="calendar-section">
        <div className="footer">
            <div className="content2">
                <div className="box">
                    <div className="box1">
                        <b>Enlaces</b>
                        <a href="/">Inicio</a>
                    </div>
                </div>
                <div className="contact-box">
                    <b>Contacto</b>
                    <p>Luis Carlos Revelo Tovar</p>
                    <p>Decano Facultad Ingeniería de Software</p>
                    <p>Email: luis.revelot@ucc.edu.co</p>
                </div>
                <div className="social-box">
                    <b>Universidad Cooperativa de Colombia</b>
                    <div className="social-icons">
                        <a href="https://www.ucc.edu.co" target="_blank" rel="noopener noreferrer">
                            <img className="banner-image2" src={bannerImage2} alt="banner" />
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    <p>2024 © Todos los derechos reservados INGENERIA DE SOFTWARE PASTO UCC</p>
                </div>
                <div className="autor">
                    <a href="https://www.ucc.edu.co" target="_blank" rel="noopener noreferrer">
                        <img className="banner-image2" src={bannerImage2} alt="banner" />
                    </a>
                    <p>Desarrollado por Estudiantes de Ingeneria de Software:<br/> River Bonilla <br /> Tomas Benavides</p>
                </div>
            </div> 
        </div>
        </section>
    );
};

export default Footer;
