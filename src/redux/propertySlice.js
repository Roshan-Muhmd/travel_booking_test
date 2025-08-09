import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/commonUtils";
import { collectAirline } from "../utils/propertyUtils";

// Thunk function to fetch properties
export const fetchProperties = createAsyncThunk(
  "property/fetchProperties",
  async () => {
      const [flightsRes, hotelsRes] = await Promise.all([
          axiosInstance.get("/flights"),
          axiosInstance.get("/hotels"),
        ]);
        

    return { flights: flightsRes?.data, hotels: hotelsRes?.data };
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {
    flights: [],
    processedFlights: [],
    hotels: [],
    status: "idle",
    airlinesList : [],
    filter:{
      airline: null
    },
    sort:{
      type: "price",
      order: "asc"
    }
  },
  reducers: {
    setProperties: (state, action) => {
      
      return {...state,...action?.payload}
    },
    updateFilter: (state, action)=> {
    
      state.filter[action.payload.type] = action.payload.value
  },
  updateSort: (state, action) => {
      state.sort.type = action.payload.type
      state.sort.order = action.payload.order
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        
        state.status = "succeeded";
        state.flights = action.payload.flights || [];
        state.processedFlights = action.payload.flights || [];
        state.hotels = action.payload.hotels || [];
        state.airlinesList = collectAirline(action.payload.flights)
      })
      .addCase(fetchProperties.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setProperties ,updateFilter,updateSort} = propertySlice.actions;
export default propertySlice.reducer;
