import { LOGO_URL } from "../utils/Constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // State to toggle between "Login" and "Logout" button names
  const [BtnNameReact, setBtnNameReact] = useState("Login");

  // Check online status using a custom hook
  const onlineStatus = useOnlineStatus();

  // Access the logged-in user from the UserContext
  const { loggedInUser } = useContext(UserContext);

  // Access cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    // Header with a soothing gradient and box shadow
    <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-pink-200 shadow-md sticky top-0 z-50">
      {/* Main container for logo and navigation */}
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4 text-gray-700">
        {/* Logo Section */}
        <div className="logocontainer">
          <img
            className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            src={LOGO_URL}
            alt="logo"
          />
        </div>

        {/* Navigation Links Section */}
        <div>
          <ul className="flex items-center space-x-6 font-medium">
            {/* Online status indicator */}
            <li>
              Online Status:{" "}
              <span
                className={`${
                  onlineStatus ? "text-green-500" : "text-red-500"
                } font-semibold`}
              >
                {onlineStatus ? "✅" : "❌"}
              </span>
            </li>

            {/* Navigation Links */}
            <li className="hover:text-gray-900 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-900 transition duration-300">
              <Link to="/About">About Us</Link>
            </li>
            <li className="hover:text-gray-900 transition duration-300">
              <Link to="/Contact">Contact Us</Link>
            </li>

            {/* Dynamic Cart Item Count */}
            <li className="font-bold text-gray-700 hover:text-gray-900 transition duration-300">
              <Link to="/cart">Cart ({cartItems.length} items)</Link>
            </li>

            {/* Button to toggle Login/Logout state */}
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg border border-black hover:bg-gray-400 hover:text-gray-900 transition duration-300"

              onClick={() => {
                BtnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {BtnNameReact}
            </button>

            {/* Display Logged-In User */}
            <li className="px-5 font-medium">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;














////////

//OLD CODE


// import { LOGO_URL } from "../utils/Constant";
// import { useEffect, useState,useContext } from "react";
// import { Link } from 'react-router-dom';
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header=()=>{

//   const [BtnNameReact, setBtnNameReact] =useState("Login");

//   const onlineStatus = useOnlineStatus();

//   const {loggedInUser} = useContext(UserContext);
//   console.log(loggedInUser);

// //selectors - its a hook
// //hook is normal js function
// //useselector give access to our store
// const cartItems = useSelector((store) => store.cart.items);


//   console.log("Header Render");
//   useEffect(()=>{
//     console.log("useEffect  called ");
//   },[]);


//     return(
//       <div className="flex justify-between bg-green-100 shadow-md ">
//         <div className="logocontainer">
          
//         <img className="rounded-full w-24 h-24 m-2 " src={LOGO_URL}alt="logo"/> 
        
//         </div>
//         <div className="flex items-center ">
//           <ul className="flex p-4 m-4">
//            <li className="px-5"> 
//               Online Status:{onlineStatus ? "✅" :"❌"}
//             </li>
//             <li className="px-5"><Link to="/Contact">Contact Us</Link></li>
//             {/* <li className="px-5"> <Link to="/grocery"> 
//               Grocery
//             </Link></li> */}
//             <li className="px-5"><Link to="/About">About Us</Link></li>
//             <li className="px-5"><Link to="/">Home</Link></li>
            
//             <li className="px-5 font-bold text-xl"><Link to= "/cart">Cart-({cartItems.length}items)</Link></li>
//             <button className="login" onClick={
//               ()=>{
//                 BtnNameReact === "Login"
//                 ? setBtnNameReact("Logout")
//                 : setBtnNameReact("Login");
//               }
//             }>
//               {BtnNameReact}
//             </button>

//             <li className="px-5 font-bold">{loggedInUser}</li>

//           </ul>
       
  
//         </div>
        
//       </div>
//     );
//   };

//   export default Header;