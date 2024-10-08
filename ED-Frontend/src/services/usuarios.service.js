import axios from "axios";

export const getUsuarios = async () => {
    const response = await axios.get(`http://localhost:8080/usuarios`)
    return response.data
};

export const postUsuarios = async (usuario, rolUsuario) => {
  const response = await axios.post(`http://localhost:8080/usuarios?nombreRol=${rolUsuario}`, usuario)
  return response.data
};


export const getUsuariosPorId = async (id) => {
  const response = await axios.get(`http://localhost:8080/usuarios/${id}`);
  return response.data};

export const tieneRolInquilino = async (usuario) => {
    const response = await axios.get(`http://localhost:8080/permisos`, usuario)
    return response.data
};

export const tieneRolPropietario = async (usuario) => {
    const response = await axios.get(`http://localhost:8080/permisos`, usuario)
    return response.data
};