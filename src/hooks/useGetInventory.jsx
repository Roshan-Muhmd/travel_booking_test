import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../redux/propertySlice";

const useGetInventory = () => {

 const inventoryData = useSelector(state => state?.property)
 debugger
 const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchProperties())
  }, []);

  return inventoryData;
};

export default useGetInventory;
