import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {clearCart} from "./../utils/cartSlice";
import CartItems from "./CartItems";
import CartTotalPrice from "./CartTotalPrice";

const Cart =  ()=>{
  // subscribing to the store using useSelector() hook
  const cartItems = useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="h-[700px]">
      <div className=" text-center font-serif font-bold text-4xl">Cart</div>
      {
        cartItems.length == 0 && <div className="font-bold text-center font-serif text-lg">Hey! Looks Like your cart is empty.</div>
      }
      <div className="flex">
       <CartItems items={cartItems}/>
       {
        cartItems.length !=0 && 
        <div>
        <CartTotalPrice items={cartItems}/> 
        <div className="ml-[450px]">
       <button className="bg-green-600 p-1 font-bold rounded-sm hover:bg-green-400">Place Order</button>
       <button className="font-bold p-1 m-2 bg-orange-300 text-black rounded-sm hover:bg-orange-200" onClick = {handleClearCart}>Clear Cart</button>
       </div>
       </div>
        }   
        </div>     
    </div>
  )
}

export default Cart;