import React from 'react';
import '../styles/Banner.css';
import bannerImage from '../assets/logotipo.svg';

export default function Banner() {
    const handleCalendarClick = () => {
        const calendarSection = document.getElementById('calendar-section');
        if (calendarSection) {
            calendarSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <main className="main">
            <section className="section banner banner-section fade-in">
                <div className="container banner-column">
                    <div className="banner-inner">
                        <h1 className="heading-xl">
                            <span className="heading-line">Primer Seminario Nacional <br /> Ingeniería de Software</span>
                            <span className="heading-line"></span>
                        </h1>
                        <p className="paragraph">
                            Únete a nosotros para explorar las últimas tendencias y tecnologías en el campo de la ingeniería de software.
                        </p>
                        <button 
                            className="btn btn-darken btn-inline"
                            onClick={handleCalendarClick}
                        >
                            Calendario <i className="bx bx-right-arrow-alt"></i>
                        </button>
                    </div>
                    <img className="banner-image" src={bannerImage} alt="banner" />
                </div>
            </section>
        </main>
    );
}