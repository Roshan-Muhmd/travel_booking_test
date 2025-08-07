import React from 'react'

const HomePage = () => {
  return (

<div>
  {/* Top Navbar */}
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-semibold">Dashboard</h1>
    <div>
      <span className="text-sm">Welcome, Admin</span>
    </div>
  </header>
  <div className="flex min-h-screen">
    {/* Sidebar */}
    <aside className="w-64 bg-white border-r hidden md:block">
      <nav className="p-4 space-y-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200">Dashboard</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200">Users</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200">Settings</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200">Logout</a>
      </nav>
    </aside>
    {/* Main Content */}
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
  </div>
</div>


  )
}

export default HomePage