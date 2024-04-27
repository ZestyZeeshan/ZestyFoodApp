import React, { lazy , Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
// import ReactDOM from "react-dom";
import './App.css';
import Header from "./Components/Header";
import About from "./Components/About";
//import Restaurentcard from "./Components/Restaurentcard";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from './Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
//import Grocery from './Components/Grocery';


//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On demnad Loading

const Grocery = lazy(()=> import('./Components/Grocery'))//funtion given by react

/* 
=Header
  logo
  nav bar
=Body
  search
  restaurantcontainer
  restaurentcard
    name of res, img , card, rating
=footer
  copyright
  address
  links
  contact

*/ 
//i want to push my childer to the body
//with the help of outlet we can our childern path will find ki header k bad kya jana ahai
const Applayout= ()=>{
  return(
    <div className="app">
     <Header/>
     <Outlet/>
     
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>} ><Grocery/></Suspense> 
      }
    ],
    errorElement:<Error/>
  },
  
])
  
  

//export default Applayout;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}>
    
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
