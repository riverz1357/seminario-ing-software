import React from 'react';
import '../styles/Footer.css';
import bannerImage2 from '../assets/logotipo.svg';
import { Facebook, Youtube, Instagram, X } from 'lucide-react';

const Footer = () => {
    return(
        <section id="calendar-section">
        <div class="footer">
            <div class="content2">
                <div class="box">
                    <div class="box1">
                        <b>Enlaces</b>
                        <a href="/home">Inicio</a>
                        <a href="/home">Contacto</a>
                        </div>
                </div>
                <div class="social-box">
                    <b>Siguenos en nuestras redes sociales</b>
                    <div class="social-icons">
                        <a href="/home"><Facebook size={28} color="white"/></a>
                        <a href="/home"><Youtube size={28} color="white" /></a>
                        <a href="/home"><Instagram size={28} color="white" /></a>
                        <a href="/home"><X size={36} color="white" /></a>
                    </div>
                </div>
                    <div class="copyright">
                        <p>2024 © Todos los derechos reservados INGENERIA DE SOFTWARE PASTO UCC</p>
                    </div>
                    <div class="autor">
                        <a href=""><img className="banner-image2" src={bannerImage2} alt="banner" /></a>
                        <p>Desarrollado por: River Bonilla <br /> Tomas Benavides</p>
                    </div>
                </div> 
        </div>
        </section> 
    );
};

export default Footer;
