import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Inicio from './components/Inicio/Inicio.jsx'
import Registro from './components/Inicio/Registro.jsx';
import Principal from './components/PrincipalAdmin/Principal.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App
