import { useEffect, useState } from "react"

const Display4=()=>
{
    const [data,setData]=useState(10)
    useEffect(() => {
  console.log("hello", data)
}, [data])

    return (
        <>
        <h1>This is Diplsay4</h1>
        <h2>This is data {data}</h2>
        <button onClick={()=>{setData((t)=>t=t+1)}}>Increment</button></>
    )
} 
export default Display4