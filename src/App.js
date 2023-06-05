import React,{ Component } from "react";
import EmployeeTable from "./components/EmployeeTable"
class App extends React.Component{
constructor(props){
super(props)
this.state={
  name:"shubham",
  arr:["mohit","prajyot","somesh"]
}
}
addname=(nm)=>{
  this.setState=({...this.state.arr,arr:[...this.state.arr,nm]})

}
render(){
  return(<div>
  <EmployeeTable>empdata:{this.state.arr} insertData:{this.addname}</EmployeeTable>
  </div>
)}
}


export default App;