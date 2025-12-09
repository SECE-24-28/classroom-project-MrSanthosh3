import { useState } from "react";
import Display from "./Display"


function App() {
  const[mydata,setdata]=useState()
  
var name="shiva";
var ch=90;
var arr=[12,24,36]
var obj={
  name:"kani",
  dept:"IT"
}
const getdata=(d)=>
{
  console.log("got it",d)
  setdata(d)
}


  return (
    <>
    <h1>Hi, Aarthi!</h1>
    <h1>=======================</h1>
    <Display a={name} ch={ch} arr={arr} obj={obj} receive={getdata}/>
    </>
    
  )
}

export default App
