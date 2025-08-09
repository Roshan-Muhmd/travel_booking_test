import React, { useState } from "react";
import { handleToggleBlock } from "../utils/propertyUtils";
import Accordion from "../components/ui/Accordion";
import Card from "../components/ui/Card";
import FlightBookings from "../components/bookings/FlightBookings";
import HotelBookings from "../components/bookings/HotelBookings";
import useGetBookings from "../hooks/useGetBookings";

const Bookings = () => {
  const [openBlocks, setOpenBlocks] = useState([]);

  const bookingData = useGetBookings()
  const flightBookings = bookingData?.flights
  const hotelBookings = bookingData?.hotels
debugger
  return (
    <section className="w-4/5">
      <h2 className="text-xl font-bold">Bookings</h2>
      <ul >
        <Accordion
          Heading={<h2 class="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
              Flight Bookings <button className="min-w-8 bg-slate-700 p-2 rounded-sm">{openBlocks.includes("flight") ? "-" :"+"}</button>
            </h2>}
          collapseStatus={openBlocks.includes("flight")}
          handleCollapse={() => handleToggleBlock("flight", setOpenBlocks)}
        >
          {flightBookings ?
          flightBookings?.map((bookings)=>{
            return (
              <FlightBookings key={`flight_booking_data_${bookings?.id}`} bookings={bookings}/>
            )
          })
          :
          <Card>...Loading</Card>
          }
        </Accordion>
        <Accordion
          Heading={<h2 class="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
              Hotels Bookings <button className="min-w-8 bg-slate-700 p-2 rounded-sm">{openBlocks.includes("hotel") ? "-" :"+"}</button>
            </h2>}
          collapseStatus={openBlocks.includes("hotel")}
          handleCollapse={() => handleToggleBlock("hotel", setOpenBlocks)}
        >
           {hotelBookings ?
          hotelBookings?.map((bookings)=>{
            return (
              <HotelBookings key={`hotel_booking_data_${bookings?.id}`} bookings={bookings}/>
            )
          })
          :
          <Card>...Loading</Card>
          }
        </Accordion>
      </ul>
    </section>
  );
};

export default Bookings;
