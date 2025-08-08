import { createSlice } from "@reduxjs/toolkit";

const storageUserData = JSON.parse(localStorage.getItem("loginData"))

const authSlice = createSlice({
    name: "auth", 
    initialState: {
        isAuthenticated: storageUserData ? true : false ,
        user: storageUserData?.email ?? null
    },
    reducers: {
        setAuthStatus: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user || null;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const { setAuthStatus, logout } = authSlice.actions;

export default authSlice.reducer;
