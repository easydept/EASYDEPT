import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from './components/Inicio/Inicio.jsx';
import Registro from './components/Inicio/Registro.jsx';
import PrincipalAdministrador from './components/PrincipalAdmin/PrincipalAdministrador.jsx';
import PrincipalInquilino from './components/PrincipalInquilino/PrincipalInquilino.jsx';
import PrincipalPropietario from './components/PrincipalPropietario/PrincipalPropietario.jsx';
import RegistroEdificio from './components/PrincipalAdmin/RegistroEdificio.jsx';
import RegistroNuevoAdmin from './components/Inicio/RegistroNuevoAdmin.jsx';
import LandingPage from './components/Inicio/LandingPage.jsx';
import Prueba from './components/Inicio/Prueba.jsx';
import EdificioPageAdmininstrador from './components/PrincipalAdmin/EdificioPageAdmininstrador.jsx';
import ResumenChat from "./components/Chat/ResumenChat.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Rutas de Inicio */}        
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registro/admin" element={<RegistroNuevoAdmin />} />
        <Route path="/pruebas" element={<Prueba />} />

        {/* Rutas para Administrador */}
        <Route path="/home/administrador" element={<PrincipalAdministrador />} />
        <Route path="/home/administrador/edificio/:idEdificioSelec" element={<EdificioPageAdmininstrador />} />
        <Route path="/home/administrador/edificio/:idEdificio/chat" element={<ResumenChat />} />
        
        
        {/* Rutas para Propietario */}
        <Route path="/home/propietario" element={<PrincipalPropietario />} />
        <Route path="/home/propietario/edificio/:idEdificioSelec" element={<EdificioPageAdmininstrador />} />

        {/* Rutas para Inquilino */}
        <Route path="/home/inquilino" element={<PrincipalInquilino />} />
        <Route path="/home/inquilino/edificio/:idEdificioSelec" element={<EdificioPageAdmininstrador />} />
        
        

        
      </Routes>
    </Router>
  );
}

export default App;
