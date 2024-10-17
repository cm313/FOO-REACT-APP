import ItemList from "./ItemList";
import {useState} from "react";
const RestaurantCategory = ({data, showItems, updateIndex})=>{

      const [arrowbtn, setArrowBtn] = useState("˅");

      const handleClick = ()=>{
        showItems ? setArrowBtn("˅") : setArrowBtn("˄");       
         updateIndex();    
      }

      return (
        <div>
          {/* Accordian Header */}
         <div className=" w-[630px] border-b-[12px] p-[15px] mb-[20px]">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
              <div className="font-bold">{data?.title} ({data?.itemCards?.length})</div>
              <div>{arrowbtn}</div>
           </div>
           {/* Accordian body */}
           {showItems && <ItemList items = {data.itemCards}/>}
          </div>
        </div>
 
      )
      /*
       
    */
}
export default RestaurantCategory;