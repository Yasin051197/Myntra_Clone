import { Route, Routes } from "react-router-dom";
import Retrive from "../Retrive_component/Retrive";



function AllRoutes()
{
    return (
        <div>
            <Routes>
                <Route path="/Retrive" element={<Retrive />}/>
            </Routes>
        </div>
    )
}
export default AllRoutes