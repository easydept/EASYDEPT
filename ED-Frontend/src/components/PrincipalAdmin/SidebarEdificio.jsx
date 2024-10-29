import React from "react";
import { useNavigate } from "react-router-dom";
import Building from "./Building.jsx";
import ReclamosAdmin from "./ReclamosAdmin.jsx";

const SidebarEdificio = ({ isOpen, toggleSidebar, setSelectedComponent }) => {
  const navigate = useNavigate();

  return (
    <aside
      className={`bg-custom-green font-montserrat text-white h-3/4 w-64 p-6 transition-transform duration-500 fixed top-24 left-5 z-20 shadow-lg rounded-lg ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Contenedor flex para alinear el título y el botón de volver */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Menú</h2>
        <button
          onClick={() => navigate("/home/administrador")} // Reemplaza con la ruta deseada
          className="p-1 text-custom-green font-bold bg-white rounded-full"
        >
          ← Inicio
        </button>
      </div>

      <ul className="space-y-2">
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => setSelectedComponent(<Building />)}
        >
          Departamentos
        </li>
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => setSelectedComponent(<ReclamosAdmin />)}
        >
          Reclamos
        </li>
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => setSelectedComponent(<Component3 />)}
        >
          Chats
        </li>
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => setSelectedComponent(<Component4 />)}
        >
          Expensas
        </li>
      </ul>
    </aside>
  );
};

export default SidebarEdificio;
