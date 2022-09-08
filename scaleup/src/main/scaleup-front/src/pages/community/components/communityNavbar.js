import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import '../../../styles/community/components/communityNavbar.css'
import Signup from "../../../components/Signup";
import Login from "../../../components/Login";


function CommunityNavbar() { //메인 네비 바
    const [visible, setVisible] = useState(false); //Sign-in 클릭 시, 로그인 창 나타나게 하기.

    return ( //아래의 Link 부분이 안됩니다...... 
        <> 
        
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className = 'navbar-logo' > 
                    BAMDAL 
                </Link>
                <div className='currentPage-community'>
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
<<<<<<< HEAD
        
=======
>>>>>>> 9425170d412229172c4996d3624517e083a10938
        {visible && <Login />}
        </>
    );
}

export default CommunityNavbar