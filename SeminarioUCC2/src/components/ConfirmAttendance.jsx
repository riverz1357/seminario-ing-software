import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/ConfirmAttendance.css';

const ConfirmAttendance = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const idcode = searchParams.get('idcode');

  const confirmAttendance = async (attendanceNum) => {
    setIsLoading(true);
    const apiUrl = process.env.REACT_APP_API_URL_BACKEND || 'http://localhost:3001';
    try {
      const response = await fetch(`${apiUrl}/users/confirm-attendance?idcode=${idcode}&attendanceNumber=${attendanceNum}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setMessage('Attendance confirmed.');
      } else {
        setMessage('Error confirming attendance.');
      }
    } catch (error) {
      setMessage('Error connecting to the server.');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!idcode) {
      setMessage('Invalid QR code.');
    }
  }, [idcode]);

  return (
    <div className="confirm-attendance-container">
      <div className="confirm-attendance-card">
        <h2 className="confirm-attendance-title">Confirm Attendance</h2>
        {message ? (
          <p className="confirm-attendance-message">{message}</p>
        ) : (
          <div className="confirm-attendance-buttons">
            <p className="confirm-attendance-instruction">Select your attendance type:</p>
            <button 
              onClick={() => confirmAttendance(1)} 
              disabled={isLoading}
              className="confirm-attendance-button"
            >
              Morning
            </button>
            <button 
              onClick={() => confirmAttendance(2)} 
              disabled={isLoading}
              className="confirm-attendance-button"
            >
              Afternoon
            </button>
            <button 
              onClick={() => confirmAttendance(3)} 
              disabled={isLoading}
              className="confirm-attendance-button"
            >
              Full Day
            </button>
          </div>
        )}
        {isLoading && <p className="confirm-attendance-loading">Loading...</p>}
      </div>
    </div>
  );
};

export default ConfirmAttendance;