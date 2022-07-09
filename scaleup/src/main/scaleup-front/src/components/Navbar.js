import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Login from "../pages/Login"


function Navbar() {
    const [visible, setVisible] = useState(false); //Sign-in 클릭 시, 로그인 창 나타나게 하기.

    return (
        <>
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className = 'navbar-logo' >
                    BAMDAL 
                </Link>
                <ul className= 'nav-menu'>
                    <li className='nav-item'>
                        <Link to='' className='nav-links'>
                            SIGN UP
                        </Link>
                    </li>     
                    <li className='nav-item'>
                        <Link to='/sign-in' className='nav-links' onClick = {() => {setVisible(!visible)}}>
                            SIGN IN
                        </Link>                 
                    </li>
                    <li className='nav-item'>
                        <Link to='' className='nav-links'>
                        <i className="fa fa-user" aria-hidden="true"/>
                        </Link>
                    </li> 
                </ul>
            </div>
        </div>
        <div>
        {visible && <Login />}
        </div>
        </>
    );
}

export default Navbar