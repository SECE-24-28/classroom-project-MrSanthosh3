import { useState } from "react"

const  Array1=()=>
{
    const [arr,setarr]=useState([1,2,3,4,5])
    return (
        <>
        <h1>The arrays are:</h1>
        <ul>
              {
            arr.map((d,ind)=>{
                    return (<li key={ind}>{d}</li>)
            })
        }

        </ul>
        </>
    )
}
export default Array1;