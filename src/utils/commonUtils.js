import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/', 
  headers: {
    'Content-Type': 'application/json',
  }
})

export const addData = async(data,module) => {
  const addDataRes = await axiosInstance.post(`/${module}`,data)

  if(addDataRes?.data){
    return addDataRes?.data
  }
  return false
}