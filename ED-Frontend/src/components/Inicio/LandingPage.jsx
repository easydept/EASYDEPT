import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import { HiUserGroup } from "react-icons/hi";
import { ImBriefcase } from "react-icons/im";
import { FaKey, FaLightbulb, FaTools, FaBrain, FaChartLine, FaMoneyBillWave, FaLock } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null); // Estado para controlar qué tarjeta está activa

  const adminActions1 = [
    { 
      id: 1, 
      title: "Comunicación", 
      description: (
        <>
          Mantén una comunicación efectiva<br /> 
          tanto con propietarios como inquilinos.
        </>
      ),
      icon: <FaLightbulb style={{ color: '#004d29' }} /> 
    },
    { 
      id: 2, 
      title: "Eficiencia", 
      description: (
        <>
          Resuelve los problemas<br /> 
          de manera eficiente.
        </>
      ),
      icon: <FaTools style={{ color: '#004d29' }} /> 
    },
    { 
      id: 3, 
      title: "Organización", 
      description: (
        <>
          Administra tus edificios y<br /> 
          gestiona unidades fácilmente.
        </>
      ),
      icon: <FaBrain style={{ color: '#004d29' }} /> 
    }
  ];
  
  const adminActions2 = [
    { 
      id: 4, 
      title: "Beneficio", 
      description: (
        <>
          Lleva un control detallado<br /> 
          de los gastos comunes.
        </>
      ),
      icon: <FaChartLine style={{ color: '#004d29' }} /> 
    },
    { 
      id: 5, 
      title: "Expensas", 
      description: (
        <>
          Genera la liquidación de las expensas de forma clara<br /> 
          y precisa para tus propietarios e inquilinos.
        </>
      ),
      icon: <FaMoneyBillWave style={{ color: '#004d29' }} /> 
    }
  ];
  
  

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
      <Navbar isLoggedIn={false} />

      <header className="min-h-screen bg-white flex items-center justify-center">
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] bg-opacity-100 bg-custom-green rounded-xl flex flex-col lg:flex-row items-center justify-between p-4 w-full min-h-[670px] max-w-[1500px] xl:px-5">
          <div className="flex-1 flex flex-col items-center justify-center p-4 text-white">
            <p className="text-4xl mb-6 transition duration-300 transform hover:scale-105 font-semibold text-center">
              Gestión simplificada para Administradores de Edificios
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center p-4">
            <img
              src="logo.png"
              alt="Logo"
              className="max-w-[90%] h-auto transition duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
      </header>

{/* Ver como hacer que este blob sea parte del fondo
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F3F4F6" d="M53.1,-67.6C67.5,-62.6,77,-45.3,78.6,-28.4C80.3,-11.4,74,5.3,66,18.8C58,32.2,48.1,42.5,36.8,48.2C25.5,53.9,12.8,55.1,-0.8,56.3C-14.5,57.5,-28.9,58.6,-42.2,53.5C-55.6,48.4,-67.7,37.2,-68.5,24.7C-69.3,12.1,-58.7,-1.7,-54.3,-18.4C-50,-35.1,-51.9,-54.7,-43.9,-61.7C-35.9,-68.8,-18,-63.4,0.7,-64.3C19.3,-65.3,38.7,-72.5,53.1,-67.6Z" transform="translate(100 100)" />
</svg>*/}

      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">¿Quiénes Somos?</h2>
        <p className="text-lg text-gray-700">
          EasyDept está formado por un equipo comprometido en mejorar la gestión de edificios a través de la tecnología. Nos enfocamos en crear soluciones intuitivas y accesibles para todos.
        </p>
      </section>

      <div className="my-8"></div> {/* Separador */}

      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Usuarios en EasyDept</h2>
        <p className="text-lg mb-10">
          EasyDept ofrece un sistema de gestión donde interactúan tres tipos de usuarios:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="relative bg-custom-green text-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105 cursor-pointer h-72"
              onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
            >
              <div className="flex flex-col items-center justify-center h-full">
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
                    <p className="text-lg text-center">Haz clic para ver más</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-8"></div> {/* Separador */}

      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Acciones del Administrador</h2>
        <p className="text-lg mb-6">
          Como administrador, puedes realizar múltiples tareas para facilitar la gestión de edificios:
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminActions1.map((action) => (
              <div 
                key={action.id} 
                className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 min-h-[200px] flex flex-col justify-between"
                style={{
                  border: '2px solid #004d29',
                  borderRadius: '8px',
                }}
              >
                <div className="flex justify-center items-center mb-4 text-4xl">{action.icon}</div>
                <h3 className="font-semibold text-lg">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {adminActions2.map((action) => (
              <div 
                key={action.id} 
                className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 min-h-[200px] flex flex-col justify-between"
                style={{
                  border: '2px solid #004d29',
                  borderRadius: '8px',
                }}
              >
                <div className="flex justify-center items-center mb-4 text-4xl">{action.icon}</div>
                <h3 className="font-semibold text-lg">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="my-8"></div> {/* Separador */}

      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Seguridad del Sistema</h2>
        <div className="flex justify-center items-center mb-4">
          <FaLock />
        </div>
        <p className="text-lg text-gray-700">
          Nos comprometemos con la seguridad y privacidad de los datos de nuestros usuarios, implementando las mejores prácticas para proteger la información de tu edificio.
        </p>
      </section>

      {/* Sección de Contacto */}
      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contáctanos</h2>
        <p className="text-lg text-gray-700">
          ¿Tienes alguna consulta o necesitas ayuda? Puedes contactarnos en:
        </p>
        <p className="mt-4 text-custom-green font-bold">contacto@easydept.com</p>
      </section>
    </div>
  );
}

export default LandingPage;
