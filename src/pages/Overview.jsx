import React from 'react'

const Overview = () => {
  return (
     <main className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Users</h3>
          <p className="text-2xl mt-2">1,240</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Revenue</h3>
          <p className="text-2xl mt-2">$34,000</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Orders</h3>
          <p className="text-2xl mt-2">450</p>
        </div>
      </div>
    </main>
  )
}

export default Overview