import { configureStore } from "@reduxjs/toolkit";
import walmartReducer from "./walmartSlice";
 const store = configureStore({
    reducer:{
             walmart:walmartReducer
    }
})
export default store;