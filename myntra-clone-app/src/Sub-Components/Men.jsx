
import { Link, Route } from "react-router-dom"
import Hoverbox from "../HoverBox/Hover"
import Retrive from "../Retrive_component/Retrive"
import "./Mens.css"


export default function Men(){
    const handleRoute=()=>{
        <Route path="../Retrive_component/Retrive" element={<Retrive />}/>
    }
    return (
        <div className="mens_div">
            <h4 className="mens" onClick={handleRoute}>MEN</h4>
            <Hoverbox />
        </div>
    )
}