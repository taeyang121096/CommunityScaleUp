import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/components/Navbar.css';
import Login from "./Login";


function Navbar() { //메인 네비 바
    const [visible, setVisible] = useState(false); //Sign-in 클릭 시, 로그인 창 나타나게 하기.

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' >
                        BAMDAL
                    </Link>
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' >
                                SIGN UP
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-in' className='nav-links' >
                                SIGN IN
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/mypage' className='nav-links'>
                                <i className="fa fa-user" aria-hidden="true" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {visible && <Login />}
        </>
    );
}

export default Navbar