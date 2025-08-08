import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  }
})

export const addData = async(data,module) => {
  const addDataRes = await axiosInstance.post(`${import.meta.env.REACT_APP_API_URL}${module}`,data)

  if(addDataRes?.data){
    return addDataRes?.data
  }
  return false
}