import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Error, Home, About, Logement } from '@/Pages/Public'
import Layout from '@/Layout/Layout.js';


const PublicRoute = () => {
    return (
        <Routes>
            <Route path="/*" element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="Home" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Logement/:id" element={<Logement />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRoute;