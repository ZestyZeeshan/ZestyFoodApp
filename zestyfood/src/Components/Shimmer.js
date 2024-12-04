const Shimmer = () => {
    return (
      <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Array(12).fill().map((_, index) => (
          <div key={index} className="shimmer-card bg-gray-200 animate-pulse h-40 rounded-lg p-4">
            <div className="bg-gray-300 h-24 rounded-lg mb-2"></div>
            <div className="bg-gray-300 h-4 w-2/4 rounded-lg mb-2"></div>
            <div className="bg-gray-300 h-4 w-1/2 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  };
  export default Shimmer;
  
//////////////////////////////////////////////////

// OLD CODE 

// const Shimmer = () =>{
//     return <div className="shimmer_container">
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     <div className="shimmer-card">Cards</div>
//     </div>
// }
// export default Shimmer;