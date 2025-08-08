import React from 'react'
import Card from '../ui/Card'

const FlightProperty = (props) => {
  return (
    <Card>
                   <h3 className="text-xl font-semibold text-gray-900">
                    SkyAir
                  </h3>
                  <p className="text-gray-600">From JFK to LAX</p>
                  {/* Flight Info */}
                  <div className="flex flex-col space-y-2">
                    {/* Departure */}
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-gray-800">
                        JFK
                      </span>
                      <span className="text-sm text-gray-500">08:30 AM</span>
                    </div>
                    {/* Arrow */}
                    <div className="text-center text-gray-400 text-xl">→</div>
                    {/* Arrival */}
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-gray-800">
                        LAX
                      </span>
                      <span className="text-sm text-gray-500">11:45 AM</span>
                    </div>
                  </div>
                  {/* Price */}
                  <div className="text-right">
                    <span className="text-xl font-bold text-blue-600">
                      $320
                    </span>
                  </div>
                </Card>
  )
}

export default FlightProperty