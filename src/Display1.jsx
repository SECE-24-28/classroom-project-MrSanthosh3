import { useState } from "react"

function Display1(props)
{
    const{val}=props
    const [myname,settyname]=useState("hello")
    // var a1="a1"
    // console.log("im inside the display1 ",{a1})
    console.log("im inside the disp1",{myname} )
    // function Changename(d)
    // {
    //     var b1=d
        
    //     console.log("im inside the display1 ",{b1})
    // }
    
    return(
        <>
        <h1>im from display1 {myname} </h1>
        <button onClick={()=>{settyname("c1")}}> Click here </button>
      <h1> I am from display parent {val}</h1>
        </>

    )
}
export default Display1