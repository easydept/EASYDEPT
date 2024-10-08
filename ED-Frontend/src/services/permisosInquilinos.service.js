import axios from "axios";

export const getPermisosInquilinos = async () => {
    const response = await axios.get(`http://localhost:8080/permisos/inquilinos`)
    console.log(response.data)
    return response.data
  };

  export const postPermisoInquilino = async (permisoInquilino) => {
    const response = await axios.post(`http://localhost:8080/permisos/inquilinos`, permisoInquilino)
    return response.data;
  };



// No estan en el back

//   export const getDepartamentoById = async (id) => {
//     const response = await axios.get(`http://localhost:8080/permisos/inquilinos/${id}`);
//     console.log(response)
//     return response.data
//   };

//   export const deleteDepartamento = async (id) => {
//     const response = await axios.delete(`http://localhost:8080/permisos/inquilinos/${id}`);
//     return response.data
//   };