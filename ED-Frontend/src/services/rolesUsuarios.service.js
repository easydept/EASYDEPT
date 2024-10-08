import axios from "axios";

export const getRolesUsuarios = async () => {
    const response = await axios.get(`http://localhost:8080/roles/usuarios`)
    console.log(response.data)
    return response.data
  };

  export const postRolUsuario = async (rol) => {
    const response = await axios.post(`http://localhost:8080/roles/usuarios`, rol)
    return response.data;
  };