import { createSlice } from "@reduxjs/toolkit";


const CustomerSlice = createSlice({
    name: "customer",
    initialState: {
        loading: null,
        error: null,
        message: null,
        login: {
            username: null,
            password: null
        },

    }
})