import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter, updateSort } from "../../redux/propertySlice";

const FilterAndSort = () => {

  const dispatch = useDispatch()
  const airlineList = useSelector(state=> state?.property?.airlinesList)

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4  my-6">
      {/* Filters */}
      <div className="flex items-center gap-4">
        <label htmlFor="filter-airline" className="text-gray-700 font-medium">
          Airline:
        </label>
       {airlineList?.length > 0 && <select
          id="filter-airline"
          className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>dispatch(updateFilter({type:"airline",value:e.target.value === "All Airlines" ? null : e.target.value}))}
        >
          <option value={null}>All Airlines</option>
          {airlineList?.map(airline=> {
            return <option value={airline}>{airline}</option>
          })}
          
          
        </select>}
      </div>
      {/* Sort */}
      <div className="flex items-center gap-4">
        <label htmlFor="sort-price" className="text-gray-700 font-medium">
          Sort by:
        </label>
        <select
          id="sort-price"
          className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>dispatch(updateSort({type:e.target?.value?.split("-")[0] ,order:e.target?.value?.split("-")[1]}))}
        >
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="departure-asc">Departure Time (Low to High)</option>
          <option value="departure-desc">Departure Time (High to Low)</option>
          <option value="arrival-asc">Arrival Time (Low to High)</option>
          <option value="arrival-desc">Arrival Time (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterAndSort;
