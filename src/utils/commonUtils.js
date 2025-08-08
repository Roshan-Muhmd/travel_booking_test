import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  }
})

export const addData = async(data,module) => {
  const addDataRes = await axiosInstance.post(`${process.env.REACT_APP_API_URL}${module}`,data)

  if(addDataRes?.data){
    return addDataRes?.data
  }
  return false
}