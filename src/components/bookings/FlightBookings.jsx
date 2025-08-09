import React from 'react'
import Card from '../ui/Card'
import { format } from 'date-fns'

const FlightBookings = (props) => {
  return (
    <Card>
        <h2 className="text-xl font-semibold">{props?.bookings?.airline}</h2>
        <p className="text-gray-600 text-sm">{props?.bookings?.from + " -----> " + props?.bookings?.to}</p>
        <div className="flex justify-between items-center mt-3">
          <div>
            <p className="text-sm text-gray-500">
              Booking Date:{" "}
              <span className="font-medium text-gray-800">{props?.bookings?.bookingDate &&
                            format(new Date(props.bookings.bookingDate), 'dd MMM yyyy, HH:mm')}</span>
            </p>
            <p className="text-sm text-gray-500">
              Departure:{" "}
              <span className="font-medium text-gray-800">{props?.bookings?.departure &&
                            format(new Date(props.bookings.departure), 'dd MMM yyyy, HH:mm')}</span>
            </p>
            <p className="text-sm text-gray-500">
              Arrival:{" "}
              <span className="font-medium text-gray-800">{props?.bookings?.arrival &&
                            format(new Date(props.bookings.arrival), 'dd MMM yyyy, HH:mm')}</span>
            </p>
          </div>
          <span className="text-lg font-bold pl-10 text-green-600">${props?.bookings?.price}</span>
        </div>
        <button className="mt-4 max-w-40 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          View Details
        </button>
    </Card>
  )
}

export default FlightBookings