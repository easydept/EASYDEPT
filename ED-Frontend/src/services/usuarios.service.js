import axios from "axios";

export const getUsuarios = async () => {
    const response = await axios.get(`http://localhost:8080/usuarios`)
    return response.data
};

export const postUsuarios = async (usuario) => {
  const response = await axios.post(`http://localhost:8080/usuarios`, usuario)
};

export const tieneRolInquilino = async (usuario) => {
    const response = await axios.get(`http://localhost:8080/permisos`, usuario)
    return response.data
};

export const tieneRolPropietario = async (usuario) => {
    const response = await axios.get(`http://localhost:8080/permisos`, usuario)
    return response.data
};