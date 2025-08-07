import React from 'react'

const MainNavbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-semibold">Dashboard</h1>
    <div>
      <span className="text-sm">Welcome, Admin</span>
    </div>
  </header>
  )
}

export default MainNavbar