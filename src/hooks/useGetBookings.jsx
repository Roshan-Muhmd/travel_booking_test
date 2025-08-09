import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/commonUtils';
import { useDispatch, useSelector } from 'react-redux';
import { setCommonData } from '../redux/commonSlice';

const useGetBookings = () => {

   /*  const [bookingData, setBookingData] = useState(null) */
    const commonData = useSelector((state)=>state?.common)
    const dispatch = useDispatch()
debugger
useEffect(() => {
    
(async () => {
      debugger
  if(commonData?.hotelBookings?.length === 0 && commonData?.flightBookings?.length === 0){
    try {
        const [flightsBookingRes, hotelsBookingRes] = await Promise.all([
          axiosInstance.get("/flightBookings"),
          axiosInstance.get("/hotelBookings")
        ]);

        /* setBookingData({ flights: flightsBookingRes?.data, hotels: hotelsBookingRes?.data,  }) */
        dispatch(setCommonData({ flightBookings: flightsBookingRes?.data, hotelBookings: hotelsBookingRes?.data }))

      } catch (error) {
        console.error("Error fetching data:", error);
      }
  }
      
     
    })();

}, [])


  return {flights:commonData?.flightBookings,hotels:commonData?.hotelBookings}
}

export default useGetBookings