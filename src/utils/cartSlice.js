import {createSlice} from "@reduxjs/toolkit";

// creating a Slice for the cart to put it in redux store.
// we have to use createSlice() function to create a slice.
/* It takes a configuration that conatins "name  of the slice", "state of items(an object)", 
and "reducers(an object) which takes actions as properties and reducer functions as values" */
// here addItem, removeItem, clearCart are actions.
// we have to export "reducers" and "actions" from here.

const cartSlice = createSlice({
   name: "cart",
   initialState: {
    items: [],
   },
   reducers: {
    addItem: (state, action)=>{
      /* In vanilla redux "state" is immutable but to modify it we have to create a 
       copy of it and modify it and return it */
      /* But in redux-toolkit "state" is mutable but behind the scenes it create a copy
      and modify it. It use "immer" which is a library, It finds the difference betwenn
      old state and new state and return a new state */
      /*ReduxToolKit says either mutate the state or return a new state. see at line no: 32*/

      state.items.push(action.payload);//  mutating the state
      
    },
     removeItem: (state)=>{
      state.items.pop();
     },
     clearCart: (state) => {
      state.items.length = 0; // this is mutating state
      // or
      // return {items: []} // this is returning a new state
     },
   },
});

export default cartSlice.reducer;

export const {addItem, removeItem, clearCart} = cartSlice.actions;