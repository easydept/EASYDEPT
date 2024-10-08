
// const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuario'));

import axios from "axios";

export const autenticarUsuario = async (usuario) => {
    const response = await axios.post("http://localhost:8080/autenticacion/login", usuario)
    return response.data
}




