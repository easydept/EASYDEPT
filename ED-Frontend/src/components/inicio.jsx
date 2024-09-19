import React, { useState } from "react"

const Inicio = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

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
    <div className="bg-white relative lg:py-20">
      <div
        className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] bg-custom-green rounded-xl flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
          xl:px-5 lg:flex-row"
      >
        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div className="flex flex-col items-center justify-center relative lg:pr-10">
              <img
                src="logo.png "
                className="w-96 h-auto transition duration-200 hover:opacity-75"
              />
            </div>
          </div>
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10"
            >
              <p className="w-full text-3xl font-custom text-center leading-snug">
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
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md"
                    autoComplete="email"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`absolute top-2 left-4 text-gray-600 font-custom transition-transform transform text-base origin-left ${
                      formData.email
                        ? "-translate-y-10 text-gray-600"
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
                    className="peer border border-gray-300 placeholder-transparent focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white rounded-md"
                    autoComplete="current-password"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className={`absolute top-2 left-4 text-gray-600 font-custom transition-transform transform text-base origin-left ${
                      formData.password
                        ? "-translate-y-10 text-gray-600"
                        : "peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400"
                    }`}
                  >
                    Contraseña
                  </label>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-custom text-center text-white bg-shadow-2xl bg-custom-green rounded-xl transition duration-200 hover:bg-gray-200 ease"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio
