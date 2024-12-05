import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './Components/Cart';

// Lazy-loaded components
const Grocery = lazy(() => import('./Components/Grocery'));
const About = lazy(() => import('./Components/About'));

// Application Layout Component
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: 'zeeshan',
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// App Router with Suspense fallback for lazy-loaded components
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1 className="text-center">Loading About Page...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1 className="text-center">Loading Grocery Page...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

///////////////////////////////////////////////////////////////////
//OLD CODE

// import React, { lazy , Suspense, useEffect, useState} from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './App';
// //import reportWebVitals from './reportWebVitals';
// // import ReactDOM from "react-dom";
// import './App.css';
// import Header from "./Components/Header";
// import Body from "./Components/Body";
// //import About from "./Components/About";
// //import Restaurentcard from "./Components/Restaurentcard";
// import Contact from './Components/Contact';
// import Error from './Components/Error';
// import RestaurantMenu from './Components/RestaurantMenu';
// import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import UserContext from './utils/UserContext';
// //import Grocery from './Components/Grocery';
// import {Provider} from "react-redux"
// import appStore from './utils/appStore';
// import Cart from './Components/Cart';

// //Chunking
// //Code Splitting
// //Dynamic Bundling
// //Lazy Loading
// //On demnad Loading

// const Grocery = lazy(()=> import('./Components/Grocery'))//funtion given by react
// const About = lazy(() => import ('./Components/About'))

// /* 
// =Header
//   logo
//   nav bar
// =Body
//   search
//   restaurantcontainer
//   restaurentcard
//     name of res, img , card, rating
// =footer
//   copyright
//   address
//   links
//   contact

// */ 
// //i want to push my childer to the body
// //with the help of outlet we can our childern path will find ki header k bad kya jana ahai
// const Applayout= ()=>{
//   const[userName, setuserName]=useState();

//   useEffect(()=> {
//     const data={
//       name:"zeeshan",
//     };
//     setuserName(data.name);
//   },[]);

//   return(
//     <Provider store={appStore}>
//     <UserContext.Provider value={{loggedInUser:userName, setuserName}}>
//     <div className="app">
//      <Header/>
//      <Outlet/>
     
//     </div>
//     </UserContext.Provider>
//     </Provider>
//   );
// };

// const appRouter=createBrowserRouter([
//   {
//     path:"/",
//     element:<Applayout/>,
//     children:[
//       {
//         path:"/",
//         element:<Body/>
//       },
//       {
//         path:"/about",
//         element:<About/>,
//       },
//       {
//         path:"/Contact",
//         element:<Contact/>,
//       },
//       {
//         path:"/restaurants/:resId",
//         element:<RestaurantMenu/>
//       },
//       {
//         path:"/grocery",
//         element:<Suspense fallback={<h1>Loading....</h1>} ><Grocery/></Suspense> ,
//       },
//       {
//         path:"/cart",
//         element:<Cart/>
//       },
//     ],
//     errorElement:<Error/>
//   },
  
// ])
  
  

// //export default Applayout;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={appRouter}>
    
//   </RouterProvider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals();
