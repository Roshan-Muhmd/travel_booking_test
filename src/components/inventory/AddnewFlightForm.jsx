import React, { useRef, useState } from 'react'
import { addData } from '../../utils/commonUtils'

const AddnewFlightForm = ({updateInventory}) => {
  const formRef = useRef(null)
  const [showForm, setShowForm] = useState(false)

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())

    // convert price to number
    data.price = parseFloat(data.price)

    console.log('Submitting flight:', data)

    try {
      const response = await addData(data,"flights")
      // Clear the form after submit
      if(response?.id){
        updateInventory(response,"flights")
        alert("Succesfully Added")
         formRef.current.reset()
      }else{
        alert("Itenary Adding Failed")
      }
     
    } catch (error) {
      console.error('Error submitting flight:', error)
    }
  }

  return (
    <section className="max-w-xl bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Add Flight Itinerary</h2> <span><button className='bg-blue-600 rounded-sm text-4xl p-2 m-5 min-w-12' onClick={()=>setShowForm(!showForm)}>{showForm ? "-" :'+'}</button></span>
      {showForm && <form
        ref={formRef}
        id="flightForm"
        className="space-y-4"
        onSubmit={formSubmitHandler}
      >
        <div>
          <label className="block text-sm font-medium mb-1">Airline Name:</label>
          <input
            type="text"
            name="airline"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">From (Departure Airport):</label>
          <input
            type="text"
            name="from"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">To (Arrival Airport):</label>
          <input
            type="text"
            name="to"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Departure Time:</label>
          <input
            type="datetime-local"
            name="departure"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Arrival Time:</label>
          <input
            type="datetime-local"
            name="arrival"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price:</label>
          <input
            type="number"
            name="price"
            min={0}
            step="10.00"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Add Itinerary
          </button>
        </div>
      </form>}
    </section>
  )
}

export default AddnewFlightForm
