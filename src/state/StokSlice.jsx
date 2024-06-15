import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const addStok = createAsyncThunk(
    "gas/add",
    async (data, thunkAPI) => {
        const prepData = JSON.stringify({
            inputDate: data.inputDate,
            countStok: data.countStok,
            information: data.information
        })
        try {
            const response = await axios.post("http://localhost:3000/gas/add", prepData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token
                },
            });
            const result = await response.data;
            console.log(result)
            return result;
        } catch (error) {
            if(error.response){
                const message = error.response.data.errors;
                return thunkAPI.rejectWithValue(message)
            }else{
                return thunkAPI.rejectWithValue("Network error")
            }
        }
    }
)

export const updatePriceStok = createAsyncThunk(
    "gas/update",
    async (data, thunkAPI) => {
        const prepData = JSON.stringify({
            inputDate: data.inputDate,
            priceBuy: data.priceBuy,
            priceSell: data.priceSell
        })
        try {
            const response = await axios.post("http://localhost:3000/gas/update", prepData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token
                },
            });
            const result = await response.data;
            console.log(result)
            return result;
        } catch (error) {
            if(error.response){
                const message = error.response.data.errors;
                return thunkAPI.rejectWithValue(message)
            }else{
                return thunkAPI.rejectWithValue("Network error")
            }
        }
    }
)

export const historyStok = createAsyncThunk(
    "gas/history",
    async (data, thunkAPI) => {
        // const prepData = JSON.stringify({
        //     inputDate: data.inputDate,
        //     countStok: data.countStok,
        //     information: data.information
        // })
        console.log("jalan", data)
        try {
            const response = await axios.get("http://localhost:3000/gas/send", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token
                },
                params: {
                    page: data.currentPage,
                    size: 5,
                    startDate: data.startDate==''?null:data.startDate,
                    endDate: data.endDate==''? null:data.endDate
                }
            });
            const result = await response.data;
            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
            if(error.response){
                const message = error.response.data.errors;
                return thunkAPI.rejectWithValue(message)
            }else{
                return thunkAPI.rejectWithValue("Network error")
            }
        }
    }
)

export const downloadHistoryStok = createAsyncThunk(
    "gas/all-history",
    async (data, thunkAPI) => {
        // const prepData = JSON.stringify({
        //     inputDate: data.inputDate,
        //     countStok: data.countStok,
        //     information: data.information
        // })
        console.log("jalan", data)
        try {
            const response = await axios.get("http://localhost:3000/gas/send/download", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token
                },
                params: {
                    startDate: data.startDate==''?null:data.startDate,
                    endDate: data.endDate==''?null:data.endDate
                }
            });
            const result = await response.data;
            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
            if(error.response){
                const message = error.response.data.errors;
                return thunkAPI.rejectWithValue(message)
            }else{
                return thunkAPI.rejectWithValue("Network error")
            }
        }
    }
)

export const gasStok = createAsyncThunk(
    "gas/stok",
    async (data, thunkAPI) => {
        // const prepData = JSON.stringify({
        //     inputDate: data.inputDate,
        //     countStok: data.countStok,
        //     information: data.information
        // })
        console.log("jalan", data)
        try {
            const response = await axios.get("http://localhost:3000/gas/stok", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token
                }
            });
            const result = await response.data;
            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
            if(error.response){
                const message = error.response.data.errors;
                return thunkAPI.rejectWithValue(message)
            }else{
                return thunkAPI.rejectWithValue("Network error")
            }
        }
    }
)

export const gasDelete = createAsyncThunk(
    "gas/delete",
    async (data, thunkAPI) => {
        // const prepData = JSON.stringify({
        //     inputDate: data.inputDate,
        //     countStok: data.countStok,
        //     information: data.information
        // })
        console.log("jalan", data)
        try {
            const response = await axios.delete(`http://localhost:3000/gas/stok/${data.stokId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token
                }
            });
            const result = await response.data;
            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
            if(error.response){
                const message = error.response.data.errors;
                return thunkAPI.rejectWithValue(message)
            }else{
                return thunkAPI.rejectWithValue("Network error")
            }
        }
    }
)

const StokSlice = createSlice({
    name: "gas",
    initialState: {
        loading: null,
        error: null,
        message: null,
        success: null,
        data: {
            inputDate: null,
            countStok: 100,
            information: null,
        },
        dataStok: {
            stok: 0,
            priceBuy: null,
            priceSell: null,
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
        updateInputDateStok: (state, action)=>{
            state.data.inputDate = action.payload;
        },
        updateCountStok: (state, action)=>{
            state.data.countStok = action.payload;
        },
        updateInformationStok: (state, action)=>{
            state.data.information = action.payload;
        },
        updateErrorStok: (state, action) => {
            state.error = action.payload;
        },
        updateMessageStok: (state, action) => {
            state.message = action.payload;
        },
        updateCurrentPageStok: (state, action) => {
            state.historyData.currentPage = action.payload;
        },
        updateStartDateStok: (state, action) => {
            state.historyData.startDate = action.payload;
        },
        updateEndDateStok: (state, action) => {
            console.log(action.payload)
            state.historyData.endDate = action.payload;
            console.log(action.payload, state.historyData.endDate)

        },
        updateSuccessStok: (state, action) => {
            state.success = action.payload;
        },
        updatePriceBuyStok: (state, action) => {
            state.dataStok.priceBuy = action.payload;
        }
        ,
        updatePriceSellStok: (state, action) => {
            state.dataStok.priceSale = action.payload;
        }
        
    },
    extraReducers: builder=>
        builder.addCase(addStok.pending, (state, action)=>{
            state.loading = true;
            state.error = false;
        }).
        addCase(addStok.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = false;
        }).addCase(addStok.rejected, (state, action)=>{
            state.loading = false;
            state.error = true;
            state.message = action.payload;
        }).addCase(historyStok.pending, (state, action)=>{
            state.loading = true;
            state.error = false;
        }).
        addCase(historyStok.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = false;
            state.historyData.list = action.payload.data;
            state.historyData.paging = action.payload.paging;
        }).addCase(historyStok.rejected, (state, action)=>{
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.historyData.list = [];
            state.historyData.paging = {};
        }).addCase(downloadHistoryStok.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = false;
            state.success = true;
            state.message = "Berhasil unduh";
            state.dataPrint = action.payload.data;
        }).addCase(gasStok.fulfilled, (state, action)=>{
            state.dataStok.stok = action.payload.data.stok;
            state.dataStok.priceBuy = action.payload.data.hargaBeli;
            state.dataStok.priceSell = action.payload.data.hargaJual;
        }).addCase(gasStok.rejected, (state, action)=>{
            state.dataStok.stok = 0;
            state.dataStok.priceBuy = 0;
            state.dataStok.priceSale = 0;
            state.loading = false;
            state.success = false;
            state.error = true;
            state.message = action.payload;
        }).addCase(updatePriceStok.pending, (state, action)=>{
            state.loading = true;
            state.error = false;
        }).addCase(updatePriceStok.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = false;
            state.success = true;
            state.message = action.payload.data;
        }).addCase(updatePriceStok.rejected,(state, action)=>{
            state.loading = false;
            state.error = true;
            // state.success = false;
            state.message = action.payload
        })
        .addCase(gasDelete.pending, (state, action)=>{
            state.loading = true;
            state.error = false;
            // state.success = false;
            
        })
        .addCase(gasDelete.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = false;
            // state.success = false;
            state.message = action.payload
        })
        .addCase(gasDelete.rejected,(state, action)=>{
            state.loading = false;
            state.error = true;
            // state.success = false;
            state.message = action.payload
        })
        
})

export const {updatePriceBuyStok, updatePriceSellStok, updateSuccessStok, updateInputDateStok, updateCountStok, updateInformationStok, updateErrorStok, updateMessageStok, updateCurrentPageStok, updateStartDateStok, updateEndDateStok} = StokSlice.actions
export default StokSlice.reducer