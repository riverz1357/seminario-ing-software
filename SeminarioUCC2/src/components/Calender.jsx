import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import '../styles/Calender.css';
import LolImg from '../assets/lol.svg';

const TournamentBanner = () => (
  <div className="tournament-banner">
    <div className="tournament-logo">
      <img 
        src={LolImg} 
        alt="League of Legends Logo" 
        className="lol-logo"
      />
    </div>
    <div className="tournament-info">
      <div className="tournament-header">
        <Trophy className="trophy-icon" />
        <h1>League of Legends Torneo 2024</h1>
      </div>
      <div className="tournament-details">
        <p className="tournament-date">Noviembre Viernes 15 Inicio, 2024 2PM </p>
        <p className="tournament-date">Noviembre Miercoles 20 Final y Premiacion, 2024 2PM </p>
        <p className="tournament-description">
          Responsable : Docentes Tiempo Completo
        </p>
        <div className="tournament-tags">
          <span className="tournament-tag">Aula 1</span>
          <span className="tournament-tag">5v5</span>
          <span className="tournament-tag">Premiacion</span>
        </div>
      </div>
    </div>
  </div>
);

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("18");

  const eventsByDate = {
    "18": [
      {
        id: 1,
        title: 'Lectura de sensibilización para el auditorio y presentación del programa.',
        time: '6:00 PM - 6:10 PM',
        description: 'Presentadora Natalia Cabrera Estudiante de sexto semestre de ingeniería de software ',
        duration: '10min',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 2,
        title: 'Himno nacional Video universidad cooperativa de Colombia',
        time: '6:10 PM - 6:20 PM',
        description: 'Sonido Centro de Convenciones Cámara de Comercio ',
        duration: '10min',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 3,
        title: 'Palabras de apertura',
        time: '6:20 PM - 6:30 PM',
        description: 'Víctor Hugo Villota Alvarado - director de sede UCC. Luis Carlos Revelo Tovar - Ingeniería de Software',
        duration: '10min',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 4,
        title: 'Conferencia general: AvanzaTEC Min TIC ',
        time: '6:30 PM - 8:00 PM',
        description: 'Natalia Barrero Asesora de la dirección de Economía Digital y gerente del proyecto AvanzaTEC del Ministerio de Tecnologías de la Información y las Comunicaciones',
        duration: '1:30h',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 5,
        title: 'Refrigerio',
        time: '8:00 PM - 8:30 PM',
        description: 'Todos los asistentes',
        duration: '30min',
        place: 'Auditorio principal Camara de Comercio'
      },
      { 
        id:6,
        title: 'Presentación de trabajos de grado.',
        time: '8:30 PM - 9:10 PM',
        description: 'Estudiantes de Ingeniería de Software de 8 semestre',
        duration: '40min',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id:7,
        title: '“De Estudiante a Profesional: Cómo Ingresar a Mercado Libre y Otras Multinacionales',
        time: '9:10 PM - 9:40 PM',
        description: 'Juan David Campiño Toro Estudiante Octavo semestre ingeniería de software UCC campus Pasto, Ingeniero de software Mercado Libre ',
        duration: '30min',
        place: 'Auditorio principal Camara de Comercio'
      },
    ],
    "19": [
      {
        id: 8,
        title: '""',
        time: '8:00 AM - 9:00 AM',
        description: '',
        duration: '1h',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 9,
        title: '“Nequi, la tecnología detrás de la banca digital.”',
        time: '9:00 AM - 10:00 AM',
        description: 'Pedro Camargo Gerente de Transformación y Desarrollo en Nequi',
        duration: '1h',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 10,
        title: 'Refrigerio',
        time: '10:00 AM - 10:30 AM',
        description: 'Todos los asistentes',
        duration: '30min',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 11,
        title: 'Impacto de la IA en la Ingeniería de Software: Potenciando los Procesos de Desarrollo',
        time: '10:30 AM - 11:30 AM',
        description: 'Jairo Iván Vélez Bedoya Doctor en Ingeniería de Sistemas e Informática por la Universidad de Zaragoza (España)',
        duration: '1h',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 12,
        title: 'Avisos generales del congreso ',
        time: '11:30 AM - 12:00 PM',
        description: 'Tiempo completo Ingeniería de software',
        duration: '30min',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 13,
        title: 'Descanso de Medio día',
        time: '12:00 PM - 2:00 PM',
        description: 'Todos los asistentes',
        duration: '2h',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 14,
        title: '“GreenSQA El Futuro de las Pruebas de Software: IA, Automatización y ROI"',
        time: '2:00 PM - 3:00 PM',
        description: 'María Fernanda Granda. Ingeniera de Sistemas y Telemática con amplia experiencia en testing de aplicaciones y análisis funcional ',
        duration: '1h',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
       id: 15,
       title: 'Transformando la Experiencia del Viajero: Innovaciones en Software para el Turismo Digital',
       time: '3:00 PM - 4:00 PM',
       description: 'Angerson Lasso Desarrollador full Stack con sólida trayectoria en desarrollo de software, especialmente en tecnologías de Java',
        duration: '1h',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 16,
        title: 'Refrigerio',
        time: '4:00 PM - 4:30 PM',
        description: 'Todos los asistentes',
        duration: '30min',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 17,
        title: '“PRAGMA ¿Cómo la Inteligencia Artificial potencia los productos de software?”',
        time: '4:30 PM - 5:30 PM',
        description: 'Julian Reyes Ingeniero Industrial e Ingeniero Electrónico, con maestrías en Ingeniería Industrial (Universidad de los Andes) e Inteligencia Artificial (Universidad Politécnica de Madrid).',
        duration: '1h',
        place: 'Auditorio principal Camara de Comercio'
      },
      {
        id: 18,
        title: '“Palabras de cierre del evento. ”',
        time: '5:30 PM - 6:00 PM',
        description: 'Decano Facultad de Ingeniera Universidad Cooperativa de Colombia',
        duration: '30min',
        place: 'Auditorio principal Camara de Comercio'
      }
    ]
  };

  const changeDay = (day) => {
    if (day === "18" || day === "19") {
      setSelectedDate(day);
    }
  };

  return (
    <main>
      <section id="calendar-section">
        <TournamentBanner />
        <div className="calendar-container">
          <div className="calendar-header">
            <CalendarIcon className="calendar-icon" />
            <div className="date-navigation">
              <button 
                onClick={() => changeDay("18")}
                className="nav-button"
                disabled={selectedDate === "18"}
              >
                <ChevronLeft className="nav-icon" />
              </button>
              <h2>Cronograma - Noviembre {selectedDate}</h2>
              <button 
                onClick={() => changeDay("19")}
                className="nav-button"
                disabled={selectedDate === "19"}
              >
                <ChevronRight className="nav-icon" />
              </button>
            </div>
          </div>

          <div className="timeline">
            {eventsByDate[selectedDate].map((event) => (
              <div key={event.id} className="timeline-event">
                <div className="timeline-time">
                  <Clock className="clock-icon" />
                  <span>{event.time}</span>
                  <span className="duration">{event.duration}</span>
                  <span className="place">{event.place}</span>
                </div>
                <div className="timeline-content">
                  <div className="event-marker"></div>
                  <div className="event-line"></div>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Calendar;
