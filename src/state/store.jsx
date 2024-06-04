import { configureStore } from "@reduxjs/toolkit";
import forgetPasswordReducer from "./ForgetPasswordSlice"
import userReducer from "./UserSlice";
import customerReducer from "./CustomerSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        forgetPassword: forgetPasswordReducer,
        customer: customerReducer,
    }
})
export default store