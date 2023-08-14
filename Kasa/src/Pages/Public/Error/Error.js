import Header from '@/Layout/Header/Header'
import Footer from '@/Layout/Footer/Footer'

import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <Header />
            <div className='error-page'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/"> Retourner sur la page d’accueil </Link>
            </div>
            <Footer />
        </>
    );
};

export default Error; 