import React from "react";

const FilterAndSort = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      {/* Filters */}
      <div className="flex items-center gap-4">
        <label htmlFor="filter-airline" className="text-gray-700 font-medium">
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
        <label htmlFor="sort-price" className="text-gray-700 font-medium">
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
  );
};

export default FilterAndSort;
