import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
 //   const [resInfo,setresInfo]=useState(null);

    const {resId}=useParams();
    
    const resInfo = useRestaurantMenu(resId);
    // we will make our own custom hook
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu= async()=>{
    //     const data = await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     console.log("jsonnnn",json);
    //     setresInfo(json.data);
    // }


    if (resInfo === null) return <Shimmer/> ; 
         
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      
        return (
              
            <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>( <li key={item.card.info.id}>{item.card.info.name}={"Rs."}
                {item.card.info.price/100 || item.card.info.defaultprice/100 } </li>))}
                

            </ul>
            </div>
            );
            
      
    
};
export default RestaurantMenu;