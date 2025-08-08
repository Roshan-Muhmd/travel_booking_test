import React, { useState } from "react";
import Accordion from "../components/ui/Accordion";
import { handleToggleBlock } from "../utils/propertyUtils";
import useGetInventory from "../hooks/useGetInventory";
import FlightProperty from "../components/inventory/FlightProperty";
import HotelProperty from "../components/inventory/HotelProperty";
import Card from "../components/ui/Card";

const Inventory = () => {
  const [openBlocks, setOpenBlocks] = useState([]);

  const { flights, hotels, activity } = useGetInventory();

  return (
    <section className="w-4/5">
      <h2 className="text-xl font-bold">Inventory Items</h2>
    <ul >
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
            {/* 🔍 Filter & Sort Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              {/* Filters */}
              <div className="flex items-center gap-4">
                <label
                  htmlFor="filter-airline"
                  className="text-gray-700 font-medium"
                >
                  Airline:
                </label>
                <select
                  id="filter-airline"
                  className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value>All Airlines</option>
                  <option value="SkyAir">SkyAir</option>
                  <option value="JetCloud">JetCloud</option>
                  <option value="FlyHigh">FlyHigh</option>
                </select>
              </div>
              {/* Sort */}
              <div className="flex items-center gap-4">
                <label
                  htmlFor="sort-price"
                  className="text-gray-700 font-medium"
                >
                  Sort by:
                </label>
                <select
                  id="sort-price"
                  className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="departure-asc">Departure Time</option>
                </select>
              </div>
            </div>
          </div>

          {flights?.length ? (
            flights?.map((flight,index) => {
              return (
                <FlightProperty key={"flight_property_" + index } flight={flight}/>
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
              <HotelProperty key={"hotel_property_" + index } hotel={hotel} index={index}/>
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
