import {LOGO_URL} from "../utils/constants";
import appLogo from "./../images/appLogo.png";
import {useState} from "react";
import {Link} from "react-router-dom";
//import userContext from "./../utils/userContext";
//import {useContext} from "react";
import {useSelector} from "react-redux";
import cartIcon from "../images/cartIcon.png";

const Header = ()=>{

  const [loginbtn, setLoginbtn] = useState("Login");

 // const {userName} = useContext(userContext);
 
  const cartItems = useSelector((store)=>store.cart.items);

  //subscribing to the store
  // useSelector() hook gives us acces to the redux store
  // if I only need the access of items in cart then store.cart.items
 

  return (
  <div className="flex justify-between items-center bg-orange-300 border-gray-500 shadow-md">
    <div className="logo-container">
      <img className = "w-16 mx-6 rounded-full"
      src = {appLogo} alt="Loading.."></img>
    </div>
    <div className="nav-items">
      <ul className="flex">
      {/*  <li className=" font-serif font-extrabold pr-5 transition-all hover:text-white">
          <Link to = "/instamart">InstaMart</Link>
        </li> */}
        <li className="pr-5 font-serif font-extrabold transition-all hover:text-white">
        <Link to = "/">Home</Link>
          </li>
        <li className="pr-5 font-serif font-extrabold transition-all hover:text-white">
          <Link to = "/about">About Us </Link>
          </li>
        <li className="pr-5 font-serif font-extrabold transition-all hover:text-white">
        <Link to = "/contactus">Contact Us</Link>
        </li>
        <li className="pr-5 font-sans font-bold transition-all">
         <Link to = "/cart"> 
         <div className="flex">
          <img className="w-12 pt-2" src={cartIcon}></img>
          <div className=" -ml-5">{cartItems.length}</div>
         </div>
         
         </Link>
          </li>
          <li>
       <Link to = "/login"><button className="pr-5 font-serif font-extrabold transition-all hover:text-white" onClick = {()=>{
            loginbtn === "Login"? setLoginbtn("Logout"): setLoginbtn("Login");
        }}>{loginbtn}</button> </Link> 
        </li>
       
      </ul>
    </div>
  </div>
  );
  };

  export default Header;
  // above statement is called default export and there should be only one default export in a file