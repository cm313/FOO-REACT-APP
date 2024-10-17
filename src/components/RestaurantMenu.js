import {useState, useEffect} from "react";
import ShimmerUI from "./Shimmer";
//import BiryaniMenu from "./BiryaniMenu";
import {useParams} from "react-router-dom";
import useMenuData from "../utils/useMenuData";
import RestaurantCategory from "./RestaurantCategory";
import LinkedIn from "../images/LinkedIn.png"

const RestaurantMenu = ()=>{

/*
Here, RestaurantMenu() componet doing 2 things
1) fetching the menu data
2) rendering it on the UI

But, It is a better way to use each component for a single operation only to acheicve
Single Responsibility Principle.
So, to overcome this, use Custom Hooks, Here Iam creating  a custom Hook called 
useMenuData to fetch the data from API, Instead of fetching here only like below code.
*/


 /* const[menuData, setMenuData] = useState(null); 
   
  const {resId} = useParams();

useEffect(()=>{
  fetchMenuData();
}, []);

const fetchMenuData = async ()=>{
const data = await fetch(RESTRO_MENU_API + resId);
const jsonData = await data.json();
setMenuData(jsonData?.data);
}; */

const{resId} = useParams();

const menuData = useMenuData(resId);

const[showIndex, setShowIndex] = useState(null);

if(menuData == null)
  return <ShimmerUI/>

const {name,
  costForTwoMessage,
  avgRating,    
  cuisines, 
  locality} = menuData?.cards[2]?.card?.card?.info;

//const {itemCards} = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

const categories = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( category => category?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


return (
 <div className="menu-container ml-32 w-[1000px] border-x-[1px] shadow-2xl border-transparent border-b-[1px] mb-72">
  <div className="text-[25px] font-bold font-serif mt-10 ml-40" >{name}</div>
  <div className="border-[10px]  rounded-2xl w-[650px] my-5 ml-40 py-5 px-5">
    <div className="font-medium pb-4 border-b-[1px] ">{avgRating}(100+ratings) . {costForTwoMessage}</div>
    <div className="font-bold text-red-600 pb-4 border-b-[1px]">{cuisines.join(",")}</div>
    <div className=" font-medium pb-4 border-b-[1px] "><b>Outlet:</b> {locality}</div>
    <div className=" pb-4 border-b-[1px] font-sans font-sm text-slate-500">Order above &#8377;149 for discounted delivery fee</div>
    <div className="oneSubscription font-sans font-sm text-slate-500"> Free delivery on orders above &#8377;199</div>
  </div>

  <div className = "ml-40 font-bold">
    Deals for you
  </div>

  <div className = "flex items-center mt-3 pl-40">
    <div className="flex border-[1px] border-gray-600 p-2 mr-3 rounded-[20px] w-64">
      <div className="w-16 pr-4">
        <img className="img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/welcome"></img>
      </div>
      <div className="deal-info">
        <div className="font-bold">
          Flat &#8377;100 Off
        </div>
        <div className="text-gray-500">
          USE WELCOMEBACK100
        </div>
      </div>
    </div>

    <div className="flex border-[1px] border-gray-600 p-2 rounded-[20px] w-64">
      <div className="w-16 pr-4">
        <img className="img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"></img>
      </div>
      <div className="deal-info">
        <div className="font-bold">
          30% Off upto &#8377;75
        </div>
        <div className="text-gray-500">
          USE SAVINGS4ONE
        </div>
      </div>
    </div>
  </div>
  
  <div className="mt-5 ml-40 w-[600px]">
    <div className="pl-56">M E N U</div>
    <div className="my-5">
      <input className="border-[1px] py-2 px-56 bg-gray-300 rounded-lg" type = "text" placeholder="search for dishes"></input>
    </div>

    {
    categories.map((category, index)=>(
     <RestaurantCategory key = {category?.card?.card?.title} data = {category?.card?.card} showItems = {index == showIndex ? true : false} updateIndex = {()=>{
      (showIndex == index) ? setShowIndex(null) : setShowIndex(index);
     }}/>
      ))
   }
    <div className="h-60 mb-5 rounded-sm w-[630px] p-4 bg-gradient-to-tr from-teal-50 to-yellow-50 border-transparent shadow-sm my-8" >
     <div className="font-sans font-bold">{name}</div>
     <div className="font-mono font-extralight text-sm">Outlet: {locality}</div>
     <hr className="h-[1px] my-5 bg-gray-200 border-0 dark:bg-gray-400"></hr>
     <div className="font-mono text-sm text-gray-600 italic">FOO is a web application created for learning purpose. If you have any queries,
      feel free to reach out to me on LinkedIN.
     </div>
     <a href="https://www.linkedin.com/in/chnadra/"><img className="w-7 mt-5 ml-56" src={LinkedIn} alt="Loading"></img></a>
     </div>
  </div>
 </div>
);
};

export default RestaurantMenu;