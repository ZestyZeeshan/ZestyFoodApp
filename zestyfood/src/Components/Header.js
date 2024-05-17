
import { LOGO_URL } from "../utils/Constant";
import { useEffect, useState,useContext } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

  const [BtnNameReact, setBtnNameReact] =useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

//selectors - its a hook
//hook is normal js function
//useselector give access to our store
const cartItems = useSelector((store) => store.cart.items);


  console.log("Header Render");
  useEffect(()=>{
    console.log("useEffect  called ");
  },[]);


    return(
      <div className="flex justify-between bg-green-100 shadow-md ">
        <div className="logocontainer">
          
        <img className="rounded-full w-24 h-24 m-2 " src={LOGO_URL}alt="logo"/> 
        
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4">
           <li className="px-5"> 
              Online Status:{onlineStatus ? "✅" :"❌"}
            </li>
            <li className="px-5"><Link to="/Contact">Contact Us</Link></li>
            <li className="px-5"> <Link to="/grocery"> 
              Grocery
            </Link></li>
            <li className="px-5"><Link to="/About">About Us</Link></li>
            <li className="px-5"><Link to="/">Home</Link></li>
            
            <li className="px-5 font-bold text-xl"><Link to= "/cart">Cart-({cartItems.length}items)</Link></li>
            <button className="login" onClick={
              ()=>{
                BtnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              }
            }>
              {BtnNameReact}
            </button>

            <li className="px-5 font-bold">{loggedInUser}</li>

          </ul>
       
  
        </div>
        
      </div>
    );
  };

  export default Header;