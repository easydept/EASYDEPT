import axios from "axios";

export const getEdificios = async () => {
    const response = await axios.get(`http://localhost:8080/edificios`)
    console.log(response.data)
    return response.data
  };