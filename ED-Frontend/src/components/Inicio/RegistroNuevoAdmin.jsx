import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { FaArrowLeft } from 'react-icons/fa';

const RegistroNuevoAdmin = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    direccion: '',
  });

  const [edificio, setEdificio] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    pais: '',
    numPisos: '',
    numDepartamentos: '',
  });

  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleUsuarioChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleEdificioChange = (e) => {
    const { name, value } = e.target;
    setEdificio({ ...edificio, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (!usuario.nombre || !usuario.apellido || !usuario.email ||
      !usuario.direccion) {
      setError("Todos los campos son obligatorios.");
      return;
  }

    // Validación de teléfono
    if (!usuario.telefono) {
      setError("El número de teléfono es obligatorio.");
      return;
    }

    // Validación de números de departamentos y pisos
    if (edificio.numDepartamentos <= 1 || edificio.numPisos <= 0) {
      setError("Los números de departamentos y pisos deben ser mayores que uno y cero respectivamente.");
      return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(usuario.email)) {
      setError("Por favor, introduce un email válido.");
      return;
}

    console.log('Datos del Usuario:', usuario);
    console.log('Datos del Edificio:', edificio);

    // Aquí es donde agregas tus credenciales de EmailJS
    const serviceID = 'service_vm9pgk2';   // Reemplaza con tu SERVICE_ID
    const templateID = 'template_86uzg4q'; // Reemplaza con tu TEMPLATE_ID
    const userID = 'Qq6nKv0nrBN5eaER2';      // Reemplaza con tu Public Key (USER_ID)

    let formData = {
      nombreUsuario: usuario.nombre,
      apellidoUsuario: usuario.apellido,
      email: usuario.email,
      telefono: usuario.telefono,
      fechaNacimiento: usuario.fechaNacimiento,
      direccionUsuario: usuario.direccion,
      nombreEdificio: edificio.nombre,
      direccionEdificio: edificio.direccion,
      ciudad: edificio.ciudad,
      pais: edificio.pais,
      numPisos: edificio.numPisos,
      numDepartamentos: edificio.numDepartamentos
    };

    console.log(formData)

    emailjs.send(serviceID, templateID, formData, userID)
        .then((response) => {
            alert('Correo enviado con éxito!');
        }, (error) => {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });

    // Limpiar formulario
    formData = {
      nombreUsuario: '',
      apellidoUsuario: '',
      email: '',
      telefono: '',
      fechaNacimiento: '',
      direccionUsuario: '',
      nombreEdificio: '',
      direccionEdificio: '',
      ciudad: '',
      pais: '',
      numPisos: '',
      numDepartamentos: ''
    };

    alert("Formulario enviado. Espera la confirmación del administrador.");
    setError(""); 

  };

  return (
    <div className="bg-custom-green min-h-screen flex items-center justify-center font-montserrat relative">
      {/* Botón de volver */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-6 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 transition duration-200"
      >
        <FaArrowLeft className="text-custom-green" size={20} />
      </button>

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-[90%] md:max-w-[7xl] lg:max-w-[8xl]">
        <h1 className="text-4xl text-center text-custom-green mb-6">Únete a EasyDept</h1>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <p className="text-lg text-center mt-6 mb-4">
          Para ser administrador, completa este formulario con tus datos y la información básica del edificio que deseas registrar. EasyDept analizará tu solicitud y se pondrá en contacto contigo. Una vez aceptado, podrás iniciar sesión con tu usuario y contraseña.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tarjeta Usuario */}
            <div className="bg-white p-6 rounded-lg shadow-lg bg-opacity-90 w-full md:w-1/2">
              <h2 className="w-full text-2xl text-center leading-snug text-custom-green mb-4">Datos del Usuario</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    value={usuario.apellido}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={usuario.email}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={usuario.telefono}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={usuario.fechaNacimiento}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    value={usuario.direccion}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Tarjeta Edificio */}
            <div className="bg-white p-6 rounded-lg shadow-lg bg-opacity-90 w-full md:w-1/2">
              <h2 className="w-full text-2xl text-center leading-snug text-custom-green mb-4">Datos del Edificio</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre del Edificio</label>
                  <input
                    type="text"
                    name="nombre"
                    value={edificio.nombre}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Dirección del Edificio</label>
                  <input
                    type="text"
                    name="direccion"
                    value={edificio.direccion}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Ciudad</label>
                  <input
                    type="text"
                    name="ciudad"
                    value={edificio.ciudad}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">País</label>
                  <input
                    type="text"
                    name="pais"
                    value={edificio.pais}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Número de Pisos</label>
                  <input
                    type="number"
                    name="numPisos"
                    value={edificio.numPisos}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Número de Departamentos</label>
                  <input
                    type="number"
                    name="numDepartamentos"
                    value={edificio.numDepartamentos}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                    min="1"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-custom-green text-white p-3 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistroNuevoAdmin;
