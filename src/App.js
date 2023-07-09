import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
