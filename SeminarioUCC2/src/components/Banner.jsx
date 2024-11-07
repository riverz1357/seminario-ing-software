import React from 'react';
import '../styles/Banner.css';
import bannerImage from '../assets/logotipo.svg';

export default function Banner() {
    return (
        <main className="main">
            <section className="section banner banner-section fade-in">
                <div className="container banner-column">
                    <div className="banner-inner">
                        <h1 className="heading-xl">
                            <span className="heading-line">Primer Seminario<br/> Nacional</span>
                            <span className="heading-line">Ingeniería de Software</span>
                        </h1>
                        <p className="paragraph">
                            Únete a nosotros para explorar las últimas tendencias y tecnologías en el campo de la ingeniería de software.
                        </p>
                        <button className="btn btn-darken btn-inline">
                            Calendario <i className="bx bx-right-arrow-alt"></i>
                        </button>
                    </div>
                    <img className="banner-image" src={bannerImage} alt="banner" />
                </div>
            </section>
        </main>
    );
}