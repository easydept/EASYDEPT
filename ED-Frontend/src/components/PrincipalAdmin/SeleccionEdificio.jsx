import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { getEdificiosAdmin } from "../../services/edificios.service.js";

const SeleccionEdificio = () => {
  const navigate = useNavigate(); // Agregado para navegación
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [edificios, setEdificios] = useState([]);
  const [nombreAdmin, setNombreAdmin] = useState("");

  const fetchEdificios = async () => {
    const idUsuario = sessionStorage.getItem("idUsuario");
    const data = await getEdificiosAdmin(idUsuario);
    setEdificios(data);
  };

  const handleCreateBuild = () => {
    // Navegar a la página para crear un nuevo edificio
    navigate("/edificios");
  };

  const handleOpenBuild = (idEdificioSelec) => {
    navigate(`/home/administrador/edificio/:${idEdificioSelec}`);
  };
  useEffect(() => {
    fetchEdificios();
    const nombre = sessionStorage.getItem("nombre");
    const apellido = sessionStorage.getItem("apellido");
    setNombreAdmin(nombre + " " + apellido);
  }, []);

  return (
    <div className="container mx-auto p-5 font-montserrat">
      <h2 className="text-xl text-center mb-5">
        Edificios administrados por {nombreAdmin}
      </h2>
      <Slider {...settings}>
        {edificios.map((edificio) => (
          <button
            key={edificio.idEdificio}
            type="button"
            className="transition duration-200 ease-in-out transform hover:scale-102"
            onClick={() => handleOpenBuild(edificio.idEdificio)}
          >
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={edificio.fotoUrl}
                  alt={edificio.nombre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{edificio.nombre}</h3>
                  <p className="text-gray-600">{edificio.direccion}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </Slider>
      <div className="flex justify-end mt-10">
        <button
          type="button" // Cambiar a "button" para evitar comportamiento de submit
          className="bg-custom-green text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          onClick={handleCreateBuild}
        >
          Agregar nuevo edificio a administrar
        </button>
      </div>
    </div>
  );
};

export default SeleccionEdificio;
