import './navbar.css'
import logo from '../../assets/images/logo_black.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export default function Navbar(){
    return(
        <div className="nav-bar-container">
            <div className="logo-container">
                <img src={logo} alt="trackly-logo-black" />
            </div>
            <div className="footer-container">
                <div className="logout-icon">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} size='2x'/>
                </div>
            </div>
        </div>
    );
}