import {configureStore} from "@reduxjs/toolkit";
import  cartReducer from "./cartSlice";
//configureStore() function is used to build redux store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,//here name "cartReducer" is nothing but name of the cart i.e "cart" and "reducer" in camelCase
  },
}); 

export default appStore;

