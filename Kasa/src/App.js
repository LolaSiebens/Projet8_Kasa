import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from "@/Pages/Public/PublicRoute";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
