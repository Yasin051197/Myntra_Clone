import Bag from "../Sub-Components/Bag"
import Beuty from "../Sub-Components/Beuty"
import Home_Living from "../Sub-Components/Home&Living"
import Kids from "../Sub-Components/Kids"
import Men from "../Sub-Components/Men"
import Profile from "../Sub-Components/Profile"
import SearchBar from "../Sub-Components/SearchBar"
import Studio from "../Sub-Components/Studio"
import WishList from "../Sub-Components/WishList"
import Women from "../Sub-Components/Women"




function Navbar(){
    return (
        <div style={{border:"1px solid red",display:"flex",justifyContent:"space-around",margin:"auto"}}>
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