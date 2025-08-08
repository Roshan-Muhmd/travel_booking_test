import React, { useState } from "react";
import Accordion from "../components/ui/Accordion";
import { handleToggleBlock } from "../utils/propertyUtils";
import useGetInventory from "../hooks/useGetInventory";
import FlightProperty from "../components/inventory/FlightProperty";
import HotelProperty from "../components/inventory/HotelProperty";
import Card from "../components/ui/Card";
import AddnewFlightForm from "../components/inventory/AddnewFlightForm";
import FilterAndSort from "../components/inventory/FilterAndSort";
import { useSelector } from "react-redux";

const Inventory = () => {
  const [openBlocks, setOpenBlocks] = useState([]);

  const { flights, hotels, } = useGetInventory();
  

  return (
    <section className="w-4/5">
      <h2 className="text-xl font-bold">Inventory Items</h2>
      <ul>
        <li>
          <Accordion
            Heading={
              <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                Available Flights
              </h2>
            }
            collapseStatus={openBlocks.includes("flight")}
            handleCollapse={() => handleToggleBlock("flight", setOpenBlocks)}
          >
            <div>
              <AddnewFlightForm/>
              <FilterAndSort/>
            </div>

            {flights?.length ? (
              flights?.map((flight, index) => {
                return (
                  <FlightProperty
                    key={"flight_property_" + index}
                    flight={flight}
                  />
                );
              })
            ) : (
              <Card>Loading</Card>
            )}
          </Accordion>
        </li>
        <li>
          <Accordion
            Heading={
              <h2 class="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                Available Hotels
              </h2>
            }
            collapseStatus={openBlocks.includes("hotel")}
            handleCollapse={() => handleToggleBlock("hotel", setOpenBlocks)}
          >
            {hotels?.length ? (
              hotels?.map((hotel, index) => {
                return (
                  <HotelProperty
                    key={"hotel_property_" + index}
                    hotel={hotel}
                    index={index}
                  />
                );
              })
            ) : (
              <Card>Loading</Card>
            )}
          </Accordion>
        </li>
      </ul>
    </section>
  );
};

export default Inventory;
