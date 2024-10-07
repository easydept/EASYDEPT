import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Inicio from './components/inicio.jsx'
import Registro from './components/Registro.jsx';
import Principal from './components/navbar/Principal.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/navbar" element={<Principal />} />

      </Routes>
    </Router>
  );
}

export default App
