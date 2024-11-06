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
                            <span className="heading-line">Seminario Nacional</span>
                            <span className="heading-line">de Ingeniería de Software</span>
                        </h1>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="btn btn-darken btn-inline">
                            Button <i className="bx bx-right-arrow-alt"></i>
                        </button>
                    </div>
                    <img className="banner-image" src={bannerImage} alt="banner" />
                </div>
            </section>
        </main>
    );
}