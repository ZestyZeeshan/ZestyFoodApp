import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice"; // Import removeItem action
import { CDN_URL } from "../utils/Constant";

const Itemlist = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  // Handler for adding items
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  // Handler for removing items
  const handleRemoveItems = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-grey-200 text-left flex justify-between"
        >
          {/* Left Section - Item Info */}
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          {/* Right Section - Image and Buttons */}
          <div className="w-3/12 p-4 relative">
            {/* Buttons */}
            <div className="absolute flex items-center space-x-2">
              {/* Add Button */}
              <button
                className="p-2 bg-green-100 text-green-700 rounded-lg shadow-md hover:bg-green-200 transition"
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>

              {/* Remove Button */}
              <button
                className="p-2 bg-red-100 text-red-700 rounded-lg shadow-md hover:bg-red-200 transition"
                onClick={() => handleRemoveItems(item)}
              >
                Remove -
              </button>
            </div>
            {/* Item Image */}
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full mt-10" // Adds spacing below the buttons
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;



///////////////////////////////////////////////////////////

//   OLD CODE 

// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
// import { CDN_URL } from "../utils/Constant";
// const Itemlist =  ({items}) =>{
//     console.log(items);

//     const dispatch = useDispatch();

//   const handleAddItems = (item) =>{
//     //dispatch
//     dispatch(addItem(item))

//   };

//     return(
//         <div>
       
//             {items.map((item) =>( 
//             <div 
//             key= {item.card.info.id} className="p-2 m-2 border-b-2 border-grey-200 text-left flex justify-between">
//                 <div className="w-9/12">
//                     <div className="py-2">
//                     <span>{item.card.info.name}</span>

//                     <span> - ₹ {item.card.info.price ? item.card.info.price/100
//                     :item.card.info.defaultPrice/100}
//                     </span>

//                 </div>

//                 <p className="text-xs">{item.card.info.description}
//                 </p>

//                 </div>
//                 <div className="w-3/12 p-4">
               
//                 <div className="absolute">
//                 <button className="p-2 mx-12 rounded-lg bg-slate-50 shadow-lg " onClick={() => handleAddItems(item)}>Add +</button>
//                 </div>
//                 <img src={CDN_URL+item.card.info.imageId} className="w-full" />
//                 </div>
//             </div>
//             ))}
       
//         </div>
//     );
// };

// export default Itemlist;