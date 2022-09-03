import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/mypageNavbar.css'

function mypageNavbar() {
    return(
        <>
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' >
                    BAMDAL
                </Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to='' className='nav-links' >
                            LOGOUT
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shop' className='nav-links'>
                            SHOP
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/communitymain' className='nav-links'>
                            COMMUNITY
                        </Link>
                    </li>      
                </ul>
            </div>
        </div>
    </>
    )

}
export default mypageNavbar;