import axios from "axios";

export const getDepartamentos = async () => {
    const response = await axios.get(`http://localhost:8080/departamentos`)
    return response.data
  };

export const getDepartamentosPorEdificio = async (idEdificio) => {
  const response = await axios.get(`http://localhost:8080/departamentos/edificio/${idEdificio}`)
  return response.data
};

  export const postDepartamento = async (departamento) => {
    const response = await axios.post(`http://localhost:8080/departamentos`, departamento)
    return response.data;
  };

  export const postDepartamentos = async (departamentos, idEdificio) => {
    const response = await axios.post(`http://localhost:8080/departamentos/edificio/${idEdificio}`, departamentos)
    return response.data;
  };

  export const getDepartamentoById = async (id) => {
    const response = await axios.get(`http://localhost:8080/departamentos/${id}`);
    return response.data
  };

  export const deleteDepartamento = async (id) => {
    const response = await axios.delete(`http://localhost:8080/departamentos/${id}`);
    return response.data
  };

  export const asignarInquilino = async (idDepartamento, idInquilino) => {
    const response = await axios.patch(`http://localhost:8080/departamentos/${idDepartamento}/asignar-inquilino/${idInquilino}`);
    return response.data
  }

  export const asignarPropietario = async (idDepartamento, idPropietario) => {
    const response = await axios.patch(`http://localhost:8080/departamentos/${idDepartamento}/asignar-propietario/${idPropietario}`);
    return response.data
  }
