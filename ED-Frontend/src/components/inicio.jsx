import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Inicio = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleCreateAccount = () => {
    navigate("/registro") 
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Data:", formData)
  }

  return (
    <div className="bg-white relative lg:py-6">
      <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] bg-opacity-100 bg-custom-green rounded-xl flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div className="flex flex-col items-center justify-center relative lg:pr-10">
              <img
                src="logo.png"
                className="w-96 h-auto transition duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white bg-opacity-90 shadow-2xl rounded-xl relative z-10"
            >
              <p className="w-full text-3xl font-custom text-center leading-snug text-custom-green">
                Iniciar sesión
              </p>
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
                    className={`absolute top-2 left-4 text-gray-600 font-custom transition-transform transform text-base origin-left ${
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
                    className={`absolute top-2 left-4 text-gray-600 font-custom transition-transform transform text-base origin-left ${
                      formData.password
                        ? "-translate-y-10 text-custom-green"
                        : "peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400"
                    }`}
                  >
                    Contraseña
                  </label>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-custom text-center text-white bg-custom-green rounded-xl transition duration-200 hover:bg-custom-green-dark ease-in-out transform hover:scale-105"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCreateAccount}
                className="w-full inline-block mt-4 pt-2 pr-4 pb-2 pl-4 text-sm font-custom text-center text-custom-green bg-white border border-custom-green rounded-md transition duration-200 hover:bg-custom-green hover:text-white"
              >
                Crear cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio
