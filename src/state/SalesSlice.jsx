import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getSales = createAsyncThunk(
    "sales",
    async (data, thunkAPI) => {

        try {
            const response = await axios.get("http://localhost:3000/gas/sales", {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': data.token
                },
                params: {
                    page: data.currentPage,
                    size: 5,
                    startDate: data.startDate==''?null:data.startDate,
                    endDate: data.endDate==''?null:data.endDate
                }
            })

            const result = await response.data
            console.log(result)
            return result;
        } catch (error) {
            if (error.response) {
                const message = error.response.data.errors;
                return thunkAPI.rejectWithValue(message)
            }else{
                return thunkAPI.rejectWithValue("Network error")
            }
        }
    }
)

export const getAllHistorySales = createAsyncThunk(
    "sales/download",
    async (data, thunkAPI) => {

        try {
            const response = await axios.get("http://localhost:3000/gas/sales/download", {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': data.token
                },
                params: {
                    startDate: data.startDate==''?null:data.startDate,
                    endDate: data.endDate==''?null:data.endDate
                }
            })

            const result = await response.data
            console.log(result)
            return result;
        } catch (error) {
            if (error.response) {
                const message = error.response.data.errors;
                return thunkAPI.rejectWithValue(message)
            }else{
                return thunkAPI.rejectWithValue("Network error")
            }
        }
    }
)

const SalesSlice = createSlice({
    name: "sales",
    initialState: {
        loading: null,
        error: null,
        message: null,
        data: {
            countSold: null,
            revenue: null,
            salesList: null
        },
        historyData: {
            startDate: '',
            endDate: '',
            currentPage: 1,
            list: [],
            paging: {}
        },
        dataPrint: []
    },
    reducers: {
        updateStartDateSales: (state, action) => {
            state.historyData.startDate = action.payload;
        },
        updateEndDateSales: (state, action) => {
            state.historyData.endDate = action.payload;
        },
        updateErrorSales: (state, action) => {
            state.error = action.payload;
        },
        updateMessageSales: (state, action) => {
            state.message = action.payload;
        },
        updateCurrentPageStok: (state, action) => {
            state.historyData.currentPage = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getSales.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getSales.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.historyData.list = action.payload.data;
                state.historyData.paging = action.payload.paging;
                state.data.countSold = action.payload.dataSold.countSold;
                state.data.revenue = action.payload.dataSold.revenue;
            })
            .addCase(getSales.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.data.revenue = 0;
                state.data.countSold = 0;
                state.message = action.payload;
            })
            .addCase(getAllHistorySales.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getAllHistorySales.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                // state.historyData.list = action.payload.data;
                // state.historyData.paging = action.payload.paging;
                state.dataPrint = action.payload.data
                state.data.countSold = action.payload.dataSold.countSold;
                state.data.revenue = action.payload.dataSold.revenue;
            })
            .addCase(getAllHistorySales.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.data.revenue = 0;
                state.data.countSold = 0;
                state.message = action.payload;
            })
})


export const {updateErrorSales, updateCurrentPageSales, updateEndDateSales, updateStartDateSales, updateMessageSales} = SalesSlice.actions
export default SalesSlice.reducer