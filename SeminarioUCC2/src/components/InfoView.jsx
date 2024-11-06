import React from 'react';
import { Bot, Carrot, Captions, Camera, CircleAlert } from 'lucide-react';
import '../styles/InfoView.css';

const InfoView = () => {
return (
    <section className="container2">
        <div className="hex-section">
            <div className="hex-grid">
                <div className="hex first-row">
                    <div className="hex-content">
                        <CircleAlert size={48} color="black" />
                        <h3>Calidad</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste facilis qui distinctio accusamus saepe fuga tempora dignissimos.</p>
                    </div>
                </div>
                <div className="hex first-row">
                    <div className="hex-content">
                        <Carrot size={48} color="black" />
                        <h3>Accesibilidad</h3>
                        <p>lorem ipsum dadawdadawdawdaw</p>
                    </div>
                </div>
                <div className="hex second-row">
                    <div className="hex-content">
                        <Camera size={48} color="black" />
                        <h3>lorem</h3>
                        <p>Lorem ipsum dios mio</p>
                    </div>
                </div>
                <div className="hex second-row">
                    <div className="hex-content">
                        <Captions size={48} color="black" />
                        <h3>LUCART</h3>
                        <p>Lucart jamas me pasara contenidos?</p>
                    </div>
                </div>
                <div className="hex third-row">
                    <div className="hex-content">
                        <Bot size={48} color="black" />
                        <h3>Concientización</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default InfoView;
