import React from 'react'

const Card = (props) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-6 border border-gray-200">
    {props.children}
    </div>
  )
}

export default Card