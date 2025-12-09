import { useState } from "react";

const Display2=()=>
{
   const [myname,setName]=useState("")
   console.log("the value is",{myname})
   return(
    <>
    <h1>im from display2 {myname}</h1>
    <input type="text"  value ={myname} onChange={(e)=>{setName(e.target.value)}}></input>
    <button onClick={()=>{setName("")}}>Clear!</button>
    </>
   )
}
export default Display2;
// this is without using ref