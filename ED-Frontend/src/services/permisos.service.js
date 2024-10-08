import axios from "axios";

export const getPermisos = async () => {
    const response = await axios.get(`http://localhost:8080/permisos`)
    return response.data
  };

export const postPermisos = async (permiso) => {
  const response = await axios.post(`http://localhost:8080/permisos`, permiso)};

