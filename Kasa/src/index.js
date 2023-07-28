import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@/Assets/Style/Scss/Index.scss';
import App from './App.js';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Home from './Pages/Public/Home/Home';
import Logement from './Pages/Public/Logement/Logement';
import About from './Pages//Public/About/About';
import Error from './Pages/Public/Error/Error';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


