import axios from "axios";

export const getEdificios = async () => {
    const response = await axios.get(`http://localhost:8080/edificios`)
    console.log(response.data)
    return response.data
  };

  export const getEdificiosAdmin = async (idAdmin) => {
    const response = await axios.get(`http://localhost:8080/edificios/admin/${idAdmin}`)
    console.log(response.data)
    return response.data
  };
  export const postEdificio = async (edificio) => {
    const response = await axios.post(`http://localhost:8080/edificios`, edificio)
    return response.data;
  };

  export const getEdificiosById = async (id) => {
    const response = await axios.get(`http://localhost:8080/edificios/${id}`);
    return response.data
  };

  export const deleteEdificio = async (id) => {
    const response = await axios.delete(`http://localhost:8080/edificios/${id}`);
    return response.data
  };