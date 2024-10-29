import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getDepartamentosPorEdificio } from "../../services/departamentos.service";
import { getEdificiosById } from "../../services/edificios.service";

const Building = () => {
  const { idEdificioSelec } = useParams();
  const idEdificio = idEdificioSelec.split(':')[1];
  const [departamentos, setDepartamentos] = useState([]);
  const [edificio, setEdificio] = useState();

  const fetchDepartamentos = async () => {
    const data = await getDepartamentosPorEdificio(idEdificio);
    setDepartamentos(data);
  };

  const fetchEdificio = async () => {
    const data = await getEdificiosById(idEdificio);
    setEdificio(data);
  };

  useEffect(() => {
    fetchEdificio();
    fetchDepartamentos();
  }, []);

  // Crea una matriz para representar el edificio
  const edificioMatrix = () => {
    if (!edificio) return [];

    const unidadesPorPiso = Math.ceil(edificio.cantidadUnidades / edificio.cantidadPisos);
    const matrix = Array.from({ length: edificio.cantidadPisos }, () => []);

    departamentos.forEach((dept, index) => {
      const piso = Math.floor(index / unidadesPorPiso);
      if (piso < edificio.cantidadPisos) {
        matrix[piso].push(dept);
      }
    });

    return matrix;
  };

  const edificioGrid = edificioMatrix();

  return (
    <div className="p-7 bg-gray-200 rounded-lg">
      {edificioGrid.map((fila, index) => (
        <div key={index} className="grid grid-cols-4 gap-x-1 gap-y-1">
          {fila.map((dept, colIndex) => (
            <div
              key={colIndex}
              className={`flex items-center justify-center w-24 h-32 rounded-lg m-3 ${dept ? 'bg-custom-green' : 'bg-gray-300'}`}
            >
              {dept ? dept.idDepartamento : 'Vacío'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Building;

