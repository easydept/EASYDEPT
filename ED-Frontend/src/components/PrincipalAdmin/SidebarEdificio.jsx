import React from "react";
import { useNavigate } from "react-router-dom";
import Building from "./Building.jsx";

const SidebarEdificio = ({ isOpen, toggleSidebar, setSelectedComponent, idEdificio }) => {
  const navigate = useNavigate();

  return (
    <aside
      className={`bg-custom-green font-montserrat text-white h-3/4 w-64 p-6 transition-transform duration-500 fixed top-24 left-5 z-20 shadow-lg rounded-lg ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Menú</h2>
        <button
          onClick={() => navigate("/home/administrador")}
          className="p-1 text-custom-green font-bold bg-white rounded-full"
        >
          ← Inicio
        </button>
      </div>

      <ul className="space-y-2">
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => {
            navigate(`/home/administrador/edificio/${idEdificio}`);
            setSelectedComponent(<Building />);
          }}
        >
          Configurar Edificio
        </li>
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => navigate(`/home/administrador/edificio/${idEdificio}/reclamos`)}
        >
          Resumen Reclamos
        </li>
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => navigate(`/home/administrador/edificio/${idEdificio}/chat`)}
        >
          Resumen Chats
        </li>
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => navigate(`/home/administrador/edificio/${idEdificio}/expensas`)}
        >
          Resumen Expensas
        </li>
      </ul>
    </aside>
  );
};

export default SidebarEdificio;
