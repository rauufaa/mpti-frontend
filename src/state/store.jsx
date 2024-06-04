import { configureStore } from "@reduxjs/toolkit";
import forgetPasswordReducer from "./ForgetPasswordSlice"
import userReducer from "./UserSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        forgetPassword: forgetPasswordReducer
    }
})
export default store