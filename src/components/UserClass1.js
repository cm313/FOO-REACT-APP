import React from "react";

class UserClass1 extends React.Component{
  constructor(props){
  super(props);
  console.log("first cild ->child constructor")

  this.state = {
    userInfo: {
       name : "dummyName",
       login: "dummyLogin",
      avatar_url: "dummyImage",
  } 
}
  }

componentDidUpdate(){
  console.log("component Update");
}

componentWillUnmount(){
  console.log("Page Unmounted")

  clearInterval(this.interval);
}

async componentDidMount(){
  console.log("first child -> child commit");

  const userData = await fetch("https://api.github.com/users/cm313");
  const json = await userData.json();
  console.log(json);

  this.setState({
      userInfo: json,
  });

  this.interval =  setInterval(()=>{
       console.log("gap");
  }, 300);

}



render(){
  console.log("first child ->child render");
 
  const{name, login, avatar_url} = this.state.userInfo;
   
  return(
    <div className = "user-details">
      <img className="w-[200px]" src = {avatar_url}>
      </img>
      <div>{name}</div>
      <div>{login}</div>
      
    </div>
  )
}
}

export default UserClass1;