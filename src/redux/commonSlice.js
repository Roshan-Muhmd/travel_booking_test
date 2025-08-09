import { createSlice } from "@reduxjs/toolkit";
import HotelBookings from "../components/bookings/HotelBookings";


const commonSlice = createSlice({
    name: "common",
    initialState: {
        users : null,
        flightBookings: [],
        hotelBookings: [],
    },
    reducers: {
        setCommonData : (state,action) => {
            
            return {...state,...action.payload}
        }
    }
})

export const { setCommonData} = commonSlice.actions;
export default commonSlice.reducer;