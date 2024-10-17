import {MENUITEM_IMAGES} from "../utils/constants";

CartItems = (props)=>{
  const{items} = props;
  return (
  <div>
    {
    items.map((item)=>{
      const{name, imageId, price, description} = item?.card?.info;
      const{rating} = item?.card?.info?.ratings.aggregatedRating;
       return (
        <div className="w-[500px] ml-10">
          <div className="flex justify-center mb-4 mt-2 border-[1px] p-2 shadow-md rounded-lg">
               <img className="h-[100px] rounded-xl object-cover" src = {MENUITEM_IMAGES + imageId}></img>
            <div className="pl-5">
              <div className="font-sans font-bold pb-1 text-sm text-left">{name}</div>
              <div className="flex pb-1 ">
              <img className="w-4 h-4" src="https://tse2.mm.bing.net/th?id=OIP.Vq4iQC8p3quhWYipAjoIIAAAAA&amp;pid=Api&amp;P=0&amp;w=300&amp;h=300"></img>
              <div className="font-sans font-bold text-sm text-gray-500 pl-2">{rating}</div>
              </div>
              <div className="font-sans pb-1 font-bold text-sm pr-72 text-gray-500 text-left">&#8377;{price/100}</div>
              <div className=" text-[12px] text-slate-500 text-left">{description}</div>
            </div>
            </div>
            </div>
            );
          }
        )
      }
  </div>
  )
}

export default CartItems;