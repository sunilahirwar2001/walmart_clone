import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    products:[],
    selectedProduct: null,
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

        },
        incrementsitem:(state,action)=>{
            const item = state.products.find((item)=>item.id===action.payload);
            if(item){
                item.quantity++;
            }

        },
        decrementitem:(state,action)=>{
            const item = state.products.find((item)=>item.id ===action.payload);
            if(item && item.quantity>1){
                item.quantity--;
            }
        },
        resetCart:(state)=>{
            state.products=[];
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
          },
          setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
          },
      
    }
})
export const {addToCartItems,incrementsitem,decrementitem,resetCart,deleteItem,setSelectedProduct} =walmartSlice.actions;
export default walmartSlice.reducer