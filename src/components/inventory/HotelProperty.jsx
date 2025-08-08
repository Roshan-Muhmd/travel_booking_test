import React from 'react'
import Card from '../ui/Card'

const HotelProperty = (props) => {

  const hotel = props?.hotel

  return (
    <Card>
     <div className="flex justify-between">
  <div className="flex">
    <img
      src={`https://picsum.photos/id/${1 + (props?.index || 0)}/200/200`}
      alt={hotel?.hotelName || 'Hotel'}
      className="w-32 h-32 object-cover rounded"
    />
    <div className="flex flex-col justify-between p-4 flex-1">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          {hotel?.hotelName}
        </h2>
        <p className="text-sm text-gray-500">{hotel?.address}</p>
      </div>
      {hotel?.availableRooms <= 3 && (
        <p className="text-sm text-red-500 mt-2">
          Only {hotel?.availableRooms} rooms left!
        </p>
      )}
    </div>
  </div>
  <div className="flex items-center justify-end m- pr-4">
    <span className="text-xl font-bold text-blue-600">
      ${hotel?.price}/night
    </span>
  </div>
</div>

    </Card>
  )
}

export default HotelProperty
