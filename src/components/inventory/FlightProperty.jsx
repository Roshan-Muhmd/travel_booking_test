import React, { memo } from 'react'
import Card from '../ui/Card'
import { format } from 'date-fns'

const FlightProperty = (props) => {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-gray-900">
        {props?.flight?.airline}
      </h3>
      <p className="text-gray-600">
        From {props?.flight?.from} to {props?.flight?.to}
      </p>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-gray-800">
            {props?.flight?.from}
          </span>
          <span className="text-sm text-gray-500">
            {props?.flight?.departure &&
              format(new Date(props.flight.departure), 'dd MMM yyyy, HH:mm')}
          </span>
        </div>
        <div className="text-center text-gray-400 text-xl">→</div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-gray-800">
            {props?.flight?.to}
          </span>
          <span className="text-sm text-gray-500">
            {props?.flight?.arrival &&
              format(new Date(props.flight.arrival), 'dd MMM yyyy, HH:mm')}
          </span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-blue-600">
          ${props?.flight?.price}
        </span>
        <button onClick={() => { props?.deleteInventory(props?.flight?.id, "flights") }} className='bg-red-500 rounded-sm p-2 m-5'>Delete</button>
      </div>
    </Card>
  )
}

export default memo(FlightProperty)
