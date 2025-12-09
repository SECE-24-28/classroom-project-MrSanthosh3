import Display1 from "./Display1"

function Display(props)
{
    var data="this is the day"
    const {a,ch,arr,obj,receive}=props
    return (
        <>
        <h1>Hello {a}!!</h1>
        <h2>We are in Display {ch}</h2>
        <h2>Array is </h2>
        <ul>
            {
                arr.map((s,ind )=>
                {
                    return (
                    <li key={ind}>{s}</li>
                    )
                })
            }
        </ul>
        <h2>The obj is:</h2>
        {obj.name}<br></br>{obj.dept}
         <br></br>
        <button onClick={()=>receive(data)}>Click!</button>
        <h1>==================================================</h1>
        <Display1  val={ch}/>
        </>
    )
}
export default Display