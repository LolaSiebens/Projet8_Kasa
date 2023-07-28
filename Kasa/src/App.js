//import logo from '@/logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import PublicRoute from '@/Pages/Public/PublicRoute.js';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRoute />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
