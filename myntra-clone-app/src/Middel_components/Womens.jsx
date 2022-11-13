


import { useState } from "react"
import data from "../db.json"
let clothing=data.clothing
console.log(clothing)

function Womens()
{
  const [womensdata,setChildsdata]=useState([])
  let count=0;
  clothing.map((el)=>
                {
                  if(el.category==="Womens")
                  {
                    let length=el.images.length
                    if(length===8)
                    {
                      if(count<24)
                      {
                        womensdata.push(el.images)
                      }
                      count++
                    }
                  }
                })
    return (
       <div>
        {
          womensdata.map(image=><img style={{border:"5px solid gold",margin:"5px",width:"10%",height:"10%"}} key={image.id} src={image}/>)}
        
        </div>
    )
}
export default Womens