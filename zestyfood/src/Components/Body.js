import Restaurentcard from "./Restaurentcard";

import {useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>{

 const  [listofRestaurants,setlistofRestaurants] =useState([]);
 //dummy bna liya hai taki filtereing m dikkat na ho
 const [filteredRestaurants, setFilteredRestaurants] = useState([]);

 const [searchText, setsearchText]= useState("");
 console.log("render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json()

    console.log(json);
    
    setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false)
  return <h1>please connect to internet</h1>



  //Conditional Rendering
  return listofRestaurants.length === 0 ? ( <Shimmer/>
  ):(
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4 ">
          <input type="text" className="border border-solid border-black" 
          value={searchText} 
          onChange={(e)=>{
            setsearchText(e.target.value);
          }}
          />
          <button   className="px-3 py-2 bg-green-200 m-4 rounded-lg"
          onClick={() => {
            //Fiilter the restraunt cards and update the UI
            //search TEXT
            console.log(searchText);

             const filteredRes = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

             setFilteredRestaurants(filteredRes);

          }}
          >
            search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" 
            onClick={()=> {
                const filteredList = listofRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setlistofRestaurants(filteredList);
            }}
            >
              Top Rated Restaurent
            </button>

          </div>
          
         
        </div>
        <div className="flex flex-wrap">
          
           {filteredRestaurants.map((restaurants) => <Link key ={restaurants.info.id}
           to={"/restaurants/"+restaurants.info.id}>
            <Restaurentcard resData ={restaurants}/>
            </Link>)
          
          }
          </div>
      </div>
    );
};

export default Body;