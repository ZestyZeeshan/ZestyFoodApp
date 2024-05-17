import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
     name:'cart',
     initialState:{
        //CART m add hoga
        items:[]
     },
     reducers:{
        addItem:(state, action)=>{
            //mutating the state here
         state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
     }
})
//export our action and re3duscer and 

//actions
export const {addItem,removeItem,clearCart} = cartSlice.actions;

//reducer
export default cartSlice.reducer;