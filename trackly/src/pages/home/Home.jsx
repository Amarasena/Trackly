import './home.css'

import Navbar from '../../components/nav-bar/Navbar';
import MainMap from '../../components/main-map/MainMap';

export default function Home(){
    return(
        <div className="home-container">
            <div className="nav-bar-container">
            <Navbar />
            </div>
            <div className="main-map-container">
            <MainMap />
            </div>
        </div>
    )
}