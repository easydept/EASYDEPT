import React, { useState } from "react";
import logo from "/logoVerde.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar, isLoggedIn }) => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("apellido");
    sessionStorage.removeItem("idUsuario");
    sessionStorage.removeItem("rol");
    navigate("/");
  };

  // Obtener el nombre y apellido del sessionStorage
  const nombre = sessionStorage.getItem("nombre") || "";
  const apellido = sessionStorage.getItem("apellido") || "";
  const rol = sessionStorage.getItem("rol") || "";

  return (
    <nav className="bg-white font-montserrat fixed top-0 left-0 right-0 z-10 flex items-center px-5 py-3 shadow-md">
      {/* Botón de menú para el sidebar, solo visible cuando está loggeado */}
      {isLoggedIn && (
        <button
          onClick={toggleSidebar}
          className="mr-4 bg-transparent text-custom-green rounded px-5 py-1 transition duration-200 hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-10 text-custom-green"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
      )}

      {/* Contenedor para el logo y nombre de la aplicación */}
      <div className="flex items-center">
        <img src={logo} alt="Logo EasyDept" className="h-12 mr-3" />
        <h1 className="text-2xl font-bold text-custom-green">EasyDept</h1>
      </div>

      {/* Espacio flexible para empujar el contenido a la derecha */}
      <div className="flex-grow"></div>

      {/* Condicional para mostrar el conjunto de botones basado en el estado de autenticación */}
      {isLoggedIn ? (
        <div className="relative">
          <button
            onClick={() => setShowLogout(!showLogout)}
            className="bg-transparent text-custom-green rounded px-4 py-1 mx-5 transition duration-200 hover:bg-gray-200"
          >
            {`${nombre} ${apellido} | ${rol} ↓`}
          </button>

          {showLogout && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md p-4 flex flex-col ">
              <button className="text-custom-green hover:underline">
                Mis datos
              </button>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline mb-2"
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/inicio')}
            className="bg-transparent text-custom-green rounded px-4 py-1 transition duration-200 hover:bg-gray-200"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => navigate('/registro')}
            className="bg-transparent text-custom-green rounded px-4 py-1 transition duration-200 hover:bg-gray-200"
          >
            Crear una cuenta
          </button>
          <button
            onClick={() => navigate('/registro/admin')}
            className="bg-custom-green text-white rounded px-4 py-1 transition duration-200 hover:bg-green-700"
          >
            Unirse a EasyDept
          </button>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
