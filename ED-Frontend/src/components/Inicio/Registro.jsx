import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    email: "",
    password: "",
    passwordConfirmar: "",
    rol: "",
  })

  const [error, setError] = useState("") // Estado para manejar errores
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCreateAccount = () => {
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {
      nombre,
      apellido,
      fechaNacimiento,
      email,
      password,
      passwordConfirmar,
      rol,
    } = formData

    // Validación de campos
    if (
      !nombre ||
      !apellido ||
      !fechaNacimiento ||
      !email ||
      !password ||
      !passwordConfirmar ||
      !rol
    ) {
      setError("Todos los campos son obligatorios.")
      return
    }

    // Validación de contraseñas
    if (password !== passwordConfirmar) {
      setError("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.")
      return
    }

    // Aquí puedes agregar más validaciones, como la del email y la longitud de la contraseña

    // Si todas las validaciones pasan
    console.log("Form Data:", {
      ...formData,
      password: formData.password,
    })
    setError("") // Limpia el error si todo es correcto
    navigate("/") // Redirigir al inicio después de crear la cuenta
  }

  return (
    <div className="bg-white relative lg:py-6">
      <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] bg-opacity-100 bg-custom-green rounded-xl flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto w-full h-[750px] max-w-[1400px] xl:px-5 lg:flex-row">
        <div className="flex flex-col w-full pt-0 pr-10 pb-0 pl-10 lg:pt-0">
          <div className="w-full font-montserrat">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 pr-6 pb-6 pl-6 bg-white bg-opacity-90 shadow-2xl rounded-xl relative z-10"
              autoComplete="off"
            >
              <p className="col-span-2 w-full text-2xl text-center leading-snug text-custom-green">
                Crea una cuenta
              </p>
              {/* Mostrar mensaje de error */}
              {error && (
                <p className="col-span-2 w-full inline-block mt-4 pt-2 pr-4 pb-2 pl-4 text-sm text-center text-red-500 bg-white border border-red-500 rounded-md">
                  {error}
                </p>
              )}

              {/* Campo Nombre */}
              <div className="relative">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  id="nombre"
                  className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-2 pr-2 pb-2 pl-2 mt-2 text-sm block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                  placeholder=""
                  autoComplete="off"
                />
                <label
                  htmlFor="nombre"
                  className="absolute top-2 left-2 text-gray-600 transition-transform transform text-sm origin-left -translate-y-8 text-custom-green"
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
                  className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-2 pr-2 pb-2 pl-2 mt-2 text-sm block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                  placeholder=""
                  autoComplete="off"
                />
                <label
                  htmlFor="apellido"
                  className="absolute top-2 left-2 text-gray-600 transition-transform transform text-sm origin-left -translate-y-8 text-custom-green"
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
                  className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-2 pr-2 pb-2 pl-2 mt-2 text-sm block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                  placeholder=""
                  autoComplete="off"
                />
                <label
                  htmlFor="fechaNacimiento"
                  className="absolute top-2 left-2 text-gray-600 transition-transform transform text-sm origin-left -translate-y-8 text-custom-green"
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
                  className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-2 pr-2 pb-2 pl-2 mt-2 text-sm block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                  placeholder=""
                  autoComplete="off"
                />
                <label
                  htmlFor="email"
                  className="absolute top-2 left-2 text-gray-600 transition-transform transform text-sm origin-left -translate-y-8 text-custom-green"
                >
                  Email
                </label>
              </div>

              {/* Campo password */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-2 pr-2 pb-2 pl-2 mt-2 text-sm block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                  placeholder=""
                  autoComplete="off"
                />
                <label
                  htmlFor="password"
                  className="absolute top-2 left-2 text-gray-600 transition-transform transform text-sm origin-left -translate-y-8 text-custom-green"
                >
                  Contraseña
                </label>
              </div>

              {/* Campo Confirmar password */}
              <div className="relative">
                <input
                  type="password"
                  name="passwordConfirmar"
                  value={formData.passwordConfirmar}
                  onChange={handleChange}
                  id="passwordConfirmar"
                  className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-2 pr-2 pb-2 pl-2 mt-2 text-sm block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                  placeholder=""
                  autoComplete="off"
                />
                <label
                  htmlFor="passwordConfirmar"
                  className="absolute top-2 left-2 text-gray-600 transition-transform transform text-sm origin-left -translate-y-8 text-custom-green"
                >
                  Confirmar contraseña
                </label>
              </div>

              {/* Campo Selección de Rol */}
              <div className="relative col-span-2">
                <select
                  name="rol"
                  value={formData.rol}
                  onChange={handleChange}
                  id="rol"
                  className="peer border border-gray-300 focus:outline-none focus:border-black w-full pt-2 pr-2 pb-2 pl-2 mt-2 text-sm block bg-white rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-custom-green"
                >
                  <option value="">Selecciona un rol</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Propietario">Propietario</option>
                  <option value="Inquilino">Inquilino</option>
                </select>
                <label
                  htmlFor="rol"
                  className="absolute top-2 left-2 text-gray-600 transition-transform transform text-sm origin-left -translate-y-8 text-custom-green"
                >
                  Selecciona un rol
                </label>
              </div>

              {/* Botón Registrarse */}
              <div className="relative col-span-2">
                <button
                  type="submit"
                  className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl text-center text-white bg-custom-green rounded-xl transition duration-200 hover:bg-custom-green-dark ease-in-out transform hover:scale-102"
                >
                  Registrarse
                </button>
                <button
                  type="button"
                  onClick={handleCreateAccount}
                  className="w-full inline-block mt-4 pt-2 pr-4 pb-2 pl-4 text-sm text-center text-custom-green bg-white border border-custom-green rounded-md transition duration-200 hover:bg-custom-green hover:text-white"
                >
                  ¿Ya tienes cuenta? Inicia sesión aquí
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro
