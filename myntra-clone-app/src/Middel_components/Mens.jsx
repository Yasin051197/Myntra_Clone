


import data from "../db.json"
let Images=[]
let clothing=data.clothing
console.log(clothing)

function Mens()
{
    return (
        <div>
            <p>Data</p>
            {
                clothing.map((el)=>
                {
                  if(el.category==="Mens")
                  {
                    let length=el.images.length
                    if(length===8)
                    {
                      Images=el.images
                      console.log(Images[Images.length-1])
                    }
                  }
                })
            }
        </div>
    )
}
export default Mens