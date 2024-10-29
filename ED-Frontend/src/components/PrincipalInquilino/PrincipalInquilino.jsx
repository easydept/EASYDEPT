import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Inicio/Navbar';
import SidebarInquilino from './SidebarInquilino';
import Reclamos from '../Reclamos/RegistrarReclamo';

const PrincipalInquilino = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Inicializar como true
    const [selectedComponent, setSelectedComponent] = useState(<Reclamos />); // Inicializar con BasicForm

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            <SidebarInquilino 
                isOpen={isSidebarOpen} 
                toggleSidebar={toggleSidebar} 
                setSelectedComponent={setSelectedComponent} 
            />
            <div className={`flex-1 transition-all duration-500 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <Navbar toggleSidebar={toggleSidebar} />
                
                {/* Contenedor tipo card */}
                <div className='flex justify-center items-start p-4 h-screen pt-24'> {/* Agregar padding top */}
                    <div className='border rounded-lg shadow-lg w-full max-w-6xl bg-white p-6 max-h-[calc(100vh-5rem)] overflow-y-auto'> {/* Ajustar max-h según altura de navbar */}
                        {/* Aquí se renderiza el componente seleccionado */}
                        {selectedComponent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrincipalInquilino;
