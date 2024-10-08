import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postEdificio } from "../../services/edificios.service"

const RegistroEdificio = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    pais: "",
    cantidadPisos: "",
    cantidadUnidadesPiso: "",
    fotoUrl: "",
  })

  const navigate = useNavigate()

  const handleCancelarRegistro = () => {
    navigate("/home/administrador")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Aquí es donde puedes agregar la lógica para enviar los datos, por ejemplo, a una API
    const nuevoEdificio = await postEdificio(formData)
    console.log(nuevoEdificio)

    

    // Limpiar formulario
    setFormData({
      nombre: "",
      direccion: "",
      ciudad: "",
      pais: "",
      cantidadPisos: "",
      cantidadUnidadesPiso: "",
      fotoUrl: "",  
    })
  }

  return (
    <div className="container mx-auto font-montserrat">
      <div className="w-full font-montserrat">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 pr-6 pb-6 pl-6 shadow-2xl rounded-xl relative z-10"
        >
          <p className="col-span-2 w-full text-2xl text-center leading-snug text-custom-green">
            Registrar Nuevo Edificio
          </p>

          {/* Campo: nombre del edificio */}
          <div className="relative text-sm">
            <label className="block mb-0.5" htmlFor="nombre">
              Nombre del Edificio
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Campo: dirección */}
          <div className="relative text-sm">
            <label className="block text-gray-700 mb-0.5" htmlFor="direccion">
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Campo: ciudad */}
          <div className="relative text-sm">
            <label className="block text-gray-700 mb-0.5" htmlFor="ciudad">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Campo: país */}
          <div className="relative text-sm">
            <label className="block text-gray-700 mb-0.5" htmlFor="pais">
              País
            </label>
            <input
              type="text"
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Campo: cantidad de pisos */}
          <div className="relative text-sm">
            <label
              className="block text-gray-700 mb-0.5"
              htmlFor="cantidadPisos"
            >
              Cantidad de Pisos
            </label>
            <input
              type="number"
              id="cantidadPisos"
              name="cantidadPisos"
              value={formData.cantidadPisos}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Campo: cantidad de unidades */}
          <div className="relative text-sm">
            <label
              className="block text-gray-700 mb-0.5"
              htmlFor="cantidadUnidadesPiso"
            >
              Cantidad de Unidades
            </label>
            <input
              type="number"
              id="cantidadUnidadesPiso"
              name="cantidadUnidadesPiso"
              value={formData.cantidadUnidadesPiso}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Campo: URL de la foto */}
          <div className="relative col-span-2 text-sm">
            <label className="block text-gray-700 mb-0.5" htmlFor="fotoUrl">
              URL de la Foto
            </label>
            <input
              type="text"
              id="fotoUrl"
              name="fotoUrl"
              value={formData.fotoUrl}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="relative col-span-2">
            <button
              type="submit"
              className="w-full inline-block pt-3 pr-5 pb-3 pl-5 text-md text-center text-white bg-custom-green rounded-xl transition duration-200 hover:bg-custom-green-dark ease-in-out transform hover:scale-102"
            >
              Registrar Edificio
            </button>
            <button
              type="button"
              onClick={handleCancelarRegistro}
              className="w-full text-sm inline-block mt-4 pt-2 pr-4 pb-2 pl-4 text-sm text-center text-custom-green bg-white border border-custom-green rounded-md transition duration-200 hover:bg-custom-green hover:text-white"
            >
              Cancelar carga
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistroEdificio
