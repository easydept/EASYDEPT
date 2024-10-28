import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUsuarios } from '../../services/usuarios.service';
import { FaArrowLeft } from 'react-icons/fa'; // Importar un icono de flecha, asegúrate de tener react-icons instalado

const RegistroNuevoAdmin = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    fechaNacimiento: '',
    passwordConfirmar: '',
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
        !usuario.direccion || !usuario.password || !usuario.passwordConfirmar) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Validación de contraseñas
    if (usuario.password !== usuario.passwordConfirmar) {
      setError("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    // Validación de teléfono
    if (!usuario.telefono) {
      setError("El número de teléfono es obligatorio.");
      return;
    }

    // Validación de números de departamentos y pisos
    if (edificio.numDepartamentos <= 0 || edificio.numPisos <= 0) {
      setError("Los números de departamentos y pisos deben ser mayores que cero.");
      return;
    }

    console.log('Datos del Usuario:', usuario);
    console.log('Datos del Edificio:', edificio);
    alert("Formulario enviado. Espera la confirmación del administrador.");
    setError(""); 

    // Llamada para crear el usuario
    // try {
    //   const response = await postUsuarios(usuarioACrear);
    //   console.log('Usuario creado:', response);
    //   navigate('/'); 
    // } catch (err) {
    //   setError("Error al crear la cuenta.");
    // }
  };

  return (
    <div className="bg-custom-green min-h-screen flex items-center justify-center font-montserrat relative">
      {/* Botón de volver */}
      <button
        onClick={() => navigate('/')} // Cambia '/ruta-deseada' por la ruta que quieras
        className="absolute top-4 left-4 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 transition duration-200"
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
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    value={usuario.password}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
                  <input
                    type="password"
                    name="passwordConfirmar"
                    value={usuario.passwordConfirmar}
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
                    min="1"
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
