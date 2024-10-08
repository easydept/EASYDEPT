import axios from "axios";

export const getRoles = async () => {
    const response = await axios.get(`http://localhost:8080/roles`)
    console.log(response.data)
    return response.data
  };

  export const postRol = async (rol) => {
    const response = await axios.post(`http://localhost:8080/roles`, rol)
    return response.data;
  };