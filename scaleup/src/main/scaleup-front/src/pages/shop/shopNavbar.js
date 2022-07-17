import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import '../../styles/shop/shopNavbar.css';
import Signup from "../../components/Signup";
import Login from "../../components/Login";


function ShopNavbar() { //메인 네비 바
    const [visible, setVisible] = useState(false); //Sign-in 클릭 시, 로그인 창 나타나게 하기.

    return ( //아래의 Link 부분이 안됩니다...... 
        <> 
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className = 'navbar-logo' > 
                    BAMDAL 
                </Link>
                <div className='currentPage-shop'>
                    SHOP
                </div>
                <ul className= 'nav-menu'>
                    <li className='nav-item'>
                        <Link to='/community링크' className='nav-links'>
                            COMMUNITY
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pay링크' className='nav-links'>
                            PAY
                        </Link>
                    </li>      
                    <li className='nav-item'>
                        <Link to='../../components/Signup' className='nav-links'>
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

export default ShopNavbar