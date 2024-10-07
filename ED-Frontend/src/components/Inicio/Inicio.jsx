import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rol: "",
  });

  const [error, setError] = useState(""); // Estado para manejar mensajes de error
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/registro");
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

    // Validaciones de campos
    if (!formData.email || !formData.password || !formData.rol) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setError(""); // Resetea el error si todo está correcto
    console.log("Form Data:", formData);
    navigate("/home");
    // Aquí podrías agregar la lógica para la autenticación del usuario
  };

  return (
    <div className="bg-white relative lg:py-6">
      <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] bg-opacity-100 bg-custom-green rounded-xl flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto w-full h-[750px] max-w-[1400px] xl:px-5 lg:flex-row">
        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div className="flex flex-col items-center justify-center relative lg:pr-10">
              <img
                src="logo.png"
                alt="Logo"
                className="w-3/4 h-auto transition duration-500 ease-in-out transform hover:scale-130"
              />
            </div>
          </div>
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12 font-montserrat">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white bg-opacity-90 shadow-2xl rounded-xl relative z-10"
            >
              <p className="w-full text-3xl text-center leading-snug text-custom-green">
                Iniciar sesión
              </p>

              {/* Mensaje de error */}
              {error && (
                <p className="col-span-2 w-full inline-block mt-4 pt-2 pr-4 pb-2 pl-4 text-sm text-center text-red-500 bg-white border border-red-500 rounded-md">
                  {error}</p>
              )}

              <div className="w-full mt-6 space-y-11">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                    autoComplete="email"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`absolute top-2 left-4 text-gray-600 transition-transform transform text-base origin-left ${
                      formData.email
                        ? "-translate-y-10 text-custom-green"
                        : "peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400"
                    }`}
                  >
                    Correo
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    id="password"
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                    autoComplete="current-password"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className={`absolute top-2 left-4 text-gray-600 transition-transform transform text-base origin-left ${
                      formData.password
                        ? "-translate-y-10 text-custom-green"
                        : "peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400"
                    }`}
                  >
                    Contraseña
                  </label>
                </div>
                <div className="relative">
                  <select
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    id="rol"
                    className="peer border border-gray-300 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                  >
                    <option value="" disabled>
                      Selecciona un rol
                    </option>
                    <option value="Administrador">Administrador</option>
                    <option value="Propietario">Propietario</option>
                    <option value="Inquilino">Inquilino</option>
                  </select>
                  <label
                    htmlFor="rol"
                    className="absolute top-1 left-2 text-gray-600 transition-transform transform text-base origin-left -translate-y-8 text-custom-green"
                  >
                    Selecciona el rol con el que quieres acceder
                  </label>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl text-center text-white bg-custom-green rounded-xl transition duration-200 hover:bg-custom-green-dark ease-in-out transform hover:scale-105"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCreateAccount}
                className="w-full inline-block mt-4 pt-2 pr-4 pb-2 pl-4 text-sm text-center text-custom-green bg-white border border-custom-green rounded-md transition duration-200 hover:bg-custom-green hover:text-white"
              >
                Crear cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;