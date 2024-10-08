import React from 'react';

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="bg-white text-white fixed top-0 left-5 right-0 z-10 flex items-center">
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
                <img
                    src="logoVerde.png" // Usa la variable de importación para la imagen
                    alt="Logo"
                    className="h-20" // Añade margen izquierdo para separación
                />
            </div>

            {/* Puedes agregar otros elementos a la derecha si lo deseas */}
            <div className="flex-grow"></div> {/* Esto empuja los otros elementos a la derecha */}
        </nav>
    );
};

export default Navbar;
