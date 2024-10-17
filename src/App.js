import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider, Outlet}  from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Example from "./components/Example";
import userContext from "./utils/userContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"; 
import Footer from "./components/Footer";
//import InstaMart from "./components/InstaMart";

//chuncking
//code splitting
//Dynamic Bundling
//lazy Loading
//on demand loading

const InstaMart = lazy(()=> import("./components/InstaMart"));

const AppLayout = ()=>{

  const[uName, setUname] = useState(null);

  useEffect(()=>{
    const data = {
      name: "Manisha&Akhila",
    }
    setUname(data.name);
  }, [])



  return (
    <Provider store={appStore}>
    <userContext.Provider value = {{userName: uName, setUname}}>
        <div className="app">
           <Header/>
          <Outlet/>
          <Footer/>
        </div> 
        </userContext.Provider>   
        </Provider>            
  );
}; 


const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout/>,
  children: [
    {
      path: "/",
      element: <Body/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/contactUs",
      element: <ContactUs/>
    },
    {
      path: "/instamart",
      element: (<Suspense fallback={
        <h1>Loading...</h1>
      }><InstaMart/></Suspense>
    )
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: "/restaurant/:resId",
      element: <RestaurantMenu/>
    },
    {
      path:'/login',
      element: <Example/>
    },
  ],
  errorElement: <Error/>
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);        