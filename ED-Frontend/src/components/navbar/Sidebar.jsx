import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
        className={`bg-custom-green text-white h-screen w-64 p-4 transition-transform duration-500 fixed left-0 top-0 z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <button
                onClick={toggleSidebar}
                className="mb-4 bg-custom-green text-custom-green rounded px-2 py-1 transition duration-200 hover:bg-gray-200"
            >
                <img
                    src="sidebarIcon.png"
                    // Reemplaza esto con la ruta a tu icono de menú
                    alt="Menú"
                    className="w-6 h-6" // Ajusta el tamaño según sea necesario
                />
            </button>
            <h2 className="text-xl font-bold mb-4">Menú</h2>
            <ul className="space-y-2">
                <li className="hover:bg-green-700 p-2 rounded">Opción 1</li>
                <li className="hover:bg-green-700 p-2 rounded">Opción 2</li>
                <li className="hover:bg-green-700 p-2 rounded">Opción 3</li>
                <li className="hover:bg-green-700 p-2 rounded">Opción 4</li>
            </ul>
        </div>
    );
};

export default Sidebar;
