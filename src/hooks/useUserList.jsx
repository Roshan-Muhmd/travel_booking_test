import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/commonUtils'
import { useDispatch, useSelector } from 'react-redux'
import { setCommonData } from '../redux/commonSlice'

const useUserList = () => {

/* const [userList, setUserList] = useState([]) */
const userList = useSelector((state)=>state?.common?.users)

const dispatch = useDispatch()

useEffect(() => {
  
(async ()=>{

  
  if(!userList){
    const userListres = await axiosInstance.get("/users")
    /* setUserList(userListres?.data ?? []) */
    dispatch(setCommonData({users:userListres?.data}))
  }
    
})()

}, [])

const updateUserData = async(id,data) => {
  
    const updateRes = await axiosInstance.patch( `/users/${id} `,data)
    
    if(updateRes?.data){

       const temp = [...userList]
        const itemindex =  temp.findIndex((user)=> user?.id === updateRes?.data?.id)
        if(itemindex >= 0){
         temp[itemindex] = updateRes?.data
        }
      dispatch(setCommonData({users:temp}))
       /*  setUserList((prv)=>{

          const temp = [...prv]
        const itemindex =  temp.findIndex((user)=> user?.id === updateRes?.data?.id)
        if(itemindex >= 0){
         temp[itemindex] = updateRes?.data
        }

        return temp

        }) */
    }else{
      alert("update failed")
      return false
    }
}


  return {userList,updateUserData}
}

export default useUserList