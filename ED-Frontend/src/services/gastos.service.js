import axios from "axios";

export const getGastos = async () => {
    const response = await axios.get(`http://localhost:8080/gastos`)
    console.log(response.data)
    return response.data
  };

  export const postGasto = async (gasto) => {
    const response = await axios.post(`http://localhost:8080/gastos`, gasto)
    return response.data;
  };