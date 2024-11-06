import React from 'react';
import '../styles/Footer.css';
import bannerImage2 from '../assets/logotipo.svg';
import { Facebook, Youtube, Instagram, X } from 'lucide-react';

const Footer = () => {
    return(
        <div class="footer">
            <div class="content2">
                <div class="box">
                    <div class="box1">
                        <b>Enlaces</b>
                        <a href="#">Inicio</a>
                        <a href="#">Contacto</a>
                    </div>
                </div>
                <div class="social-box">
                    <b>Siguenos en nuestras redes sociales</b>
                    <div class="social-icons">
                        <a href="#"><Facebook size={28} color="white"/></a>
                        <a href="#"><Youtube size={28} color="white" /></a>
                        <a href="#"><Instagram size={28} color="white" /></a>
                        <a href="#"><X size={36} color="white" /></a>
                    </div>
                </div>
                    <div class="copyright">
                        <p>2024 © Todos los derechos reservados</p>
                    </div>
                    <div class="autor">
                        <a href=""><img className="banner-image2" src={bannerImage2} alt="banner" /></a>
                        <p>Desarrollado por: River Bonilla <br /> Tomas Benavides</p>
                    </div>
                </div> 
        </div>
    );
};

export default Footer;
