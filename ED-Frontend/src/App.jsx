import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Inicio from './components/inicio.jsx'
import Registro from './components/Registro.jsx';
import Principal from './components/navbar/Principal.jsx';
import SidebarPr1 from './components/navbar/SidebarPr1.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/navbar" element={<Principal />} />
        <Route path="/navbar2" element={<SidebarPr1 />} />

      </Routes>
    </Router>
  );
}

export default App
