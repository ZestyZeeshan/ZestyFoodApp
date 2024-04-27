import User from "./User";
import UserClass from "./UserClass";


const About=()=>{
    return (
        <div>
            <h1>This is about page of zesty cart</h1>
            <User name={"call me zesty"}/>

            <UserClass name={"zesty from class compo"} location={"Muzaffarpur"}/>  
        </div>
    )
}
export default About;