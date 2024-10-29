import axios from "axios";

export const getLiquidacionesExpensas = async () => {
    const response = await axios.get(`http://localhost:8080/liquidaciones/expensas`)
    console.log(response.data)
    return response.data
  };

  export const postLiquidacionExpensas = async (liquidacionExpensas) => {
    const response = await axios.post(`http://localhost:8080/liquidaciones/expensas`, liquidacionExpensas)
    return response.data;
  };