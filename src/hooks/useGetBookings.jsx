import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/commonUtils';

const useGetBookings = () => {

    const [bookingData, setBookingData] = useState(null)

useEffect(() => {
    
(async () => {
      
      try {
        const [flightsBookingRes, hotelsBookingRes] = await Promise.all([
          axiosInstance.get("/flightBookings"),
          axiosInstance.get("/flightBookings")
        ]);

        setBookingData({ flights: flightsBookingRes?.data, hotels: hotelsBookingRes?.data,  })

      } catch (error) {
        console.error("Error fetching data:", error);
      }
     
    })();

}, [])


  return {bookingData}
}

export default useGetBookings