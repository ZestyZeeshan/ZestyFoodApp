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
    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 shadow-lg">
      {/* Main container to hold logo and navigation */}
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4 text-white">
        
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
          {/* Navigation links styled with hover effects */}
          <ul className="flex items-center space-x-6 font-medium">
            {/* Show online status with dynamic colors */}
            <li>
              Online Status:{" "}
              <span className={onlineStatus ? "text-green-400" : "text-red-400"}>
                {onlineStatus ? "✅" : "❌"}
              </span>
            </li>

            {/* Links to other pages */}
            <li className="hover:text-yellow-400 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-400 transition duration-300">
              <Link to="/About">About Us</Link>
            </li>
            <li className="hover:text-yellow-400 transition duration-300">
              <Link to="/Contact">Contact Us</Link>
            </li>

            {/* Dynamic cart item count */}
            <li className="font-bold text-lg hover:text-yellow-400">
              <Link to="/cart">Cart ({cartItems.length} items)</Link>
            </li>

            {/* Button to toggle Login/Logout state */}
            <button
              className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
              onClick={() => {
                // Toggle button name between Login and Logout
                BtnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {BtnNameReact}
            </button>

            {/* Display the name of the logged-in user */}
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