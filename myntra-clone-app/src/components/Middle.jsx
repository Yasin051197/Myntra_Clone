import Childs from "../Middel_components/Kids";
import Mens from "../Middel_components/Mens";
import Womens from "../Middel_components/Womens";



export default function Middle()
{
    return (
        <div>
            <p>Middle</p>
            <h3 style={{textAlign:"left",marginLeft:"5%",marginTop:"50px"}}>Mens</h3>
            <Mens />
            <h3 style={{textAlign:"left",marginLeft:"5%",marginTop:"50px"}}>Womens</h3>
            <Womens />
            <h3 style={{textAlign:"left",marginLeft:"5%",marginTop:"50px"}}>Childs</h3>
            <Childs />
        </div>
    )
}