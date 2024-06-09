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
            name: null,
            address: null,
            type: null,
            ktp: {
                ktpSource: null,
                ktpName: null
            },
            inputDate: null,
        },
    },
    reducers: {
        updateNikCustomer: (state, action)=>{
            state.data.nik = action.payload;
        },
        updateInputDateCustomer: (state, action)=>{
            state.data.inputDate = action.payload;
        },
        updateErrorCustomer: (state, action)=> {
            state.error = action.payload
        },
        updateMessageCustomer: (state, action)=> {
            state.message = action.payload
        },
        updateNameCustomer: (state, action)=> {
            state.data.namw = action.payload
        },
        updateAddressCustomer: (state, action)=> {
            state.data.address = action.payload
        },
        updateTypeCustomer: (state, action)=> {
            state.data.type = action.payload
        },
        updateKtpCustomer: (state, action)=> {
            state.data.ktp.ktpSource = action.payload.ktpSource
            state.data.ktp.ktpName = action.payload.ktpName
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
                // console.log(action)
                // state.data.nik = action.payload.data.nik
                // state.data.name = action.payload.data.nama
                // state.data.type = action.payload.data.tipe
            })
            .addCase(customerCheckNik.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload
            })
    }
})

export const { updateNikCustomer, updateKtpCustomer,updateNameCustomer, updateAddressCustomer, updateInputDateCustomer, updateErrorCustomer, updateMessageCustomer, updateTypeCustomer } = CustomerSlice.actions
export default CustomerSlice.reducer