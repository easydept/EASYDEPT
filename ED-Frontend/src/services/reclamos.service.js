import axios from "axios";

export const getReclamos = async () => {
    const response = await axios.get(`http://localhost:8080/reclamos`)
    console.log(response.data)
    return response.data
  };

  export const postReclamo = async (reclamo) => {
    const response = await axios.post(`http://localhost:8080/reclamos`, reclamo)
    return response.data;
  };