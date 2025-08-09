import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { assembleCommonData } from '../utils/commonUtils'
import useGetBookings from '../hooks/useGetBookings'
import useUserList from '../hooks/useUserList'

const Overview = () => {

  const [overvieData, setOvervieData] = useState({users:null,bookings:null,revenue:null})
  const commonData = useSelector(state=>state?.common)
  useGetBookings()
  useUserList()
  debugger

  useEffect(() => {
    
    const assembledData = assembleCommonData(commonData) 
    debugger
    setOvervieData(assembledData)

  }, [commonData])
  

  return (
     <main className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Users</h3>
          {overvieData?.users === null ? <p className="text-2xl mt-2">Loading...</p> :<p className="text-2xl mt-2">{overvieData?.users}</p>}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Revenue</h3>
          {overvieData?.revenue === null ? <p className="text-2xl mt-2">Loading...</p> :<p className="text-2xl mt-2">$ {overvieData?.revenue}</p>}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Orders</h3>
          {overvieData?.bookings === null ? <p className="text-2xl mt-2">Loading...</p> :
          <>
          <p className="text-2xl mt-2">Flight : {overvieData?.bookings?.flight}</p>
          <p className="text-2xl mt-2">Hotel : {overvieData?.bookings?.hotel}</p>
          </>}
        </div>
      </div>
    </main>
  )
}

export default Overview