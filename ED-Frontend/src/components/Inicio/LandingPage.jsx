import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Asegúrate de ajustar la ruta de acuerdo a tu estructura de archivos

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white font-montserrat text-gray-800">
      {/* Navbar sin loggeo */}
      <Navbar isLoggedIn={false} />

      {/* Sección de Encabezado */}
      <header className="min-h-screen flex items-center bg-custom-green text-white">
        {/* Columna de Texto */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
            <h1 className="text-5xl font-bold mb-2">EasyDept</h1>
          <p className="text-2xl">Gestión simplificada para Administradores de Edificios</p>
        </div>

{/* Columna de Card con Imagen */}
<div className="flex-1 flex justify-center pr-8">
  <div className="bg-white rounded-lg shadow-lg p-8 flex justify-center items-center w-7/8 max-w-[600px] transform transition-transform duration-300 hover:shadow-xl hover:scale-105"> {/* Aumentando el ancho de la tarjeta */}
    <img
      src="edificiosLogoNegro.png"
      alt="Logo"
      className="max-w-[100%] h-auto transition duration-500 ease-in-out transform hover:scale-110" // Aumentando el tamaño del logo
    />
  </div>
</div>



      </header>

      {/* Sección de Usuarios */}
      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Usuarios en EasyDept</h2>
        <p className="text-lg">
          EasyDept ofrece un sistema de gestión donde interactúan tres tipos de usuarios:
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li><strong>Administrador:</strong> Gestiona todo el sistema.</li>
          <li><strong>Propietario:</strong> Visualiza sus propiedades y expensas.</li>
          <li><strong>Inquilino:</strong> Consulta reclamos y mantiene comunicación directa.</li>
        </ul>
      </section>

      {/* Sección de Acciones del Administrador */}
      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Acciones del Administrador</h2>
        <p className="text-lg">
          Como administrador, puedes realizar múltiples tareas para facilitar la gestión de edificios:
        </p>
        <ul className="mt-6 space-y-4 text-gray-700">
          <li>📢 <strong>Chat con Inquilinos y Propietarios:</strong> Mantén una comunicación efectiva.</li>
          <li>⚠️ <strong>Atención de Reclamos:</strong> Resuelve los problemas de manera eficiente.</li>
          <li>🏢 <strong>Organización de Departamentos:</strong> Administra y asigna unidades fácilmente.</li>
          <li>💰 <strong>Registro de Gastos:</strong> Lleva un control detallado de los gastos comunes.</li>
          <li>📑 <strong>Liquidación de Expensas:</strong> Genera expensas de forma clara y precisa.</li>
        </ul>
      </section>

      {/* Sección de Quiénes Somos */}
      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">¿Quiénes Somos?</h2>
        <p className="text-lg text-gray-700">
          EasyDept está formado por un equipo comprometido en mejorar la gestión de edificios a través de la tecnología. Nos enfocamos en crear soluciones intuitivas y accesibles para todos.
        </p>
      </section>

      {/* Sección de Seguridad */}
      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Seguridad del Sistema</h2>
        <p className="text-lg text-gray-700">
          La seguridad de tus datos es nuestra prioridad. EasyDept implementa las mejores prácticas en protección de datos, cifrado y privacidad para asegurar la integridad de toda la información.
        </p>
      </section>

      {/* Sección de Contacto */}
      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contáctanos</h2>
        <p className="text-lg text-gray-700">
          ¿Tienes alguna consulta o necesitas ayuda? Puedes contactarnos en:
        </p>
        <p className="mt-4 text-custom-green font-semibold">easydept.utn@gmail.com</p>
      </section>

      {/* Botones de Navegación */}
      <footer className="py-8 flex justify-center space-x-4 bg-gray-200">
        <button
          onClick={() => navigate('/registro/admin')}
          className="bg-custom-green text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Registro de Administrador
        </button>
        <button
          onClick={() => navigate('/inicio')}
          className="bg-custom-green text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Iniciar Sesión
        </button>
      </footer>
    </div>
  );
};

export default LandingPage;
