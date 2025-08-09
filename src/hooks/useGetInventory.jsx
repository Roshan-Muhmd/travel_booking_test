import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties, setProperties } from "../redux/propertySlice";
import { handleFilter, handleSort } from "../utils/propertyUtils";
import { axiosInstance, deleteData } from "../utils/commonUtils";

const useGetInventory = () => {

 const inventoryData = useSelector(state => state?.property)
 const sort = inventoryData?.sort
 const filter = inventoryData?.filter
 const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchProperties())
      
  }, []);

  useEffect(() => {
  debugger
    if(inventoryData?.flights?.length > 0 || filter?.airline !== null){
      const flights = inventoryData?.flights.filter((item)=>handleFilter(item,filter)).sort((a,b)=>handleSort(a,b,sort))
      dispatch(setProperties({processedFlights:flights}))
    }
  
  }, [sort,filter,inventoryData?.flights,])

  const updateInventory = (data,property) =>{
debugger
    const temp = [...inventoryData[property]]
    const itemindex =  temp.findIndex((item)=> item?.id === data?.id)
        if(itemindex >= 0){
         temp[itemindex] = data
        }else{
          temp.push(data)
        }
        dispatch(setProperties({[property]:temp}))
  
  }

  const deleteInventory = async(id,module) => {
    debugger
    const deleteRes = await deleteData(id,module)

    if(deleteRes){
      const temp = [...inventoryData[module]]
    
    const itemindex =  temp.findIndex((item)=> item?.id === id)
        if(itemindex >= 0){
          temp?.splice(itemindex,1)
        }
        dispatch(setProperties({[module]:temp}))
      alert("succefully deleted")
    }else{
      alert("deletion failed")
    }
    

  }


  

  return {...inventoryData,updateInventory,deleteInventory};
};

export default useGetInventory;
