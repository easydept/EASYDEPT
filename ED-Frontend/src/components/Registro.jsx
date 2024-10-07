import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    email: "",
    contraseña: "",
    contraseñaConfirmar: "",
    rol: "", // Valor por defecto
  });

  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    const { nombre, apellido, fechaNacimiento, email, contraseña, contraseñaConfirmar } = formData;

    if (!nombre || !apellido || !fechaNacimiento || !email || !contraseña || !contraseñaConfirmar) {
      alert("Todos los campos son obligatorios.");
      return; // Termina la función si hay campos vacíos
    }

    // Validar las contraseñas
    if (contraseña === contraseñaConfirmar) {
      console.log("Form Data:", {
        ...formData,
        contraseña: formData.contraseña, // Solo incluye la contraseña válida
      });
      // Aquí puedes agregar la lógica para registrar al usuario, etc.
    } else {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="bg-white relative lg:py-6">
      <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] bg-opacity-100 bg-custom-green rounded-xl flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white bg-opacity-90 shadow-2xl rounded-xl relative z-10"
              autoComplete="off"
            >
              <p className="w-full text-3xl font-custom text-center leading-snug text-custom-green">
                Crea una cuenta
              </p>
              <div className="w-full mt-6 space-y-11">
                {/* Campo Nombre */}
                <div className="relative">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    id="nombre"
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                    placeholder=""
                    autoComplete="off"
                  />
                  <label
                    htmlFor="nombre"
                    className={`absolute top-2 left-2 text-gray-600 font-custom transition-transform transform text-base origin-left -translate-y-10 text-custom-green`}
                  >
                    Nombre
                  </label>
                </div>

                {/* Campo Apellido */}
                <div className="relative">
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    id="apellido"
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                    placeholder=""
                    autoComplete="off"
                  />
                  <label
                    htmlFor="apellido"
                    className={`absolute top-2 left-2 text-gray-600 font-custom transition-transform transform text-base origin-left -translate-y-10 text-custom-green`}
                  >
                    Apellido
                  </label>
                </div>

                {/* Campo Fecha de Nacimiento */}
                <div className="relative">
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    id="fechaNacimiento"
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                    placeholder=""
                    autoComplete="off"
                  />
                  <label
                    htmlFor="fechaNacimiento"
                    className={`absolute top-2 left-2 text-gray-600 font-custom transition-transform transform text-base origin-left -translate-y-10 text-custom-green`}
                  >
                    Fecha de nacimiento
                  </label>
                </div>

                {/* Campo Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                    placeholder=""
                    autoComplete="off"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute top-2 left-2 text-gray-600 font-custom transition-transform transform text-base origin-left -translate-y-10 text-custom-green`}
                  >
                    Email
                  </label>
                </div>

                {/* Campo Contraseña */}
                <div className="relative">
                  <input
                    type="password"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    id="contraseña"
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                    placeholder=""
                    autoComplete="off"
                  />
                  <label
                    htmlFor="contraseña"
                    className={`absolute top-2 left-2 text-gray-600 font-custom transition-transform transform text-base origin-left -translate-y-10 text-custom-green`}
                  >
                    Contraseña
                  </label>
                </div>

                {/* Campo Confirmar Contraseña */}
                <div className="relative">
                  <input
                    type="password"
                    name="contraseñaConfirmar"
                    value={formData.contraseñaConfirmar}
                    onChange={handleChange}
                    id="contraseñaConfirmar"
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                    placeholder=""
                    autoComplete="off"
                  />
                  <label
                    htmlFor="contraseñaConfirmar"
                    className={`absolute top-2 left-2 text-gray-600 font-custom transition-transform transform text-base origin-left -translate-y-10 text-custom-green`}
                  >
                    Confirmar Contraseña
                  </label>
                </div>

                {/* Campo Selección de Rol */}
                <div className="relative">
                  <select
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    id="rol"
                    className="peer border border-gray-300 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                  >
                    <option value="Administrador">Administrador</option>
                    <option value="Propietario">Propietario</option>
                    <option value="Inquilino">Inquilino</option>
                  </select>
                  <label
                    htmlFor="rol"
                    className={`absolute top-2 left-2 text-gray-600 font-custom transition-transform transform text-base origin-left -translate-y-10 text-custom-green`}
                  >
                    Selecciona un rol
                  </label>
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-custom text-center text-white bg-custom-green rounded-xl transition duration-200 hover:bg-custom-green-dark ease-in-out transform hover:scale-105"
                  >
                    Registrate
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCreateAccount}
                className="w-full inline-block mt-4 pt-2 pr-4 pb-2 pl-4 text-sm font-custom text-center text-custom-green bg-white border border-custom-green rounded-md transition duration-200 hover:bg-custom-green hover:text-white"
              >
                ¿Ya tienes una cuenta?
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
