import React, { useState } from "react";
import { handleToggleBlock } from "../utils/propertyUtils";
import Accordion from "../components/ui/Accordion";
import FlightBookings from "../components/bookings/FlightBookings";
import HotelBookings from "../components/bookings/HotelBookings";

const Bookings = () => {
  const [openBlocks, setOpenBlocks] = useState([]);

  return (
    <section className="w-4/5">
      <h2 className="text-xl font-bold">Bookings</h2>
      <ul >
        <Accordion
          Heading={<h2 class="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
              Flight Bookings
            </h2>}
          collapseStatus={openBlocks.includes("flight")}
          handleCollapse={() => handleToggleBlock("flight", setOpenBlocks)}
        >
         <FlightBookings/>
        </Accordion>
        <Accordion
          Heading={<h2 class="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
              Hotels Bookings
            </h2>}
          collapseStatus={openBlocks.includes("hotel")}
          handleCollapse={() => handleToggleBlock("hotel", setOpenBlocks)}
        >
          <HotelBookings/>
        </Accordion>
      </ul>
    </section>
  );
};

export default Bookings;
