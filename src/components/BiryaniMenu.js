// Not used this file any where in the project

import {MENUITEM_IMAGES} from "../utils/constants";

const BiryaniMenu = (props)=>{
 const {biryanidata} = props;
 const{name, imageId, price} = biryanidata?.card?.info;

 const{rating, ratingCountV2} = biryanidata?.card?.info?.ratings.aggregatedRating;

 return (
  <div className="item-info">
    <div className="info">
      <div className="item-name">{name}</div>
      <div className="price">&#8377;{price/100}</div>
      <span className="rating">{rating}</span><span className = "ratingCount">({ratingCountV2})</span>
    </div>
    <div className = "image">
      <img className="item-image" src = {MENUITEM_IMAGES + imageId}></img>
      <button className="add-button">ADD</button>
    </div>
  </div>
 )

}

export default BiryaniMenu;