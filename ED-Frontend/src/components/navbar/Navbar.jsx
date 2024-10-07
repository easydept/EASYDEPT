import React from 'react';

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav
            className="bg-custom-green p-4 text-white fixed top-0 left-0 right-0 z-10 flex items-center justify-between">
            <button
                onClick={toggleSidebar}
                className="mr-4 bg-custom-green text-custom-green rounded px-2 py-1 transition duration-200 hover:bg-gray-200"
            >
                <img
                    src="sidebarIcon.png"
                     // Reemplaza esto con la ruta a tu icono de menú
                    alt="Menú"
                    className="w-6 h-6" // Ajusta el tamaño según sea necesario
                />
            </button>
            <img
                src="logo.png"
                className="w-20 mx-auto" // 'mx-auto' centra la imagen
                alt="Logo"
            />
        </nav>
    );
};

export default Navbar;