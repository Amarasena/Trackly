import './login.css'
import logo from '../../assets/images/logo_black.png'

import { useState } from 'react'

import Passenger from './passenger/Passenger'
import Driver from './driver/Driver'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalkingLuggage, faBus } from '@fortawesome/free-solid-svg-icons'

const loginItem = [
    {
        id: 1,
        description: "Passenger",
        icon: <FontAwesomeIcon icon={faPersonWalkingLuggage} />,
    },
    {
        id: 2,
        description: "Driver",
        icon: <FontAwesomeIcon icon={faBus} />,
    }
]


export default function Login(){

    const [active, setActive] = useState(1);

    const DisplayData = () => {
        switch(active){
            case 1: return <Passenger />
            case 2: return <Driver />
            default: return <Passenger />
        }
    }
    



    return(
        <div className="login-container">
            <div className="login-container-inner">
                <div className="logo-container">
                    <img src={logo} alt="trackly logo black" />
                </div>
                <div className="login-content">
                    <span style={{fontSize: "24px", fontWeight: 'bold', textAlign: 'center', margin: '8px 0 8px 0'}}>Login</span>
                    <div className="button-container">
                        <div className="login-items">
                            {loginItem.map((item) => {
                                return(<li
                                    key={item.id}
                                    onClick={() => setActive(item.id)}
                                    className={active === item.id ? 'active' : ''}
                                    >
                                        <i>{item.icon}</i>
                                        <span>{item.description}</span>
                                    </li>
                                );
                            })}
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="form-container">
                        {DisplayData()}
                    </div>
                </div>
            </div>
        </div>
    )
}