


import { useState } from "react"
import data from "../db.json"
let clothing=data.clothing
console.log(clothing)

function Childs()
{
  const [childsdata,setChildsdata]=useState([])
  let count=0;
  clothing.map((el)=>
                {
                  if(el.category==="Child")
                  {
                    let length=el.images.length
                    if(length===8)
                    {
                      if(count<24)
                      {
                        childsdata.push(el.images)
                      }
                      count++
                    }
                  }
                })
    return (
       <div>
        {
          childsdata.map(image=><img style={{border:"5px solid gold",margin:"5px",width:"10%",height:"10%"}} key={image.id} src={image}/>)}
        
        </div>
    )
}
export default Childs