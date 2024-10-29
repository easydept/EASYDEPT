import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import { HiUserGroup } from "react-icons/hi";
import { ImBriefcase } from "react-icons/im";
import { FaKey } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null); // Estado para controlar qué tarjeta está activa

  // Datos de las tarjetas
  const cardData = [
    {
      id: 1,
      title: "Administrador",
      description: "Gestiona todo el sistema y coordina las actividades de los propietarios e inquilinos.",
      icon: <ImBriefcase className="w-16 h-16 mb-4" />,
      functions: [
        "📢 Comunicación",
        "⚠️ Atención de Reclamos",
        "🏢 Organización de Departamentos",
        "💰 Registro de Gastos",
        "📑 Liquidación de Expensas"
      ]
    },
    {
      id: 2,
      title: "Propietario",
      description: "Visualiza sus propiedades y expensas, y se mantiene informado sobre su estado.",
      icon: <HiUserGroup className="w-16 h-16 mb-4" />,
      functions: [
        "🏡 Ver Propiedades",
        "💬 Comunicación con Administrador",
        "📊 Consulta de Expensas"
      ]
    },
    {
      id: 3,
      title: "Inquilino",
      description: "Consulta reclamos y mantiene comunicación directa con el administrador y propietarios.",
      icon: <FaKey className="w-16 h-16 mb-4" />,
      functions: [
        "📞 Reportar Problemas",
        "💬 Comunicar Necesidades",
        "📝 Consultar Contrato"
      ]
    }
  ];

  return (
    <div className="bg-white font-montserrat text-gray-800">
      {/* Navbar sin loggeo */}
      <Navbar isLoggedIn={false} />

      {/* Sección de Encabezado */}
      <header className="min-h-screen bg-white flex items-center justify-center">
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] bg-opacity-100 bg-custom-green rounded-xl flex flex-col lg:flex-row items-center justify-between p-4 w-full min-h-[670px] max-w-[1500px] xl:px-5">
          {/* Columna de Texto */}
          <div className="flex-1 flex flex-col items-center justify-center p-4 text-white">
            <p className="text-4xl mb-6 transition duration-300 transform hover:scale-105 font-semibold text-center">
              Gestión simplificada para Administradores de Edificios
            </p>
          </div>

          {/* Columna de Imagen */}
          <div className="flex-1 flex justify-center items-center p-4">
            <img
              src="logo.png"
              alt="Logo"
              className="max-w-[90%] h-auto transition duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
      </header>

{/* Sección de Usuarios */}
<section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 text-center">
  <h2 className="text-3xl font-semibold mb-6">Usuarios en EasyDept</h2>
  <p className="text-lg mb-10">
    EasyDept ofrece un sistema de gestión donde interactúan tres tipos de usuarios:
  </p>

  {/* Contenedor de las tarjetas */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
    {cardData.map((card) => (
      <div
        key={card.id}
        className="relative bg-custom-green text-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105 cursor-pointer h-72" // Aumentada la altura a 'h-72'
        onClick={() => setActiveCard(activeCard === card.id ? null : card.id)} // Alterna el estado activo
      >
        <div className="flex flex-col items-center justify-center h-full"> {/* Añadido 'justify-center' para centrar verticalmente */}
          {activeCard === card.id ? (
            <>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-lg text-center">{card.description}</p>
              <ul className="mt-4 text-left">
                {card.functions.map((func, index) => (
                  <li key={index}>{func}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              {card.icon}
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-lg text-center">Haz clic para ver más</p> {/* Mensaje indicativo */}
            </>
          )}
        </div>
      </div>
    ))}
  </div>
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
        <p className="mt-4 text-custom-green font-bold">contacto@easydept.com</p>
      </section>
    </div>
  );
};

export default LandingPage;
