import {CDN_URL} from "../utils/constants";
//import {useContext} from "react";
//import userContext from "./../utils/userContext";

const RestaurantCard = (props)=>{
  const {resData} = props;
  const {
    cloudinaryImageId, 
    name, 
    avgRating, 
    cuisines, 
    costForTwo, 
    areaName} = resData?.info;
  const{deliveryTime} = resData?.info?.sla;
   
  //const{userName} = useContext(userContext);  

  return (
  <div data-testid = "ResCard" className = "restro-card mx-3 my-3 md:px-3 md:py-3 md:w-64 w-36 transition-transform duration-100 ease-in-out hover:cursor-pointer hover:scale-90 text-black overflow-hidden">
   <div className = "logo-container md:w-96 w-44">
    <img className = "md:w-60 w-32 md:h-40 h-32 rounded-xl object-cover" src={
     CDN_URL + cloudinaryImageId
    } alt="loading.."></img>
    </div>
    <div className="leading-relaxed">
      <div className="font-bold font-serif">{name}</div>
      <div className="text-sm flex items-center">
          <img className="w-4 h-4" src="https://tse2.mm.bing.net/th?id=OIP.Vq4iQC8p3quhWYipAjoIIAAAAA&amp;pid=Api&amp;P=0&amp;w=300&amp;h=300"></img>
         <span className="ml-2 text-sm font-bold">{avgRating}</span> 
          <span className="font-bold text-sm ml-2 font-sans"> {deliveryTime} mins </span>
      </div>
      <div className="italic text-sm text-slate-500 overflow-hidden">{cuisines.join(",")}</div>
      <div className="text-sm font-semibold font-sans overflow-hidden">{costForTwo}</div>
      <div className="text-sm font-semibold font-sans  overflow-hidden">{areaName}</div>
    </div>
  </div>
  );
};

//Higher order component

export const withPromotedLabel = (RestaurantCard)=>{

  return (props)=>{
    return (
      <div>
      <label>promoted</label>
      <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;