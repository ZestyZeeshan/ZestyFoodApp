import { useState } from "react";
import Itemlist from "./ItemList"

//noe restaurantcategory is controlled 
const RestaurantCategory = ({data, showItems, setshowIndex}) =>{
//restaurantMenu papernt hai and we want to take control as a parents and restaurantCategory ab apni state khud ni decide krega, pareet control rkhe sara

//i dont want parent hi state rkhe only

//bcz y individually handle krre the
// const [showItems,setshowItems] = useState(false);

const handleClick = () =>{
//     //console.log("Clicked");
//     setshowItems(!showItems);

         setshowIndex();  

 }

    return (
        <div>
            {/*Accordion header*/}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer"
                onClick={handleClick}
                >
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
                </div>
           
             {/*Accordion Body*/}
             {showItems && <Itemlist items={data.itemCards}/>}
            </div>
            
             
        </div>
    )
}
export default RestaurantCategory