import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/commonUtils";

// Thunk function to fetch properties
export const fetchProperties = createAsyncThunk(
  "property/fetchProperties",
  async () => {
      const [flightsRes, hotelsRes] = await Promise.all([
          axiosInstance.get("/flights"),
          axiosInstance.get("/hotels"),
        ]);
        debugger

    return { flights: flightsRes?.data, hotels: hotelsRes?.data };
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {
    flights: [],
    hotels: [],
    status: "idle",
  },
  reducers: {
    setProperties: (state, action) => {
      const { flight, hotels } = action.payload;
      state.flight = flight || [];
      state.hotels = hotels || [];
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
        state.hotels = action.payload.hotels || [];
      })
      .addCase(fetchProperties.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setProperties } = propertySlice.actions;
export default propertySlice.reducer;
