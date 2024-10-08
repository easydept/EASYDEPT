import React from "react";
import SeleccionEdificio from "./SeleccionEdificio"; 

const SidebarAdmin = ({ isOpen, toggleSidebar, setSelectedComponent }) => {
  return (
    <aside
      className={`bg-custom-green font-montserrat text-white h-3/4 w-64 p-6 transition-transform duration-500 fixed top-24 left-5 z-20 shadow-lg rounded-lg ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Menú</h2>
      <ul className="space-y-2">
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => setSelectedComponent(<SeleccionEdificio />)} // Cambia a BasicForm
        >
          Mis edificios
        </li>
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => setSelectedComponent(<Component2 />)} // Reemplaza Component2 con el componente real
        >
          Opcion 2
        </li>
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => setSelectedComponent(<Component3 />)} // Reemplaza Component3 con el componente real
        >
          Opción 3
        </li>
        <li 
          className="hover:bg-green-700 p-2 rounded"
          onClick={() => setSelectedComponent(<Component4 />)} // Reemplaza Component4 con el componente real
        >
          Opción 4
        </li>
      </ul>
    </aside>
  );
};

export default SidebarAdmin;
