import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Inicio/Navbar"
import { useParams } from 'react-router-dom';
import SidebarEdificio from './SidebarEdificio'
import Building from "./Building";

const EdificioPageAdministrador = () => {
  const { idEdificioSelec } = useParams()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true) // Inicializar como true
  const [selectedComponent, setSelectedComponent] = useState(<Building />) // 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className="flex">
      <SidebarEdificio
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setSelectedComponent={setSelectedComponent}
      />
      <div
        className={`flex-1 transition-all duration-500 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        {/* Contenedor tipo card */}
        <div className="flex justify-center items-start p-4 h-screen pt-24">
          {" "}
          {/* Agregar padding top */}
          <div className="border rounded-lg shadow-lg w-full max-w-6xl bg-white p-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {" "}
            {/* Ajustar max-h según altura de navbar */}
            {/* Aquí se renderiza el componente seleccionado */}
            <div className="content">
              <h1>Información del Edificio</h1>
              <p>ID del Edificio Seleccionado: {idEdificioSelec}</p>
            </div>
            {selectedComponent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EdificioPageAdministrador
