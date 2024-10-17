import UserClass from "./UserClass";
import React from "react";
//import userContext from "./../utils/userContext";


class About extends React.Component{

  constructor(props){
      super(props);
      console.log("parent constructor");
  }

  componentDidMount(){
    console.log("parent commit");
  }

  render(){
    console.log("parent render");
  return (
  /* 
    <div>
      <h1 className="font-bold">This is a Food Delivery App</h1>
      <h2 className="font-bold">We are here to save your time and make your life easy</h2>
      In User:
       <userContext.Consumer>
        {
          ({userName}) => <h3 class="font-medium">{userName}</h3>
        }
      </userContext.Consumer>
      <UserClass name="Paradise Biryani" cuisines="North Indian, South Indian, French"/>
    </div> 
     */
    <div className="h-[600px] bg-contain bg-[url(https://coreldrawdesign.com/resources/previews/preview-delivery-boy-illustration-free-vector-1657973800.jpg)]">
      <div className="font-serif text-2xl text-center py-10 px-2 shadow-lg rounded-md text-black font-extrabold ">
       At FOO, We bring delicious, fresh food to your doorstep.
      </div>
    </div>
   

  );
}
}

export default About;