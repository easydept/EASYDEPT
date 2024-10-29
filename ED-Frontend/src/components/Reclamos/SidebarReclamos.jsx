import React, { useEffect, useState } from 'react';
import { getReclamos } from '../../services/reclamos.service'; // Asegúrate de importar tu servicio correctamente

const SidebarReclamos = ({ isOpen, toggleSidebar }) => {
  const [reclamos, setReclamos] = useState([]); // Estado para almacenar los reclamos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const loadReclamos = async () => {
      try {
        // Obtener los datos de reclamos
        const reclamosData = await getReclamos();
        setReclamos(reclamosData);
      } catch (error) {
        console.error('Error loading reclamos:', error);
      } finally {
        setLoading(false);
      }
    };

    // loadReclamos();
  }, []);

  if (loading) {
    return (
      <div className={`w-64 sm:w-72 md:w-80 lg:w-96 bg-white text-black p-4 h-full flex items-center justify-center border-l-4 border-custom-green shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <span className="text-lg font-semibold">Cargando...</span>
      </div>
    );
  }

  return (
    <div className={`w-64 sm:w-72 md:w-80 lg:w-96 bg-white text-black p-4 h-full overflow-y-auto shadow-lg border-l-4 border-custom-green ${isOpen ? 'block' : 'hidden'}`}>
      <h2 className="text-lg font-bold mb-4">Reclamos</h2>
      <ul className="space-y-4">
        {reclamos.map((reclamo) => (
          <li key={reclamo.idReclamo} className="flex items-center cursor-pointer p-2 rounded relative hover:bg-gray-100">
            {/* Ícono amarillo */}
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-xl font-bold text-white">!</span> {/* Símbolo o ícono que desees usar */}
            </div>
            <div>
              <div className="font-semibold">{reclamo.asunto}</div>
              <div className="text-sm text-gray-500">Departamento: {reclamo.destinatario ? reclamo.destinatario.nombre : 'Desconocido'}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarReclamos;
