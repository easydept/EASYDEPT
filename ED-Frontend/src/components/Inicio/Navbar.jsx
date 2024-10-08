import React, { useState } from "react"
import logo from "/logoVerde.png"
import { useNavigate } from "react-router-dom"

const Navbar = ({ toggleSidebar }) => {
  const [showLogout, setShowLogout] = useState(false)
  const navigate = useNavigate()

  // Función para cerrar sesión
  const handleLogout = () => {
    // Limpia el sessionStorage
    sessionStorage.removeItem("nombre")
    sessionStorage.removeItem("apellido")
    sessionStorage.removeItem("idUsuario")
    sessionStorage.removeItem("rol")

    // Redirige a la página principal
    navigate("/")
  }

  // Obtener el nombre y apellido del sessionStorage
  const nombre = sessionStorage.getItem("nombre") || ""
  const apellido = sessionStorage.getItem("apellido") || ""
  const rol = sessionStorage.getItem("rol") || ""

  return (
    <nav className="bg-white font-montserrat fixed top-0 left-5 right-0 z-10 flex items-center">
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

      {/* Contenedor para el logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20" />
      </div>

      {/* Espacio flexible para empujar el contenido a la derecha */}
      <div className="flex-grow"></div>

      {/* Nombre del usuario y botón de cerrar sesión */}
      <div className="relative">
        <button
          onClick={() => setShowLogout(!showLogout)}
          className="bg-transparent text-custom-green rounded px-4 py-1 mx-5 transition duration-200 hover:bg-gray-200"
        >
          {`${nombre} ${apellido} | ${rol} ↓`}
        </button>

        {showLogout && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded mx-5 shadow-md p-4">
            <div>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:underline mb-2" // Margen inferior para separar los botones
            >
              Cerrar sesión
            </button>
            </div>
            <div>
            <button className="text-custom-green hover:underline">
              Mis datos
            </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
