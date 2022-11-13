


import { useState } from "react"
import Middle from "../components/Middle"
import data from "../db.json"
let clothing=data.clothing
//console.log(clothing)

function Mens()
{
  const [mensdata,setMensdata]=useState([])
  let count=0;
  clothing.map((el)=>
                {
                  if(el.category==="Mens")
                  {
                    let length=el.images.length
                    if(length===8)
                    {
                      if(count<24)
                      {
                        mensdata.push(el.images)
                      }
                      count++
                    }
                  }
                })

     const handleretrive=()=>
     {
      console.log("click")
     }           
    return (
       <div>
        {
          mensdata.map(image=><img onClick={handleretrive} style={{border:"5px solid gold",margin:"5px",width:"10%",height:"10%"}} key={image.id} src={image}/>)}
        
        </div>
    )
}
export default Mens