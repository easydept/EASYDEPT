import React, { useEffect, useState } from 'react';
import { getRolesUsuarios } from '../../services/rolesUsuarios.service';

const SidebarChats = () => {
  const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los usuarios con sus roles
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const loadUsuariosConRoles = async () => {
      try {
        // Obtener los datos de RolesUsuarios
        const rolesUsuariosData = await getRolesUsuarios();

        // Filtrar solo los usuarios que NO sean administradores
        const usuariosFiltrados = rolesUsuariosData
          .filter(rolUsuario => rolUsuario.rol.nombre !== 'Administrador')
          .map(rolUsuario => ({
            idUsuario: rolUsuario.usuario.idUsuario,
            nombre: rolUsuario.usuario.nombre,
            apellido: rolUsuario.usuario.apellido,
            rol: rolUsuario.rol.nombre, // Propiedad del rol
          }));

        setUsuarios(usuariosFiltrados);
      } catch (error) {
        console.error('Error loading users or roles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUsuariosConRoles();
  }, []);

  if (loading) {
    return (
      <div className="w-64 sm:w-72 md:w-80 lg:w-96 bg-white text-black p-4 h-full flex items-center justify-center border-l-4 border-custom-green shadow-lg">
        <span className="text-lg font-semibold">Cargando...</span>
      </div>
    );
  }

  return (
    <div className="w-64 sm:w-72 md:w-80 lg:w-96 bg-white text-black p-4 h-full overflow-y-auto shadow-lg border-l-4 border-custom-green">
      <h2 className="text-lg font-bold mb-4">Tus Chats</h2>
      <ul className="space-y-4">
        {usuarios.map((usuario) => (
          <li key={usuario.idUsuario} className="flex items-center cursor-pointer p-2 rounded relative hover:bg-gray-100">
            {/* Color del logo según el rol */}
            <div
              className={`w-10 h-10 ${
                usuario.rol === 'Propietario' ? 'bg-green-500' : usuario.rol === 'Inquilino' ? 'bg-orange-500' : ''
              } rounded-full flex items-center justify-center mr-3`}
            >
              <span className="text-xl font-bold text-white">{usuario.nombre.charAt(0)}</span>
            </div>
            <div>
              <div className="font-semibold">{`${usuario.nombre} ${usuario.apellido}`}</div>
              <div className="text-sm text-gray-500">Último mensaje aquí</div> {/* Placeholder para el último mensaje */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarChats;
