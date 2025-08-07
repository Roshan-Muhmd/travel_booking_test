import React from 'react'
import SideBar from '../partials/SideBar'
import MainNavbar from '../partials/MainNavbar'
import Overview from './Overview'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (

<div>
  {/* Top Navbar */}
  <MainNavbar/>

  <div className="flex min-h-screen">
    {/* Sidebar */}
   <SideBar/>
   
   <Outlet/>
    </div>
</div>


  )
}

export default HomePage