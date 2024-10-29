import React, { useState } from "react"
import logo from "/edificiosVerde.png"
import { useNavigate } from "react-router-dom"

const NavbarLP = () => {

  const navigate = useNavigate()
  
  return (
    <nav className="bg-white font-montserrat fixed top-0 left-0 right-0 z-10 flex items-center px-5 py-3 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo EasyDept" className="h-5 mr-3" />
        <h1 className="text-2xl font-bold text-custom-green">EasyDept</h1>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/inicio")}
          className="bg-transparent text-custom-green rounded px-4 py-1 transition duration-200 hover:bg-gray-200"
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => navigate("/registro")}
          className="bg-transparent text-custom-green rounded px-4 py-1 transition duration-200 hover:bg-gray-200"
        >
          Crear una cuenta
        </button>
        <button
          onClick={() => navigate("/registro/admin")}
          className="bg-custom-green text-white rounded px-4 py-1 transition duration-200 hover:bg-green-700"
        >
          Unirse a EasyDept
        </button>
      </div>
    </nav>
  )
}

export default NavbarLP
