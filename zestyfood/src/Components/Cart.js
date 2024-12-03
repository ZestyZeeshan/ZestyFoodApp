import { useDispatch, useSelector } from "react-redux"; 
import Itemlist from "./ItemList"; // Component to render the list of items
import { clearCart } from "../utils/cartSlice"; // Redux action to clear the cart

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // Access cart items from Redux store
  const dispatch = useDispatch(); // Dispatch function to trigger actions

  // Function to handle clearing the cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Cart Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        <span className="text-green-600">Your Cart</span> 🍔
      </h1>

      {/* Cart Content */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-11/12 max-w-4xl">
        {/* Show message if cart is empty */}
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">
              🛒 Your cart is empty!
            </h2>
            <p className="text-gray-500">Add some delicious food to enjoy your meal.</p>
          </div>
        ) : (
          <div>
            {/* Clear Cart Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                Items in Your Cart
              </h2>
              <button
                className="bg-red-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>

            {/* Render Item List */}
            <Itemlist items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;






// OLD CODE 


// import { useDispatch, useSelector } from "react-redux";
// import Itemlist from "./ItemList";
// import { clearCart } from "../utils/cartSlice";
// // import { useDispatch } from "react-redux";
// //useSelector and useDispatch are a set of hooks to use as alternatives to the existing connect() higher-order component. The equivalent of map state to props is useSelector. It takes in a function argument that returns the part of the state that you want. The equivalent of map dispatch to props is useDispatch. We can invoke useDispatch and store it to a variable, dispatch. Dispatch will work with the allActions imported from the actions folder.

// //To put it simply, both useState and useEffect enhance functional components to make them do things that classes can but functional components (without hooks) cannot:

// // useState allows functional components to have state, like this.state in class components.
// // useEffect allows functional components to have lifecycle methods (such as componentDidMount, componentDidUpdate and componentWillUnmount) in one single API.

// //useState is a Hook that allows you to add state to functional components. It takes an initial value as an argument and returns an array with two values: the current state and a function to update the state.


// const Cart = ()=>{
//   const cartItems = useSelector((store) => store.cart.items)

//   const dispatch = useDispatch();
//   const handleClearCart=()=>{
//      dispatch(clearCart())
//   }

//     return (
//         <div className="text-center m-4 p-4 ">
//         <h1 className="text-2xl font-bold">Cart</h1>
//         <div className="size-6/12 m-auto">
//             <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
//             {cartItems.length ===0 && <h1>Cart is Empty, Do some Shopping</h1>}
//             <Itemlist items={cartItems}/>
//         </div>
//         </div>
//     )
// }
// export default Cart;