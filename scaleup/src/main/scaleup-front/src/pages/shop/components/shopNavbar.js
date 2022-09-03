import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import '../../../styles/shop/components/shopNavbar.css';
import Login from "../../../components/Login";
import ShopMenu from './shopMenu';



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
                <Link to='/shop' className='navbar-logo' >
                SHOP
                </Link>
                </div>
                <ul className= 'nav-menu'>
                    <li className='nav-item'>
                        <Link to='/communitymain' className='nav-links'>
                            COMMUNITY
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
                        <Link to='/sign-in' className='nav-links'>
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
        <ShopMenu/>
        {visible && <Login />}
        </>
    );
}

export default ShopNavbar