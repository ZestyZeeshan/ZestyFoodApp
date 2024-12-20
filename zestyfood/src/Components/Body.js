import Restaurentcard, { withPromoted } from "./Restaurentcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurentcardPromoted = withPromoted(Restaurentcard);

  // Fetch restaurant data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setlistofRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  // Show offline message if user is not connected to the internet
  if (!onlineStatus)
    return (
      <h1 className="text-center text-red-500 mt-4">
        Please connect to the internet
      </h1>
    );

  // Render Shimmer loader while data is loading
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Filter Section */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search restaurants..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            />
          </div>
          {/* Search Button */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onClick={() => {
              const filteredRes = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
          {/* Top Rated Button */}
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            className="block"
          >
            <div className="p-4 border border-gray-200 rounded-md shadow-md bg-white hover:shadow-lg transition">
              {restaurant.info.Promoted ? (
                <RestaurentcardPromoted resData={restaurant} />
              ) : (
                <Restaurentcard resData={restaurant} />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;







////////////////////////////////////////////////////////////

// OLD CODE

// import Restaurentcard,{withPromoted} from "./Restaurentcard";
// import {useState , useEffect,useContext } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";



// const Body = () =>{

//  const  [listofRestaurants,setlistofRestaurants] =useState([]);
//  //dummy bna liya hai taki filtereing m dikkat na ho
//  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//  const [searchText, setsearchText]= useState("");
//  const RestaurentcardPromoted = withPromoted(Restaurentcard);
//  console.log("render");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () =>{
//     const data= await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json()

//     console.log(json);
    
//     setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
//   };

//   const onlineStatus = useOnlineStatus();

//   if(onlineStatus===false)
//   return (
// <h1>please connect to internet</h1>
// );


// //const {loggedInUser,setuserName} = useContext(UserContext);

//   //Conditional Rendering
//   return listofRestaurants.length === 0 ? ( <Shimmer/>
//   ):(
//       <div className="body">
//         <div className="filter flex">
//           <div className="search m-4 p-4 ">
//           <input type="text" className="border border-solid border-black" 
//           value={searchText} 
//           onChange={(e)=>{
//             setsearchText(e.target.value);
//           }}
//           />
//           <button   className="px-3 py-2 bg-green-200 m-4 rounded-lg"
//           onClick={() => {
//             //Fiilter the restraunt cards and update the UI
//             //search TEXT
//             //console.log(searchText);

//              const filteredRes = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

//              setFilteredRestaurants(filteredRes);

//           }}
//           >
//             search
//             </button>
//           </div>
//           <div className="search m-4 p-4 flex items-center">
//           <button className="px-4 py-2 bg-gray-100 rounded-lg" 
//             onClick={()=> {
//                 const filteredList = listofRestaurants.filter(
//                   (restaurants) => restaurants.info.avgRating
//                   > 4
//                 );
//                 setlistofRestaurants(filteredList);
//             }}
//             >
//               Top Rated Restaurent
//             </button>
            
//             {/* <label>UserName: </label>
//             <input className="border border-black mx-4" 
//             value={loggedInUser.userName}
//             onChange={(e) => setuserName(e.target.value)}></input> */}


//             {/* <div><a href="http://localhost:8501/">
//     <button>Click Me!</button>
// </a></div> */}

//             <div><button><a></a></button></div>

//           </div>
          
         
//         </div>
//         <div className="flex flex-wrap">
          
//            {filteredRestaurants.map((restaurants) => <Link key ={restaurants.info.id}
//            to={"/restaurants/"+restaurants.info.id}>
        
//            {restaurants.info.Promoted ? (<RestaurentcardPromoted resData ={restaurants}/> ):( <Restaurentcard resData ={restaurants}/> )} 
            
//             </Link>)
            
          
//           }
//           </div>
//       </div>
//     );
// };

// export default Body;