import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    products:[],
}
export const walmartSlice = createSlice({
    name:"walmart",
    initialState,
    reducers:{
        addToCartItems:(state,action)=>{
const item = state.products.find((item)=>item.id===action.payload.id);
     if(item){
        item.quantity +=action.payload.quantity; 
     }
 else{
    state.products.push(action.payload);
 }

        }
    }
})
export const {addToCartItems} =walmartSlice.actions;
export default walmartSlice.reducer