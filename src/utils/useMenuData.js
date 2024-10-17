import {RESTRO_MENU_API} from "./constants" ;
import {useState, useEffect} from "react";

const useMenuData = (resId)=>{

const [menuData, setMenuData] = useState(null);

useEffect(()=>{
  fetchData();
}, []);

const fetchData = async ()=>{
  const data = await fetch(RESTRO_MENU_API+resId);
  const json = await data.json();
  setMenuData(json?.data);
};

return menuData;
}

export default useMenuData;