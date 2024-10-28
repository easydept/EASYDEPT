import axios from "axios";

export const getExpensas = async () => {
    const response = await axios.get(`http://localhost:8080/expensas`)
    console.log(response.data)
    return response.data
  };

  export const postExpensas = async (expensas) => {
    const response = await axios.post(`http://localhost:8080/expensas`, expensas)
    return response.data;
  };