import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import data from "./db.json"

function App() {
 const [userdata, setUserData]=useState(data)
 const handleSort=(type)=>{
  if (type==="asc"){
    const newArr=userdata.sort((a,b)=>{
      if(a.first_name > b.first_name){
        return +1
      }
      else if(a.first_name < b.first_name){
        return -1
      }
    })
      setUserData([...newArr])
  }
  else{
    const newArr=userdata.sort((a,b)=>{
      if(a.first_name > b.first_name){
        return -1
      }
      else if(a.first_name < b.first_name){
        return +1
      }
    })
      setUserData([...newArr])
  }
 }


  return (
    <div className="App" data-testid = 'app'>
      <button  data-testid = 'sort-asc-btn' onClick={()=>handleSort("asc")}>Sort by Asc</button>
      <button  data-testid = 'sort-desc-btn' onClick={()=>handleSort("dec")}>Sort by Desc</button>
      {/*  map through the users data and pass props to the Userdetails component */}
      {userdata.map((el)=><UserDetails key={el.id}{...el}/>)}
      
    </div>
  );
}

export default App;
