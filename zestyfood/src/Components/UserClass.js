//this is the class based Componenets
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

    this.state={
        count : 0,
        count2 : 1,
        userInfo:{
            name:"Dummy",
            location:"Default",
            avatar_url:"Dummy photo"
        },
    };
    }
async componentDidCatch(){
    //API call

    const data = await fetch("https://api.github.com/users/ZestyZeeshan");

    const json = await data.json();



    this.setState({
        userInfo:json,
    })
    console.log(json);


};

    render(){
        const {name,location,avatar_url} = this.state.userInfo;
        const {count2}=this.state;
        return (
            <div className="user_card">
                <h1>Count = {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count Increase</button>
                <h1>Count2 = {count2}</h1>
                <img src={avatar_url} />
                <h1>Name: {name}</h1>
                <h1>Location: {location}</h1>
                <h1>Twitter: Zesty@19</h1>
            </div>
        )
    }
    
}
export default UserClass;