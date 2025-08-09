import React, { useState, Suspense, lazy } from "react";
import { handleToggleBlock } from "../utils/propertyUtils";
import Accordion from "../components/ui/Accordion";
import Card from "../components/ui/Card";
import useGetBookings from "../hooks/useGetBookings";

const FlightBookings = lazy(() => import("../components/bookings/FlightBookings"));
const HotelBookings = lazy(() => import("../components/bookings/HotelBookings"));

const Bookings = () => {
  const [openBlocks, setOpenBlocks] = useState([]);
  const bookingData = useGetBookings();
  const flightBookings = bookingData?.flights;
  const hotelBookings = bookingData?.hotels;

  return (
    <section className="w-4/5">
      <h2 className="text-2xl font-bold p-10">Bookings</h2>
      <ul>
        <Accordion
          Heading={
            <h2 className="text-lg p-4 font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
              Flight Bookings{" "}
              <button className="min-w-8 bg-slate-700 p-2 rounded-sm">
                {openBlocks.includes("flight") ? "-" : "+"}
              </button>
            </h2>
          }
          collapseStatus={openBlocks.includes("flight")}
          handleCollapse={() => handleToggleBlock("flight", setOpenBlocks)}
        >
          <Suspense fallback={<Card>...Loading</Card>}>
            {flightBookings
              ? flightBookings.map((bookings) => (
                  <FlightBookings
                    key={`flight_booking_data_${bookings?.id}`}
                    bookings={bookings}
                  />
                ))
              : <Card>...Loading</Card>}
          </Suspense>
        </Accordion>
        <Accordion
          Heading={
            <h2 className="text-lg p-4 font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
              Hotels Bookings{" "}
              <button className="min-w-8 bg-slate-700 p-2 rounded-sm">
                {openBlocks.includes("hotel") ? "-" : "+"}
              </button>
            </h2>
          }
          collapseStatus={openBlocks.includes("hotel")}
          handleCollapse={() => handleToggleBlock("hotel", setOpenBlocks)}
        >
          <Suspense fallback={<Card>...Loading</Card>}>
            {hotelBookings
              ? hotelBookings.map((bookings) => (
                  <HotelBookings
                    key={`hotel_booking_data_${bookings?.id}`}
                    bookings={bookings}
                  />
                ))
              : <Card>...Loading</Card>}
          </Suspense>
        </Accordion>
      </ul>
    </section>
  );
};

export default Bookings;
