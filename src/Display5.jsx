import { useState } from "react"

const Display5=()=>
{
    // const[name,setName]=useState("Aarthi")
    // const[age,setAge]=useState(18)
    // const[dept,setDept]=useState("IT")

    const[student,Setstudent]=useState(
        {name:"Shivani",
        dept:"IT",
        age:18
 } )
 console.log("the current state:",student)
 function updateName()
 {
    // Setstudent({name:"kani"})
     Setstudent((previousdata)=>{
        console.log("prevdata:************",previousdata)
        return ({...previousdata,name:"kani",age:19})
     }
    )
 }
    

    return(
        <>
        <h2>Name:{student.name}</h2>
        <h2>Age:{student.age}</h2>
        <h2>Dept:{student.dept}</h2>
        <button onClick={updateName}>Change Name</button>
        </>
    )

}
export default Display5
