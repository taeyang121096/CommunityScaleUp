import React from 'react';
import { Link } from 'react-router-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import '../../styles/main/Menubar.css'
import ShopMain from '../shop/shopMain';
import CommunityMain from '../community/communityMain';


function Menubar() { //메인 페이지 가운데 메뉴
    return (
        <>
        <nav className = 'menubar'>
            <div className = 'menubar-container'>
                    <li className='menu-item'>
                        <Link to='/shop' className='menu-links' >
                            SHOP
                        </Link>
                    </li>     
                    <li className='menu-item'>
                        <Link to='/community' className='menu-links' >
                           COMMUNITY
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/pay' className='menu-links' >
                           PAY
                        </Link>                 
                    </li>
            </div>
        </nav>
        </>
    );
}

export default Menubar
