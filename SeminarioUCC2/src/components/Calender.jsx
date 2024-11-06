import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Calender.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("18");

  const eventsByDate = {
    "18": [
      {
        id: 1,
        title: 'Inicio',
        time: '09:00 AM',
        description: 'Lorem ipsum dolor sit amet',
        duration: '1h'
      },
      {
        id: 2,
        title: 'EVENTO',
        time: '11:30 AM',
        description: 'nose lucart no me paso el calendario',
        duration: '2h'
      },
      {
        id: 3,
        title: 'que miedo',
        time: '02:00 PM',
        description: 'lucart paseme el calendario',
        duration: '45m'
      },
    ],
    "19": [
      {
        id: 4,
        title: 'Design Review',
        time: '03:00 PM',
        description: 'Review new design mockups',
        duration: '1h'
      },
      {
        id: 5,
        title: 'Team Meeting',
        time: '04:30 PM',
        description: 'Weekly sync with the development team',
        duration: '1h'
      },
    ]
  };

  const previousDay = () => {
    if (selectedDate === "19") setSelectedDate("18");
  };

  const nextDay = () => {
    if (selectedDate === "18") setSelectedDate("19");
  };

  return (
    <main>
      <section>
        <div className="calendar-container">
          <div className="calendar-header">
            <CalendarIcon className="calendar-icon" />
            <div className="date-navigation">
              <button 
                onClick={previousDay}
                className="nav-button"
                disabled={selectedDate === "18"}
              >
                <ChevronLeft className="nav-icon" />
              </button>
              <h2>Cronograma - Noviembre {selectedDate}</h2>
              <button 
                onClick={nextDay}
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