import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    //chech if onlion
    const [onlineStatus, setOnlineStatus] = useState(true);

    //boolean value
      useEffect(()=>{
        //executes only one
        window.addEventListener("online", () =>{
          setOnlineStatus(false);
        })
     

      window.addEventListener("online", () =>{
        setOnlineStatus(true);
      })
    },[]);
    //we use omline event listner 
    return  onlineStatus

    
}

export default useOnlineStatus;