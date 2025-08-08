import React from 'react'
import Card from '../ui/Card'

const HotelProperty = (props) => {
  return (
      <Card>
                  <div>
                    {/* Hotel Image */}
                    <img
                      src={`https://picsum.photos/id/${1 + props?.index}/200/500`}
                      alt="Hotel"
                      className="w-32 h-32 object-cover"
                    />
                    {/* Info */}
                    <div className="flex flex-col justify-between p-4 flex-1">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                          Grand Palace Hotel
                        </h2>
                        <p className="text-sm text-gray-500">
                          123 Main St, Los Angeles, CA
                        </p>
                      </div>
                      <p className="text-sm text-red-500 mt-2">
                        Only 3 rooms left!
                      </p>
                    </div>
                    {/* Price */}
                    <div className="flex items-center pr-4">
                      <span className="text-xl font-bold text-blue-600">
                        $129/night
                      </span>
                    </div>
                  </div>
                </Card>
  )
}

export default HotelProperty