import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

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

   // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);
      
        return (
              
            <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-xl">{cuisines.join(",")}</p>
            <p>{costForTwoMessage}</p>
            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>( <li key={item.card.info.id}>{item.card.info.name}={"Rs."}
                {item.card.info.price/100 || item.card.info.defaultprice/100 } </li>))}
                

            </ul> */}
            {categories.map((category) => (<RestaurantCategory key={category?.card?.card.title} data= {category?.card?.card}/>))}
            </div>
            );
            
      
    
};
export default RestaurantMenu;