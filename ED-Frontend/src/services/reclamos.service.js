import axios from "axios";

export const getReclamos = async () => {
    const response = await axios.get(`http://localhost:8080/reclamos`)
    console.log(response.data)
    return response.data
  };

  export const getReclamosPorEdificio = async (idEdificio) => {
    const response = await axios.get(`http://localhost:8080/reclamos/edificio/${idEdificio}`)
    console.log(response.data)
    return response.data
  };

  export const getReclamosFiltrados = async (idEdificio, filtro) => {
    const response = await axios.get(`http://localhost:8080/reclamos/edificio/${idEdificio}/filtro`, {
      params: { filtro }
  });
    console.log(response.data)
    return response.data
  };

  export const postReclamo = async (reclamo) => {
    const response = await axios.post(`http://localhost:8080/reclamos`, reclamo)
    return response.data;
  };

  export const solucionarReclamo = async (idReclamo, solucion) => {
    console.log(`http://localhost:8080/reclamos/solucionar/${idReclamo}`, { resolucion: solucion });
    const response = await axios.patch(`http://localhost:8080/reclamos/solucionar/${idReclamo}`, {
        resolucion: solucion
    });
    return response.data;
};