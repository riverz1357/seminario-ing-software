import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Calendar, Users } from 'lucide-react';
import "../styles/Header.css";
import logo from '../assets/ucc.png';

export default function Header() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleTabClick = (tab) => {
        if (tab === 'home') {
            setActiveTab(tab);
            navigate(`/${tab}`);
        }
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const header = document.querySelector('.header');
            const target = event.target;
            
            if (isMenuOpen && header && !header.contains(target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    const navItems = [
        { id: 'home', icon: <Home size={20} />, label: 'Inicio' },
        { id: 'calendar', icon: <Calendar size={20} />, label: 'Calendario' },
        { id: 'users', icon: <Users size={20} />, label: 'Contacto' }
    ];

    return (
        <header className={`header ${isMenuOpen ? 'active' : ''}`}>
            <img 
                src={logo} 
                alt="Logo" 
                className="logo" 
                onClick={() => handleTabClick('home')}
            />
            
            <button 
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        className={`tab ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(item.id)}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>
        </header>
    );
}
