import {MENUITEM_IMAGES} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "./../utils/cartSlice";

const ItemList = (props)=>{
  
   const{items} = props;
  //useDispatch is a hook
   const dispatch = useDispatch();
   // dispatch is a function
   const handleAddItem = (item)=>{
    // dispatching an action
      dispatch(addItem(item));
      // action.payload will add item into cart
   }

   return (
    <div>
        { 
      items.map((item)=>{
      const{name, imageId, price, description} = item?.card?.info;
      const{rating, ratingCountV2} = item?.card?.info?.ratings.aggregatedRating;
    return(  <div className=" leading-relaxed flex p-2 justify-between mb-10 border-x-[1px] shadow-lg  border-b-[2px]">
                <div className="info">
                  <div className="font-medium">{name}</div>
                  <div className="text-sm font-medium">&#8377;{price/100}</div>
                   <div className="flex">
                  <img className="w-4 h-4" src="https://tse2.mm.bing.net/th?id=OIP.Vq4iQC8p3quhWYipAjoIIAAAAA&amp;pid=Api&amp;P=0&amp;w=300&amp;h=300"></img>
                  <div className="pl-2 text-sm font-medium">{rating} ({ratingCountV2})</div>
                  </div>
                  <div className="mt-[10px] text-sm mr-7 text-gray-500">{description}</div>
                </div>
                <div className = "image">
                  <img className="h-[100px] w-[100px] object-cover rounded-xl" src = {MENUITEM_IMAGES + imageId}></img>
                  <button className="bg-orange-400 ml-6 mr-6 px-5 text-stone-100 rounded-md font-mono font-bold hover:text-lime-800" onClick= {()=>handleAddItem(item)}>ADD</button>
                </div>
              </div>
    );
    })
  }     

    </div>
   )




    
}

export default ItemList;