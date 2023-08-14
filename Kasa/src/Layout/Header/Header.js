import { Link } from 'react-router-dom';
import Logo from '@/Assets/Images/Logo.png';
import '@/Assets/Style/Scss/Layout/Header.scss';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="logo" className='Logo' />
            <nav className='navbar'>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>

        </header>
    );
};

export default Header; 