import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '@/Assets/Images/Logo.png';
import '@/Assets/Style/Scss/Layout/Header.scss';

const Header = () => {
    return (
        <header>
            <div className='Header'>
                <><div className="Header-logo">
                    <img src={Logo} className='Logo' alt="Logo Kasa" />
                </div>
                    <nav className="headernav">
                        <Link to="/Home">Accueil</Link>
                        <Link to="/About">A Propos</Link>
                    </nav></>
            </div>
        </header>
    );
};

export default Header;