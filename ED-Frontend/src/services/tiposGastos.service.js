import axios from "axios";

export const getTiposGastos = async () => {
    const response = await axios.get(`http://localhost:8080/tipos/gastos`)
    console.log(response.data)
    return response.data
  };

  export const postTipoGasto = async (tipoGasto) => {
    const response = await axios.post(`http://localhost:8080/tipos/gastos`, tipoGasto)
    return response.data;
  };