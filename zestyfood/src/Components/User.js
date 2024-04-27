import { useState,useEffect } from "react";
const User = (props) =>{
    const [count,setcount] = useState(0);
    const handleClick=()=>{
        setcount(count+1)
    }

    useEffect(() => {
    //API Calls
    },[]);

    const [count2] = useState(1);
    return (
        <div className="user_card">
            <h1>Count ={count}</h1>
            <h1>Count2 ={count2}</h1>
            <button onClick={handleClick}
            >Increase</button>
            <h1>Name: {props.name}</h1>
            <h1>Location: Okhla</h1>
            <h1>Twitter: Zesty@19</h1>
        </div>
    )
}

export default User;