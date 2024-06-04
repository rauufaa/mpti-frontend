import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const customerCheckNik = createAsyncThunk(
    "customer/nik",
    async (data, thunkAPI) => {
        const prepData = JSON.stringify({
            nik: data.nik
        })
        try {
            const response = await axios.post("http://localhost:3000/customer/nik", prepData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token
                },
            });
            const result = await response.data;
            return result;
        } catch (error) {
            if(error.response){
                const message = error.response.data.errors;
                return thunkAPI.rejectWithValue(message)
            }
        }

    }
)

const CustomerSlice = createSlice({
    name: "customer",
    initialState: {
        loading: null,
        error: null,
        message: null,
        data: {
            nik: null,
            nama: null,
            tipe: null,
        },
    },
    reducers: {
        updateNik: (state, action)=>{
            state.data.nik = action.payload;
        },
        updateErrorCustomer: (state, action)=> {
            state.error = action.payload
        },
        updateMessageCustomer: (state, action)=> {
            state.message = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(customerCheckNik.pending, (state, action) => {
                state.loading = true
                state.error = false
            })
            .addCase(customerCheckNik.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                console.log(action)
                state.data.nik = action.payload.data.nik
                state.data.nama = action.payload.data.nama
                state.data.tipe = action.payload.data.tipe
            })
            .addCase(customerCheckNik.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload
            })
    }
})

export const { updateNik, updateErrorCustomer, updateMessageCustomer } = CustomerSlice.actions
export default CustomerSlice.reducer