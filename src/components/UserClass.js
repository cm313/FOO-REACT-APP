 /* import React from "react";
 
 class UserClass extends React.Component {
 
 constructor(props){
   super(props);
  this.state = {
    headName: "Mahesh",
    id: 356,
    count: 0
  }
 }


  render(){

    const{name, cuisines} = this.props;
    const{headName, id, count} = this.state;
    const styleBut = {
      cursor: "pointer",
     }
   return (
    <div className = "user">
    <div className="name">{name}</div>
    <div className = "cuisines">{cuisines}</div>
    <div className="owner"> Owner: {headName} ID: {id}</div>
    <div className="increase">Count: {count}</div>
    <button style={styleBut} className= "update" onClick = {()=>{
       this.setState({
        count : this.state.count+1,
        
       })  
         
    }}> UpdateCount</button>
    </div>
   )
  }
 

 }

 export default UserClass;
 */

 import React  from "react";
 import UserClass1 from "./UserClass1";


 class UserClass extends React.Component{

  constructor(props){
    super(props);
    console.log("first child constructor")
  }
  
   componentDidMount()
{
  console.log("first Child commit ")
}   
  render(){
    console.log("first child render");

   return (
    <UserClass1/>
   )
  }

}

export default UserClass;