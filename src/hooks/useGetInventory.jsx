import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties, setProperties } from "../redux/propertySlice";
import { handleFilter, handleSort } from "../utils/propertyUtils";

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
  
  }, [sort,filter?.airline])
  

  return inventoryData;
};

export default useGetInventory;
