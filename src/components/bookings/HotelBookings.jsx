import React from "react";
import Card from "../ui/Card";

const HotelBookings = () => {
  return (
    <Card>
   
        <img
          src="https://via.placeholder.com/400x200"
          alt="Hotel Image"
          className="rounded-md mb-3 w-full h-48 object-cover"
        />
        <h2 className="text-xl font-semibold">Grand Palace Hotel</h2>
        <p className="text-gray-600 text-sm">Mumbai, India</p>
        <div className="flex justify-between items-center mt-3">
          <div>
            <p className="text-sm text-gray-500">
              Check-in:{" "}
              <span className="font-medium text-gray-800">12 Aug 2025</span>
            </p>
            <p className="text-sm text-gray-500">
              Check-out:{" "}
              <span className="font-medium text-gray-800">15 Aug 2025</span>
            </p>
          </div>
          <span className="text-lg font-bold text-green-600">₹4,500</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          View Details
        </button>
      
    </Card>
  );
};

export default HotelBookings;
