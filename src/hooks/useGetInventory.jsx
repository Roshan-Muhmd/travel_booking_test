import React, { useEffect ,useState} from "react";
import { axiosInstance } from "../utils/commonUtils";

const useGetInventory = () => {

 const [inventoryData, setInventoryData] = useState({flight:[],hote:[]})

  useEffect(() => {
    (async () => {
      const flightResponse = await axiosInstance.get("/flights");
      try {
        const [flightsRes, hotelsRes] = await Promise.all([
          axiosInstance.get("/flights"),
          axiosInstance.get("/flights")
        ]);

        setInventoryData({ flights: flightsRes?.data, hotels: hotelsRes?.data,  })

      } catch (error) {
        console.error("Error fetching data:", error);
      }
      debugger;
    })();
  }, []);

  return inventoryData;
};

export default useGetInventory;
