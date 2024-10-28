import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Inicio from './components/Inicio/Inicio.jsx'
import Registro from './components/Inicio/Registro.jsx';
import PrincipalAdministrador from './components/PrincipalAdmin/PrincipalAdministrador.jsx';
import PrincipalInquilino from './components/PrincipalInquilino/PrincipalInquilino.jsx';
import PrincipalPropietario from './components/PrincipalPropietario/PrincipalPropietario.jsx';
import RegistroEdificio from './components/PrincipalAdmin/RegistroEdificio.jsx';
import RegistroNuevoAdmin from './components/Inicio/RegistroNuevoAdmin.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home/administrador" element={<PrincipalAdministrador />} />
        <Route path="/edificios" element={<RegistroEdificio />} />
        <Route path="/home/propietario" element={<PrincipalPropietario />} />
        <Route path="/home/inquilino" element={<PrincipalInquilino />} />
        <Route path="/pruebas" element={<RegistroNuevoAdmin />} /> 
      </Routes>
    </Router>
  );
}

export default App
