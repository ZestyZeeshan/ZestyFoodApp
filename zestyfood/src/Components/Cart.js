import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./ItemList";
import { clearCart } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";


const Cart = ()=>{
  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch();
  const handleClearCart=()=>{
     dispatch(clearCart())
  }

    return (
        <div className="text-center m-4 p-4 ">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="size-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length ===0 && <h1>Cart is Empty, Do some Shopping</h1>}
            <Itemlist items={cartItems}/>
        </div>
        </div>
    )
}
export default Cart;