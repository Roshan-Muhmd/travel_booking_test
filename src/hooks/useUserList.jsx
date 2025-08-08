import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/commonUtils'

const useUserList = () => {

const [userList, setUserList] = useState([])

useEffect(() => {
  
(async ()=>{
    const userListres = await axiosInstance.get("/users")
    setUserList(userListres?.data ?? [])
})()

}, [])

const updateUserData = async(id,data) => {
  debugger
    const updateRes = await axiosInstance.patch( `/users/${id} `,data)
    debugger
    if(updateRes?.data){
        setUserList((prv)=>{

          const temp = [...prv]
        const itemindex =  temp.findIndex((user)=> user?.id === updateRes?.data?.id)
        if(itemindex >= 0){
         temp[itemindex] = updateRes?.data
        }
debugger
        return temp

        })
    }else{
      alert("update failed")
      return false
    }
}


  return {userList,updateUserData}
}

export default useUserList