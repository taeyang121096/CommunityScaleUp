import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import '../../styles/community/communityNavbar.css'
import Signup from "../../components/Signup";
import Login from "../../components/Login";
import MainPage from '../main/Main';
import CoummunityMenu from './communityMenu';

function CoummunityNavbar() { //메인 네비 바
    const [visible, setVisible] = useState(false); //Sign-in 클릭 시, 로그인 창 나타나게 하기.

    return ( //아래의 Link 부분이 안됩니다...... 
        <> 
        {/* <Routes>
                <Route path="/" exact={true} element = {<MainPage/>}/>
                <Route path="/sign-up" element = {<Signup/>}/>
                <Route path="/shop" element = {<ShopMain/>}/>
        </Routes> */}
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className = 'navbar-logo' > 
                    BAMDAL 
                </Link>
                <div className='currentPage-coummunity'>
                    COMMUNITY
                </div>
                <ul className= 'nav-menu'>
                    <li className='nav-item'>
                        <Link to='/shop' className='nav-links'>
                            SHOP
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pay' className='nav-links'>
                            PAY
                        </Link>
                    </li>      
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links'>
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
        <CoummunityMenu/>
        {visible && <Login />}
        </>
    );
}

export default CoummunityNavbar