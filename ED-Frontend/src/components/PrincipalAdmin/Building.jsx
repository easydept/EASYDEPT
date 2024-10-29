import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getEdificiosById } from "../../services/edificios.service";
import { getDepartamentosPorEdificio, postDepartamentos } from "../../services/departamentos.service";
import EdificioEstructura from "./EdificioEstructura";
const Building = () => {
  const { idEdificioSelec } = useParams();
  const idEdificio = idEdificioSelec.split(':')[1];
  const [departamentos, setDepartamentos] = useState([]);
  const [edificiosCargados, setEdificiosCargados] = useState(false);
  const [edificio, setEdificio] = useState();
  const [distribucion, setDistribucion] = useState([]);
  const [error, setError] = useState(""); // Estado para manejar el mensaje de error
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  const fetchEdificio = async () => {
    const data = await getEdificiosById(idEdificio);
    setEdificio(data);
  };

  const fetchDepartamentos = async () => {
    const data = await getDepartamentosPorEdificio(idEdificio);
    setDepartamentos(data);
    setEdificiosCargados(data.length > 0);
  };

  const createDeptos = async (departamentos, idEdificio) => {
    const data = await postDepartamentos(departamentos, idEdificio);
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchEdificio();
      await fetchDepartamentos();
      
      // Esperar un tiempo mínimo antes de mostrar el contenido
      setTimeout(() => {
        setIsLoading(false);
      }, 200); // Ajusta el tiempo (500 ms en este caso) según sea necesario
    };

    fetchData();
  }, [idEdificio]);

  // Inicializa la distribución de departamentos en cada piso
  useEffect(() => {
    if (edificio) {
      const initialDistribution = Array.from({ length: edificio.cantidadPisos }, () => 1); // Al menos 1 departamento por piso
      setDistribucion(initialDistribution);
    }
  }, [edificio]);

  const aumentarDeptos = (index) => {
    const totalDeptos = distribucion.reduce((acc, curr) => acc + curr, 0);
    if (totalDeptos < edificio.cantidadUnidades) {
      setDistribucion(prev => {
        const newDistribucion = [...prev];
        newDistribucion[index] += 1;
        return newDistribucion;
      });
    }
  };

  const disminuirDeptos = (index) => {
    setDistribucion(prev => {
      const newDistribucion = [...prev];
      if (newDistribucion[index] > 1) {
        newDistribucion[index] -= 1;
      }
      return newDistribucion;
    });
  };

  const confirmarDistribucion = () => {
    const totalDeptos = distribucion.reduce((acc, curr) => acc + curr, 0);
    if (totalDeptos !== edificio.cantidadUnidades) {
      setError(`La cantidad de departamentos en el edificio es ${edificio.cantidadUnidades}, quedan departamentos sin asignar.`);
    } else {
      setError(""); // Limpiar el error si la validación es exitosa
      const updatedDepartamentos = [];
      distribucion.forEach((numDeptos, pisoIndex) => {
        for (let i = 0; i < numDeptos; i++) {
          const letra = String.fromCharCode(65 + i); // Genera letras A, B, C, ...
          updatedDepartamentos.push({
            unidad: letra,
            numeroPiso: pisoIndex + 1, // Piso 1, 2, 3, ...
          });
        }
      });
      createDeptos(updatedDepartamentos, idEdificio);
    }
  };

  if (isLoading) {
    return <div>Cargando datos...</div>; // Muestra un mensaje de carga mientras espera
  }

  return (
    edificiosCargados ? <EdificioEstructura departamentos={departamentos} edificio={edificio}/> : (<div className="p-7 bg-gray-100 rounded-lg">
      <h2 className="font-bold mb-4">Generar distribución de Departamentos</h2>

      {/* Mostrar mensaje de error si existe */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Distribución por pisos */}
      {distribucion.map((numDeptos, index) => (
        <div key={index} className="flex items-center mb-4 border p-2">
          <h3 className="mr-4">Piso {index + 1}</h3>
          <div className="flex items-center">
            <button 
              onClick={() => disminuirDeptos(index)} 
              className="bg-black text-white px-3 py-1 rounded-l"
            >
              - 
            </button>
            <span className="px-4">{numDeptos}</span>
            <button 
              onClick={() => aumentarDeptos(index)} 
              className="bg-custom-green text-white px-3 py-1 rounded-r"
            >
              + 
            </button>
          </div>
        </div>
      ))}

      <button 
        onClick={confirmarDistribucion} 
        className="bg-custom-green text-white px-4 py-2 rounded mt-4"
      >
        Confirmar
      </button>
    </div>)
  );
};

export default Building;
