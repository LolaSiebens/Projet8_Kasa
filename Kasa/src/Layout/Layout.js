import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/Layout/Header/Header';
import Footer from '@/Layout/Footer/Footer'


const Layout = () => {
    return (

        <div className='Layout'>
            <Header />
            <main>
                <div></div>
                <Outlet />
            </main>
            <Footer />
        </div>

    );
};


export default Layout;