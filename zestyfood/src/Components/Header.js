import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

  const [BtnNameReact, setBtnNameReact] =useState("Login");

  const onlineStatus = useOnlineStatus();

  console.log("Header Render");
  useEffect(()=>{
    console.log("useEffect  called ");
  },[]);


    return(
      <div className="flex justify-between bg-pink-100 shadow-md ">
        <div className="logocontainer">
          
        <img className="w-56" src={LOGO_URL}alt="logo"/> 
        
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
            <li className="px-5"><Link to="/Error">Cart</Link></li>
            <button className="login" onClick={
              ()=>{
                BtnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              }
            }>
              {BtnNameReact}
            </button>
          </ul>
       
  
        </div>
        
      </div>
    );
  };

  export default Header;