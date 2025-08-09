import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  }
})

export const addData = async(data,module) => {
  const addDataRes = await axiosInstance.post(`${module}`,data)

  if(addDataRes?.data){
    return addDataRes?.data
  }
  return false
}

export const deleteData = async(id,module) => {
  const deleteDataRes = await axiosInstance.delete(`${module}/${id}`)

  if(deleteDataRes?.data){
    return deleteDataRes?.data
  }
  return false
}

export const assembleCommonData = (data) => {
  
  const totalBookings  = {flight: data?.flightBookings?.length || 0, hotel: data?.hotelBookings?.length || 0}
  const revenue = data?.flightBookings?.concat(data?.hotelBookings).reduce((acc,item)=>{
    return acc += item?.price ?? 0
  },0)
  return {users:data?.users?.length ?? 0,revenue,bookings:totalBookings}
}
