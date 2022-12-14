import { Link } from "react-router-dom"
import Bag from "../Sub-Components/Bag"
import Beuty from "../Sub-Components/Beuty"
import Home_Living from "../Sub-Components/Home&Living"
import Kids from "../Sub-Components/Kids"
import Logo from "../Sub-Components/Logo"
import Men from "../Sub-Components/Men"
import Profile from "../Sub-Components/Profile"
import SearchBar from "../Sub-Components/SearchBar"
import Studio from "../Sub-Components/Studio"
import WishList from "../Sub-Components/WishList"
import Women from "../Sub-Components/Women"




function Navbar(){
    return (
        <div style={{width:"100%",padding:"10px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",display:"flex",justifyContent:"space-around",margin:"auto"}}>
            <Logo />
            <Men />
            <Women />
            <Kids />
            <Home_Living />
            <Beuty />
            <Studio />
            <SearchBar />
            <Profile />
            <WishList />
            <Bag />
        </div>
    )
}
export default Navbar