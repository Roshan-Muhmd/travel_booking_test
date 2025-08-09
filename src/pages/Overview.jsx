import React, { useEffect, useState, useMemo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { assembleCommonData } from '../utils/commonUtils'
import useGetBookings from '../hooks/useGetBookings'
import useUserList from '../hooks/useUserList'

const Overview = () => {
  const [overviewData, setOverviewData] = useState({ users: null, bookings: null, revenue: null })
  const commonData = useSelector(state => state?.common, shallowEqual)

  useGetBookings()
  useUserList()

  const assembledData = useMemo(() => {
    return assembleCommonData(commonData)
  }, [commonData])

  useEffect(() => {
    setOverviewData(assembledData)
  }, [assembledData])

  return (
    <main className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Users</h3>
          {overviewData?.users === null ? (
            <p className="text-2xl mt-2">Loading...</p>
          ) : (
            <p className="text-2xl mt-2">{overviewData?.users}</p>
          )}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Revenue</h3>
          {overviewData?.revenue === null ? (
            <p className="text-2xl mt-2">Loading...</p>
          ) : (
            <p className="text-2xl mt-2">$ {overviewData?.revenue}</p>
          )}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Orders</h3>
          {overviewData?.bookings === null ? (
            <p className="text-2xl mt-2">Loading...</p>
          ) : (
            <>
              <p className="text-2xl mt-2">Flight : {overviewData?.bookings?.flight}</p>
              <p className="text-2xl mt-2">Hotel : {overviewData?.bookings?.hotel}</p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default React.memo(Overview)
