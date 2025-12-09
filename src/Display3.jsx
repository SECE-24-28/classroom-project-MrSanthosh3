import { useRef, useState } from "react"

const Display3=()=>
{
    const [myname,setName]=useState("hello")
    const abc=useRef()
    const see=()=>
    {
        console.log("the data is ",abc.current.value)
        setName(abc.current.value)
    }
    return <>
    <h1>im from dispaly3 {myname}</h1>
    <input type="text" ref={abc}></input>
    <button onClick={see}>Submit</button>
    </>
}
export default Display3
//using useRef