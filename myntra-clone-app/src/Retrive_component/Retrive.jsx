import Navbar from "../components/Navbar";



export default function Retrive()
{
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <p>Route</p>
                    <p>Results</p>
                    <p>Filter Title</p>
                </div>
                <div>
                    <div style={{width:"20%"}}>
                        <p>leftdiv</p>
                    </div>
                    <div style={{width:"80%"}}>
                        <p>rightdiv</p>
                    </div>
                </div>
            </div>
        </div>
    )
}