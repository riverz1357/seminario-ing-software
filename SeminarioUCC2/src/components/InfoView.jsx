import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/imgponentes/natalia.jpg';
import img2 from '../assets/imgponentes/campino.jpg';
import img3 from '../assets/imgponentes/jairo.jpg';
import img4 from '../assets/imgponentes/jose.jpg';
import img5 from '../assets/imgponentes/Julian.jpg';
import img6 from '../assets/imgponentes/mariafernanda.jpg';
import img7 from '../assets/imgponentes/pedro.jpeg';
import img8 from '../assets/imgponentes/Angerson.jpeg';
import '../styles/InfoView.css';

const InfoView = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const carouselRef = useRef(null);

  const cardsData = [
    {
      id: 1,
      image: img1,
      title: "Natalia Barrero",
      shortDesc: "Asesora de la dirección de Economía Digital y gerente del proyecto AvanzaTEC del Ministerio de Tecnologías de la Información y las Comunicaciones",
      fullContent: {
        paragraph1: "Natalia Barrero, es consultora, emprendedora tecnológica, mentora y speaker internacional experta en IA, ciencia de datos, transformación digital e impacto social. Graduada de la Maestría en Inteligencia Analítica (Analytics) de la Universidad de los Andes y profesional Bilingüe en Administración con doble titulación en Finanzas y Comercio Internacional. ",
        paragraph2: "Cuenta con experiencia de más de 10 años en el diseño, desarrollo e implementación de estrategias y soluciones tecnológicas basadas en modelos predictivos, prescriptivos y cognitivos en sectores como consumo masivo, retail, financiero, público, social, telecomunicaciones e industrial."
      },
    },
    {
        id:2,
        image: img2,
        title: "Juan David Campiño",
        shortDesc: "Estudiante de Octavo semestre ingeniería de software UCC campus Pasto, Ingeniero de software Mercado Libre",
        fullContent: {
          paragraph1: "Juan David es un apasionado por la tecnología y el desarrollo de software. Durante su tiempo en la universidad, ha trabajado en varios proyectos innovadores y ha demostrado habilidades excepcionales en programación y resolución de problemas.",
          paragraph2: ""
        },
    },
    {
        id:3,
        image: img3,
        title: "Jairo Iván Vélez Bedoya",
        shortDesc: "Doctor en Ingeniería de Sistemas e Informática por la Universidad de Zaragoza (España)",
        fullContent: {
          paragraph1: "Doctor en Ingeniería de Sistemas e Informática por la Universidad de Zaragoza (España), con una Maestría en Gestión y Desarrollo de Proyectos de Ingeniería de Software y una Especialización en Ingeniería de Software, ambas de la Universidad Autónoma de Manizales. Ingeniero en Computación por la misma universidad. Profesor Asistente en la Universidad de Caldas, adscrito al Departamento de Sistemas e Informática, y miembro investigador de los grupos GITIR e Inteligencia Artificial de la institución. Posee amplia experiencia en arquitectura y desarrollo de software e inteligencia artificial, áreas en las que ha trabajado y liderado proyectos de impacto académico y profesional.",
          paragraph2: ""
        },
    },
    {
        id:4,
        image: img4,
        title: "Jose Francisco Ñañez",
        shortDesc: "CIO Actual Vicepresidente de Tecnología,Operaciones (CIO/CTO & COO) Grupo Santander – Colombia.",
        fullContent: {
          paragraph1: "VP con más de 17 años de experiencia impulsando la transformación digital y la excelencia operativa en los sectores financiero y bancario. Experto en liderar iniciativas tecnológicas a gran escala, incluido el desarrollo y la implementación de plataformas digitales de vanguardia, marcos de ciberseguridad e infraestructura en la nube. Reducción de costos operativos, optimización de procesos e implementación de soluciones innovadoras que mejoran el desempeño comercial y la satisfacción del cliente. Liderazgo de equipos multidisciplinarios, para generar asociaciones estratégicas en entornos regulatorios complejos.",
          paragraph2: ""
        },
    },
    {
        id:5,
        image: img5,
        title: "Julian Reyes",
        shortDesc: "Ingeniero Industrial e Ingeniero Electrónico, con maestrías en Ingeniería Industrial (Universidad de los Andes) e Inteligencia Artificial (Universidad Politécnica de Madrid). ",
        fullContent: {
          paragraph1: "Ingeniero Industrial e Ingeniero Electrónico, con maestrías en Ingeniería Industrial (Universidad de los Andes) e Inteligencia Artificial (Universidad Politécnica de Madrid). Cuenta con más de 12 años de experiencia en el diseño e implementación de soluciones innovadoras en ciencia de datos, inteligencia artificial y optimización, ha trabajado en sectores como seguridad, defensa, banca, retail, logística, educación y consultoría",
          paragraph2: "Es Líder de Data & Analytics y Líder del Centro de Conocimiento de Ciencia de Datos en Pragma S.A., y profesor universitario con más de 8 años de experiencia, impartiendo clases en instituciones como Universidad de los Andes, Emeritus para el MiT xPRO, Pontificia Universidad Javeriana y Universidad Autónoma de Bucaramanga."
        },
    },
    {
        id:6,
        image: img6,
        title: "Maria Fernanda Granda",
        shortDesc: "Ingeniera de Sistemas y Telemática con amplia experiencia en testing de aplicaciones y análisis funcional, especializada en garantizar la calidad del software a lo largo del ciclo de vida del desarrollo.",
        fullContent: {
            paragraph1: "Además, posee una Especialización en Pedagogía y Desarrollo en Aprendizaje Autónomo y una Maestría en Pedagogía, lo que complementa su enfoque metodológico en la formación y desarrollo profesional.",
            paragraph2: "Certificada como Agile Leader Professional (ALPC) y Scrum Foundation Professional en 2024, con habilidades en Kanban y gestión de proyectos de desarrollo, ha trabajado en la optimización de procesos de aseguramiento de calidad y mejora continua. Recientemente, se certificó en Inteligencia Artificial Generativa (GAIPC), lo que refuerza su capacidad para aplicar las últimas tecnologías en la innovación de pruebas y control de calidad de software."
          },
      },
      {
          id:7,
          image: img7,
          title: "Pedro Camargo",
          shortDesc: "Gerente de Transformación y Desarrollo en Nequi, Ingeniero de Sistemas y Gerente de Transformación y Desarrollo en Nequi",
          fullContent: {
              paragraph1: "Ingeniero de Sistemas y Gerente de Transformación y Desarrollo en Nequi, cuenta con más de 15 años de experiencia en el sector financiero y tecnológico. Ha sido fundamental en la implementación de iniciativas clave en innovación y banca digital, contribuyendo significativamente al crecimiento de Nequi como referente en la industria.",
              paragraph2: ""
          }
      },
      {
          id: 8,
          image: img8,
          title: "Angerson Lasso.",
          shortDesc: "Desarrollador full Stack con sólida trayectoria en desarrollo de software, especialmente en tecnologías de Java",
          fullContent: {
              paragraph1: "se caracteriza por su capacidad en el desarrollo de software en diversas capas de la arquitectura, con una fuerte base en Java y tecnologías complementarias como Spring Boot y Angular. Su experiencia en pruebas unitarias y en roles de coordinación sugiere no solo habilidades técnicas, sino también competencias en liderazgo y gestión de equipos. Su trayectoria indica un compromiso constante con la calidad del software y un enfoque en el mejoramiento continuo.",
              paragraph2: ""
          }

      }
    ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 500;
      const currentScroll = carouselRef.current.scrollLeft;
      carouselRef.current.scrollTo({
        left: currentScroll + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth'
      });
    }
  };

  const renderCard = (card) => (
    <div 
      key={card.id}
      className={`card ${expandedCard === card.id ? 'expanded' : ''}`}
      onClick={() => handleCardClick(card.id)}
    >
      <div className="card-content">
        <div className="card-header">
          {card.icon && (
            <div className="card-icon-container">
              {card.icon}
            </div>
          )}
          <h3 className="card-title">{card.title}</h3>
        </div>

        {card.image && (
          <div className="card-image-container">
            <img 
              src={card.image} 
              alt={card.title}
              className="card-image"
            />
          </div>
        )}

        <div className={expandedCard === card.id ? 'card-content-expanded' : ''}>
          {expandedCard === card.id ? (
            <>
              <p className="card-description fade-in">{card.fullContent.paragraph1}</p>
              <p className="card-description fade-in">{card.fullContent.paragraph2}</p>
            </>
          ) : (
            <p className="card-description short">{card.shortDesc}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="info-view-container">
      <button 
        onClick={() => scroll('left')}
        className="carousel-button carousel-button-left"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>

      <div 
        ref={carouselRef}
        className="carousel-container"
      >
        {cardsData.map(renderCard)}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="carousel-button carousel-button-right"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default InfoView;