import axios from "axios";

export const getDepartamentos = async () => {
    const response = await axios.get(`http://localhost:8080/departamentos`)
    console.log(response.data)
    return response.data
  };

  export const postDepartamento = async (departamento) => {
    const response = await axios.post(`http://localhost:8080/departamentos`, departamento)
    return response.data;
  };

  export const getDepartamentoById = async (id) => {
    const response = await axios.get(`http://localhost:8080/departamentos/${id}`);
    console.log(response)
    return response.data
  };

  export const deleteDepartamento = async (id) => {
    const response = await axios.delete(`http://localhost:8080/departamentos/${id}`);
    return response.data
  };