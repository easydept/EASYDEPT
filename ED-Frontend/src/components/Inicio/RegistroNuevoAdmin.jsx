import React, { useState } from 'react';

const RegistroNuevoAdmin = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
  });
  
  const [edificio, setEdificio] = useState({
    nombre: '',
    direccion: '',
    numDepartamentos: '',
    numPisos: '',
  });

  const handleUsuarioChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleEdificioChange = (e) => {
    const { name, value } = e.target;
    setEdificio({ ...edificio, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del Usuario:', usuario);
    console.log('Datos del Edificio:', edificio);
    alert("Formulario enviado. Espera la confirmación del administrador.");
  };

  return (
    <div className="bg-custom-green min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-6xl">
        <h1 className="text-4xl text-center text-custom-green mb-6">Registro Nuevo Administrador</h1>

        <div className="flex flex-col md:flex-row gap-10 w-full">
          {/* Tarjeta Usuario */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 bg-opacity-90">
            <h2 className="w-full text-3xl text-center leading-snug text-custom-green mb-4">Datos del Usuario</h2>
            <form>
              <div className="grid gap-4">
                <input
                  type="text"
                  name="nombre"
                  value={usuario.nombre}
                  onChange={handleUsuarioChange}
                  placeholder="Nombre"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                  required
                />
                <input
                  type="text"
                  name="apellido"
                  value={usuario.apellido}
                  onChange={handleUsuarioChange}
                  placeholder="Apellido"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={usuario.email}
                  onChange={handleUsuarioChange}
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                  required
                />
                <input
                  type="tel"
                  name="telefono"
                  value={usuario.telefono}
                  onChange={handleUsuarioChange}
                  placeholder="Teléfono"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                  required
                />
                <input
                  type="text"
                  name="direccion"
                  value={usuario.direccion}
                  onChange={handleUsuarioChange}
                  placeholder="Dirección"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                  required
                />
              </div>
            </form>
          </div>

          {/* Tarjeta Edificio */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 bg-opacity-90">
            <h2 className="w-full text-3xl text-center leading-snug text-custom-green mb-4">Datos del Edificio</h2>
            <form>
              <div className="grid gap-4">
                <input
                  type="text"
                  name="nombre"
                  value={edificio.nombre}
                  onChange={handleEdificioChange}
                  placeholder="Nombre del Edificio"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                  required
                />
                <input
                  type="text"
                  name="direccion"
                  value={edificio.direccion}
                  onChange={handleEdificioChange}
                  placeholder="Dirección del Edificio"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                  required
                />
                <input
                  type="number"
                  name="numDepartamentos"
                  value={edificio.numDepartamentos}
                  onChange={handleEdificioChange}
                  placeholder="Número de Departamentos"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                  required
                />
                <input
                  type="number"
                  name="numPisos"
                  value={edificio.numPisos}
                  onChange={handleEdificioChange}
                  placeholder="Número de Pisos"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        
        {/* Botón de Enviar */}
        <div className="w-full max-w-6xl mt-8 flex justify-center">
          <button
            onClick={handleSubmit}
            className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl text-center text-white bg-custom-green rounded-xl transition duration-200 hover:bg-custom-green-dark ease-in-out transform hover:scale-105"
          >
            Enviar Solicitud
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistroNuevoAdmin;
