import axios from "axios";

export const getUsuarios = async () => {
    const response = await axios.get(`http://localhost:8080/usuarios`)
    return response.data
  };

export const postUsuarios = async (usuario) => {
  const response = await axios.post(`http://localhost:8080/usuarios`, usuario)};
  