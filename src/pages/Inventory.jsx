import React, { useState, Suspense, lazy } from "react";
import Accordion from "../components/ui/Accordion";
import { handleToggleBlock } from "../utils/propertyUtils";
import useGetInventory from "../hooks/useGetInventory";
import Card from "../components/ui/Card";
import AddnewFlightForm from "../components/inventory/AddnewFlightForm";
import FilterAndSort from "../components/inventory/FilterAndSort";

const FlightProperty = lazy(() => import("../components/inventory/FlightProperty"));
const HotelProperty = lazy(() => import("../components/inventory/HotelProperty"));

const Inventory = () => {
  const [openBlocks, setOpenBlocks] = useState([]);
  const { processedFlights, hotels, updateInventory, deleteInventory } = useGetInventory();

  return (
    <section className="w-4/5">
      <h2 className="text-xl font-bold">Inventory Items</h2>
      <ul>
        <li>
          <Accordion
            Heading={
              <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                Available Flights{" "}
                <button className="min-w-8 bg-slate-700 p-2 rounded-sm">
                  {openBlocks.includes("flight") ? "-" : "+"}
                </button>
              </h2>
            }
            collapseStatus={openBlocks.includes("flight")}
            handleCollapse={() => handleToggleBlock("flight", setOpenBlocks)}
          >
            <div>
              <AddnewFlightForm updateInventory={updateInventory} />
              <FilterAndSort />
            </div>
            <Suspense fallback={<Card>Loading</Card>}>
              {processedFlights?.length ? (
                processedFlights.map((flight, index) => (
                  <FlightProperty
                    key={"flight_property_" + index}
                    flight={flight}
                    deleteInventory={deleteInventory}
                  />
                ))
              ) : (
                <Card>Loading</Card>
              )}
            </Suspense>
          </Accordion>
        </li>
        <li>
          <Accordion
            Heading={
              <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                Available Hotels{" "}
                <button className="min-w-8 bg-slate-700 p-2 rounded-sm">
                  {openBlocks.includes("hotel") ? "-" : "+"}
                </button>
              </h2>
            }
            collapseStatus={openBlocks.includes("hotel")}
            handleCollapse={() => handleToggleBlock("hotel", setOpenBlocks)}
          >
            <Suspense fallback={<Card>Loading</Card>}>
              {hotels?.length ? (
                hotels.map((hotel, index) => (
                  <HotelProperty key={"hotel_property_" + index} hotel={hotel} index={index} />
                ))
              ) : (
                <Card>Loading</Card>
              )}
            </Suspense>
          </Accordion>
        </li>
      </ul>
    </section>
  );
};

export default Inventory;
