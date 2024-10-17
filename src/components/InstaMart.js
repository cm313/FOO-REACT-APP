import {useContext}  from "react";
import userContext from "./../utils/userContext";

const InstaMart = ()=>{

  const{userName} = useContext(userContext);

  return (
    <div>
      <div className="font-medium">{userName}</div>
    <h1>InstaMart will be available soon. We are working on it</h1>    
    <h2>Please be patient. You will amazed by the offers comming soon..</h2> 
    </div>
  );

}

export default InstaMart;