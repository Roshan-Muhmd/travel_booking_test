import React from "react";
import Card from "../ui/Card";

const HotelBookings = (props) => {
  debugger
  return (
    <Card>
   
        <img
          src={`https://picsum.photos/id/${1 + (props?.bookings?.id || 0)}/100/100`}
          alt="Hotel Image"
          className="rounded-md mb-3 max-w-lg h-48 object-cover"
        />
        <h2 className="text-xl font-semibold">{props?.bookings?.hotelName}</h2>
        <p className="text-gray-600 text-sm">{props?.bookings?.address}</p>
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
          <span className="text-lg font-bold ml-5 text-green-600">${props?.bookings?.price}</span>
        </div>
        <button className="mt-4 max-w-40 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          View Details
        </button>
      
    </Card>
  );
};

export default HotelBookings;
