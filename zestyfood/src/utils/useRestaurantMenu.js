import { useEffect, useState } from "react";
import { MENU_API } from "../utils/Constant";
const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    //fetchdata
      useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
    //     console.log("jsonnnn",json);
    setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;