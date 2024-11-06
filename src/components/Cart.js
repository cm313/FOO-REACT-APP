import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {clearCart} from "./../utils/cartSlice";
import CartItems from "./CartItems";
import CartTotalPrice from "./CartTotalPrice";
import orderImage from "../images/orderImage.jpg";

const Cart =  ()=>{
  // subscribing to the store using useSelector() hook
  const cartItems = useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();
  const[showPopUp, setShowPopUp] = useState(false)

  const handleClearCart = ()=>{
    dispatch(clearCart());
  }

  const handlePopUpMessage = ()=>{
    setShowPopUp(!showPopUp)
  }

  return (
    showPopUp ?
     <div className="w-[20%] p-3 mt-48 border rounded-md shadow-xl m-auto left-0 right-0">
      <img className="w-20 ml-10 " src={orderImage}></img>
      <div className="font-bold px-5">Order Placed. ThankYou</div>
    </div>
   : <div className="h-screen">
      <div className=" text-center font-serif font-bold text-4xl">Cart</div>
      {
        cartItems.length == 0 && <div className="font-bold text-center font-serif pt-32 text-lg">Hey! Looks Like your cart is empty.</div>
      }
      <div className="flex mt-10 justify-start">
       <CartItems items={cartItems}/>
       {
        cartItems.length !=0 &&       
        <div>
            <CartTotalPrice items={cartItems}/> 
            <div className="">
          <button className="bg-green-600 p-1 font-bold rounded-sm hover:bg-green-400" onClick={handlePopUpMessage} >Place Order</button>
          <button className="font-bold p-1 m-2 bg-orange-300 text-black rounded-sm hover:bg-orange-200" onClick = {handleClearCart}>Clear Cart</button>
          </div>
       </div>
        }   
        </div>     
    </div>
  )
}

export default Cart;