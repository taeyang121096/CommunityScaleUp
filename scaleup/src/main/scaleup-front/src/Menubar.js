import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css';


function Menubar() {
    return (
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
    );
}

export default Menubar
